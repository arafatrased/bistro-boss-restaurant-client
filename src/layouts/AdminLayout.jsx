import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Settings
            </NavLink>
          </li>
          <NavLink to="/"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }>Home</NavLink>
              <NavLink to="/contact-us"
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }>Contact-us</NavLink>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;