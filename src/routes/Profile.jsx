import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <div className="d-flex align-items-center mb-4">
                <img 
                  src="/images/demo-user.jpg" 
                  alt="Profile" 
                  className="rounded-circle me-4 border border-3 border-primary" 
                  width="100" 
                  height="100" 
                />
                <div>
                  <h2 className="fw-bold mb-1">Demo User</h2>
                  <p className="text-muted mb-0">@demouser • Joined Jan 2026</p>
                </div>
              </div>
              
              <div className="row mb-4 text-center g-3">
                <div className="col-4">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h4 className="fw-bold mb-0">142</h4>
                    <span className="text-muted small">Posts</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h4 className="fw-bold mb-0">1.2k</h4>
                    <span className="text-muted small">Followers</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h4 className="fw-bold mb-0">340</h4>
                    <span className="text-muted small">Following</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <button className="btn btn-outline-secondary">Edit Profile</button>
                <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
