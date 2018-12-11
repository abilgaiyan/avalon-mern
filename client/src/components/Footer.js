import React from "react";
let currentyer = (new Date()).getFullYear();
const Footer = () => {
  return (
    <footer className="footer-well text-center">
      <div>
        © {currentyer} Avalon Solution. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
