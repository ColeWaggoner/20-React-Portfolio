import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://github.com/colewaggoner"
            >
              <i className="fab fa-github fa-2x mr-2">GitHub</i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-username/"
            >
              <i className="fab fa-linkedin-in fa-2x mr-2">LinkedIn</i>
            </a>
            <a
              href="https://stackoverflow.com/users/your-user-id/your-username"
            >
              <i className="fab fa-stack-overflow fa-2x mr-2"></i>
            </a>
            <a
              href="https://www.instagram.com/colejwaggoner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x">instagram</i>
            </a>
          </div>
          <div className="col-md-8 mt-2 mt-md-0">
            <p className="m-0 text-muted">
              Created Cole Waggoner &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;