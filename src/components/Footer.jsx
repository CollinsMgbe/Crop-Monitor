import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-700 text-white py-4">
      <div className="container mx-auto px-4">

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FinColl Agro Industries Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;