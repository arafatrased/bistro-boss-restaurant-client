import React from 'react';
import Navbar from '../shared/Navbar';

function AuthLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;