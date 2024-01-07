import React from 'react';

function Footer() {
  return (
    <footer className="fixed z-[999] bottom-0 left-0 right-0 bg-gray-200 py-8 px-4 shadow-md flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Copyright © 2023 Tasneem
      </div>
      <div className="flex ml-auto gap-4">
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700"
        >
          Terms & Conditions
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
