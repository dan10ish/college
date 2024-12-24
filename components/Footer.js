"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          Made with ♥ by{" "}
          <a
            href="https://danish.bio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danish
          </a>
        </div>
        <div className="copyright">© {currentYear}</div>
      </div>
    </footer>
  );
};

export default Footer;
