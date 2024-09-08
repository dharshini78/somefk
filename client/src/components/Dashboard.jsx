import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Settings, User, LogOut, Menu, Bell, UserCircle } from "lucide-react";
import emblem from "../assets/emblem.png";

const certificateTypes = [
  { name: "Caste Certificate", icon: "partner_exchange", path: "caste-certificate" },
  { name: "Income Certificate", icon: "savings", path: "income-certificate" },
  { name: "Residence Certificate", icon: "home", path: "residence-certificate" },
  { name: "Birth Certificate", icon: "cake", path: "birth-certificate" },
  { name: "Death Certificate", icon: "skull", path: "death-certificate" },
  { name: "Community Certificate", icon: "communities", path: "community-certificate" },
  { name: "No Graduate Certificate", icon: "running_with_errors", path: "no-graduate-certificate" },
  { name: "First Graduate Certificate", icon: "school", path: "first-graduate-certificate" },
  { name: "Nativity Certificate", icon: "person_pin_circle", path: "nativity-certificate" },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate("/login");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } flex flex-col fixed inset-y-0 z-50 bg-orange-100 dark:bg-gray-900 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-40 bg-orange-500 dark:bg-orange-800 p-4">
          <img src={emblem} alt="Indian Emblem" className="h-20 w-auto mb-2" />
          <h1 className={`text-center text-white font-bold ${sidebarOpen ? "text-sm" : "text-xs"}`}>
            {sidebarOpen ? "National Government Services Portal" : "NGSP"}
          </h1>
        </div>
        <div className="flex items-center justify-end h-12 px-4 bg-orange-600 dark:bg-orange-900">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-white hover:bg-orange-700 dark:hover:bg-orange-800"
          >
            <Menu size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {certificateTypes.map((type, index) => (
              <li key={index}>
                <Link
                  to={`certificate/${type.path}`}
                  className="flex items-center p-2 text-gray-800 dark:text-gray-200 hover:bg-orange-200 dark:hover:bg-gray-700 rounded-md transition duration-150 ease-in-out"
                >
                  <span className="material-symbols-outlined mr-2">{type.icon}</span>
                  {sidebarOpen ? type.name : type.name.charAt(0)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 bg-orange-200 dark:bg-gray-800">
          <Link
            to="settings"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 mb-2"
          >
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </Link>
          <Link
            to="profile"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 mb-2"
          >
            <User size={20} />
            {sidebarOpen && <span>Profile</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-20 sm:ml-64">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              National Government Services Portal
            </h2>
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400">
                <Bell size={24} />
              </button>
              <button className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400">
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-green-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
