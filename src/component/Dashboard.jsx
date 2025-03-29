import React from "react";
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

const Dashboard = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 flex flex-col">
      <ul className="space-y-4">
        {menuItems.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
          >
            <Icon className="w-6 h-6" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;