import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 py-4 text-center text-sm">
        <p className="text-gray-400">
          © 2024 Battery Pass™. Version: 0.0.20416 (2024.09.17)
        </p>
        <p className="text-gray-500 mt-1">
          Disclaimer: In this battery pass demonstrator, the industrial partners
          of the project have provided sample data. The sample values shown are
          for demonstration purposes only. No representation is made as to the
          accuracy, adequacy, or completeness of the data.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
