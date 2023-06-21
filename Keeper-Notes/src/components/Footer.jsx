import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤ by Vishal Kumar ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
