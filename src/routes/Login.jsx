import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0 mt-5">
            <div className="card-body p-5 text-center">
              <h2 className="fw-bold mb-4">Connectify Demo</h2>
              <p className="text-muted mb-4">
                Welcome to Connectify! This is a portfolio-ready showcase app. Log in instantly with our demo account to explore the features.
              </p>
              
              <div className="d-grid gap-2">
                <button 
                  onClick={login} 
                  className="btn btn-primary btn-lg rounded-pill"
                >
                  Login as Demo User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
