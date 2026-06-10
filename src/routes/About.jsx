const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Connectify</h1>
              
              <p className="lead mb-4 text-muted">
                Connectify is a modern, portfolio-ready social media dashboard built to demonstrate advanced front-end development capabilities using React.
              </p>

              <h4 className="mt-5 mb-3">Tech Stack</h4>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">⚛️ React 19</li>
                <li className="list-group-item bg-transparent">🎨 Bootstrap 5</li>
                <li className="list-group-item bg-transparent">🛣️ React Router DOM</li>
                <li className="list-group-item bg-transparent">⚡ Vite</li>
              </ul>

              <h4 className="mt-5 mb-3">Core Features</h4>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h6 className="fw-bold">Dynamic Theming</h6>
                    <p className="small mb-0 text-muted">Seamless light/dark mode toggling using Context API.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h6 className="fw-bold">State Management</h6>
                    <p className="small mb-0 text-muted">Complex global state handling for posts and authentication.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h6 className="fw-bold">Routing Architecture</h6>
                    <p className="small mb-0 text-muted">Protected routes, nested layouts, and custom 404 pages.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded bg-body-tertiary">
                    <h6 className="fw-bold">Responsive UI</h6>
                    <p className="small mb-0 text-muted">Mobile-first design that adapts to any screen size.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
