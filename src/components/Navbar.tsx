import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CodeLearn</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/courses"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-indigo-600"
              >
                Courses
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-indigo-600"
                >
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center text-gray-900 hover:text-indigo-600"
                >
                  <User className="h-5 w-5" />
                  <span className="ml-2">Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-900 hover:text-indigo-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-2">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;