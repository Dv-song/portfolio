import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm app_gray flex justify-between items-center max-container padding-container relative z-29 py-[20px] px-20">
      <p>© Dave SH Song 2024</p>
      <a
        className="cursor-pointer"
        href="https://docs.google.com/document/d/15BK_cKjaB5VSf5g-ugilq0ZpE-pmAlMVKnlNvL5jAT0/edit?usp=sharing"
      >
        Resume
      </a>
    </footer>
  );
};

export default Footer;
