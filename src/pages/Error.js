import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
  render() {
    return <section className="error-page section">
      <div className="error-container">
        <h2>oops! 400 (Bad Request)</h2>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>;
  }
}

export default Error;
