import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading';
import Error from '../pages/Error';



function SingleProductQuery({children}) {
    const { id } = useParams();
    const PRODUCT = gql`
    {
        product(id: "${id}"){
            name,
            id,
            description,
            gallery,
            prices{
                currency{
                symbol,
                label
                },
                amount
            },
            category
        }
    }
    `;

    const { data, loading, error } = useQuery(PRODUCT);
    if (loading) return <Loading/>;
    if (error) return <Error/>;
    
    return children({data, loading, error});
};

export default SingleProductQuery;

