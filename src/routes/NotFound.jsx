import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-body-tertiary">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
        <p className="lead">
          The page you're looking for doesn't exist on Connectify.
        </p>
        <Link to="/" className="btn btn-primary rounded-pill mt-3">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
