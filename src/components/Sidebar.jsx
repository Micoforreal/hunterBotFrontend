import React from 'react';
export function Sidebar() {
  return <div className="w-64 border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-extrabold text-black" >HUNTER</h1>
      </div>
      <div className="flex flex-col flex-grow px-4 py-2">
        <button className="bg-purple-400 text-white py-3 px-4 rounded-md mb-2 text-left font-medium">
          Dashboard
        </button>
        <button className="text-gray-700 py-3 px-4 rounded-md mb-2 text-left font-medium hover:bg-gray-100">
          Jobs
        </button>
        <button className="text-gray-700 py-3 px-4 rounded-md mb-2 text-left font-medium hover:bg-gray-100">
          Connections
        </button>
        <button className="text-gray-700 py-3 px-4 rounded-md mb-2 text-left font-medium hover:bg-gray-100">
          Analytics
        </button>
        <button className="text-gray-700 py-3 px-4 rounded-md mb-2 text-left font-medium hover:bg-gray-100">
          Notifications
        </button>
        <div className="flex-grow"></div>
        <button className="text-gray-700 py-3 px-4 rounded-md mb-2 text-left font-medium hover:bg-gray-100 mt-auto">
          Settings
        </button>
      </div>
    </div>;
}