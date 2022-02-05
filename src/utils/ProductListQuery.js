import React from 'react';
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
{
  categories{
    name,
    products {
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
      }
    }
  }
}
`;
function QueryComponent({children}) {
    const { data, loading, error } = useQuery(CATEGORIES);
    if (loading) return "Loading";
    if (error) return <pre>{error.message}</pre>
    
    return children({data, loading, error});
};

export default QueryComponent;
