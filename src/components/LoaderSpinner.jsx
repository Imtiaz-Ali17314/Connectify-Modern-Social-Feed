const LoaderSpinner = () => {
  return (
    <div className="container py-4">
      {[1, 2, 3].map((n) => (
        <div key={n} className="card shadow-sm mb-4 border-0" aria-hidden="true">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <span className="btn btn-primary disabled placeholder col-2 me-2"></span>
            <span className="btn btn-secondary disabled placeholder col-2"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoaderSpinner;
