import React, { useState } from "react";
import {
  Home, Folder, Bell, FileText, Gavel, Upload, Settings, Users, Shield
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Portfolio", icon: Folder },
  { name: "Notification", icon: Bell },
  { name: "Notices", icon: FileText },
  { name: "Auction", icon: Gavel },
  { name: "Data Upload", icon: Upload },
  { name: "Control Panel", icon: Settings },
  { name: "User Management", icon: Users },
  { name: "Permission", icon: Shield }
];

const UploadPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end ">
      <div className="bg-white w-96 h-full shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Upload Document</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Document Name</label>
            <select className="w-full border p-2 rounded">
              <option>Select</option>
              <option>Loan Agreement</option>
              <option>Borrower ID</option>
              <option>Property Documents</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Document Type</label>
            <select className="w-full border p-2 rounded">
              <option>Select</option>
              <option>PDF</option>
              <option>Image</option>
              <option>Word</option>
              <option>Excel</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Document Remarks</label>
            <input type="text" placeholder="Type remarks here" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Select File</label>
            <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
              <p className="text-gray-500">Drag & drop files here or click to browse</p>
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="inline-block mt-2 px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                Choose File
              </label>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700">Submit</button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handleMenuItemClick = (name) => {
    if (name === "Data Upload") {
      setActivePanel("upload");
    } else {
      setActivePanel(null);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with White Background and Shadow */}
      <div className="w-64 bg-white text-black p-4 flex flex-col shadow-md">
        <ul className="space-y-4">
          {menuItems.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                activePanel === "upload" && name === "Data Upload" ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleMenuItemClick(name)}
            >
              <Icon className="w-6 h-6 text-gray-600" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        {activePanel === "upload" ? <UploadPanel isOpen={true} onClose={() => setActivePanel(null)} /> : <div />}
      </div>
    </div>
  );
};

export default Dashboard;
