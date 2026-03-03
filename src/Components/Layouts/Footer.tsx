export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mt-5 mb-4">
      <div className="row">
        {/* Keeping the 2-column offset to match your Skills/About alignment */}
        <div className="col-md-2"></div>
        <div className="col-md-10 text-center">
          <hr className="opacity-25 mb-4" style={{ borderColor: 'gray' }} />
          <p className="mb-1">
            &copy; {currentYear} <span className="text-info text-bold">Fatema Jannat chowdhury Sanny</span>. All Rights Reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};