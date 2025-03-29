import React, { useState } from "react";

const UploadPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Upload Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>

      {/* Upload Panel (left side) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex">
          <div className="bg-white w-96 h-full shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upload Document</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
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
                <input 
                  type="text" 
                  placeholder="Type remarks here" 
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select File</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
                  <p className="text-gray-500">Drag & drop files here or click to browse</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="inline-block mt-2 px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                  >
                    Choose File
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPanel;