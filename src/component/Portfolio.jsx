import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Search, Filter, List, CheckCircle, ArrowUp, ArrowDown } from "lucide-react";
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";

const Portfolio = () => {
  const [sorting, setSorting] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [loanTypeFilter, setLoanTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedRows, setSelectedRows] = useState([]);
  const [completedLoans, setCompletedLoans] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([
    "select", "loanNo", "loanType", "borrower", "borrowerAddress", 
    "coBorrower", "coBorrowerAddress", "dpd", "sanctionAmount", "region", "status"
  ]);

  // Add unique IDs to each row for selection
  const dataWithIds = useMemo(() => [
    {
      id: 1,
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj, Kadapa-058720",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543, Acharya Path Ongole-052360",
      dpd: 91,
      sanctionAmount: "₹ 1,934,068",
      region: "West",
      status: "U"
    },
    {
      id: 2,
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622, Deo Path, Berhampore 841186",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tella Road, Sultan Pur Marja 919878",
      dpd: 100,
      sanctionAmount: "₹ 1,842,143",
      region: "North",
      status: "M"
    },
    {
      id: 3,
      loanNo: "L28U3250",
      loanType: "Car Loan",
      borrower: "Priyansh Soman",
      borrowerAddress: "H.No. 152 Andra Street Amritsar-471162",
      coBorrower: "Zaina Dara",
      coBorrowerAddress: "H.No. 42, Srivastava Marg, Junagadh-191124",
      dpd: 100,
      sanctionAmount: "₹ 4,537,889",
      region: "East",
      status: "T"
    },
    {
      id: 4,
      loanNo: "L28U3248",
      loanType: "Home Loan",
      borrower: "Priyansh Chanda",
      borrowerAddress: "24, Ray Chowk Guntakal 809332",
      coBorrower: "Zain Ghosh",
      coBorrowerAddress: "H.No. 59, Dugar Street Kolhapur-543900",
      dpd: 100,
      sanctionAmount: "₹ 2,681,712",
      region: "West",
      status: "A"
    },
    {
      id: 5,
      loanNo: "L28U3260",
      loanType: "Home Loan",
      borrower: "Hrishita Sen",
      borrowerAddress: "94/36 Barad, Hubli-Dharwad-408790",
      coBorrower: "Shray Kala",
      coBorrowerAddress: "63/66, Bhardwaj Street Bokaro 662204",
      dpd: 100,
      sanctionAmount: "₹ 4,456,808",
      region: "West",
      status: "R"
    },
    {
      id: 6,
      loanNo: "L28U3265",
      loanType: "Personal Loan",
      borrower: "Vivaan Virk",
      borrowerAddress: "H.No. 653 Dada Ganj Ichakkaranj 279923",
      coBorrower: "Bakshi Chahal",
      coBorrowerAddress: "16/45 Divan Road Jabalpur 962051",
      dpd: 76,
      sanctionAmount: "₹ 3,863,514",
      region: "West",
      status: "M"
    },
    {
      id: 7,
      loanNo: "L28U3264",
      loanType: "Car Loan",
      borrower: "Nirvaan Mandar",
      borrowerAddress: "543 Shipful Street, Bhaktwa Jahangir Pur-348320",
      coBorrower: "Vihaan Dua",
      coBorrowerAddress: "H.No. 115, Saha Road Singraul 049374",
      dpd: 90,
      sanctionAmount: "₹ 1,256,683",
      region: "South",
      status: "K"
    },
    {
      id: 8,
      loanNo: "L28U3266",
      loanType: "Personal Loan",
      borrower: "Nirvi Sahni",
      borrowerAddress: "41/42, Dua, Amroha-741196",
      coBorrower: "Dhanuk Lalla",
      coBorrowerAddress: "48/41, Garde Path Uluberla 709896",
      dpd: 75,
      sanctionAmount: "₹ 2,687,388",
      region: "East",
      status: "W"
    },
    {
      id: 9,
      loanNo: "L28U3267",
      loanType: "Personal Loan",
      borrower: "Samaira Jain",
      borrowerAddress: "79/10 Barad Zila Thoothukudi 606938",
      coBorrower: "Chikag Tripathi",
      coBorrowerAddress: "23/11 Rawl Street, Panchkula-006035",
      dpd: 76,
      sanctionAmount: "₹ 3,617,146",
      region: "South",
      status: "G"
    },
    {
      id: 10,
      loanNo: "L28U3269",
      loanType: "Personal Loan",
      borrower: "Aradhya Jayaraman",
      borrowerAddress: "410, Vohra Zila Moradabad 963541",
      coBorrower: "Shaan Hora",
      coBorrowerAddress: "35/41, Bojaj Nagar Nagoon-504713",
      dpd: 76,
      sanctionAmount: "₹ 1,383,439",
      region: "South",
      status: "A"
    }
  ], []);

  const allColumns = useMemo(() => [
    {
      accessorKey: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
    },
    { accessorKey: "loanNo", header: "Loan No" },
    { accessorKey: "loanType", header: "Loan Type" },
    { accessorKey: "borrower", header: "Borrower" },
    { accessorKey: "borrowerAddress", header: "Borrower Address" },
    { accessorKey: "coBorrower", header: "Co Borrower" },
    { accessorKey: "coBorrowerAddress", header: "Co Borrower Address" },
    { accessorKey: "dpd", header: "Current DPD" },
    { accessorKey: "sanctionAmount", header: "Sanction Amount" },
    { accessorKey: "region", header: "Region" },
    { accessorKey: "status", header: "Status" }
  ], []);

  const columns = useMemo(() => 
    allColumns.filter(col => 
      !col.accessorKey || visibleColumns.includes(col.accessorKey)
    ), 
    [allColumns, visibleColumns]
  );

  const filteredData = useMemo(() => {
    return dataWithIds.filter(row => {
      const matchesSearch = row.loanNo.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          row.borrower.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLoanType = loanTypeFilter === "All" || row.loanType === loanTypeFilter;
      const matchesStatus = statusFilter === "All" || row.status === statusFilter;
      return matchesSearch && matchesLoanType && matchesStatus;
    });
  }, [dataWithIds, searchQuery, loanTypeFilter, statusFilter]);

  const moveToCompleted = () => {
    const completedItems = dataWithIds.filter(row => selectedRows.includes(row.id));
    setCompletedLoans(prev => [...prev, ...completedItems]);
    setSelectedRows([]);
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      rowSelection: selectedRows.reduce((acc, id) => {
        acc[id] = true;
        return acc;
      }, {}),
    },
    onSortingChange: setSorting,
    onRowSelectionChange: (updater) => {
      const newSelection = typeof updater === 'function' 
        ? updater(table.getState().rowSelection) 
        : updater;
      setSelectedRows(Object.keys(newSelection).map(Number));
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    getRowId: (row) => row.id.toString(),
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Portfolio</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Pre Sarfessi</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">NPA</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">13(3) Responses</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">Symbolic Possession</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">DM Order</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">Physical Possessions</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">Auctions</button>
      </div>

      {/* Search and Filter Row */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Loan Number"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => setShowColumnSelector(!showColumnSelector)}
          >
            <List className="h-4 w-4" />
            <span>Select Columns</span>
          </button>
          
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Column selector dropdown */}
      {showColumnSelector && (
        <div className="absolute right-6 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <div className="p-2">
            {allColumns.filter(col => col.accessorKey).map((column) => (
              <div key={column.accessorKey} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(column.accessorKey)}
                  onChange={() => {
                    setVisibleColumns(prev =>
                      prev.includes(column.accessorKey)
                        ? prev.filter(col => col !== column.accessorKey)
                        : [...prev, column.accessorKey]
                    );
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                />
                <label className="text-sm">{column.header}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Filters */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-md mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Loan Type</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={loanTypeFilter}
              onChange={(e) => setLoanTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="U">U</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="A">A</option>
              <option value="R">R</option>
              <option value="K">K</option>
              <option value="W">W</option>
              <option value="G">G</option>
            </select>
          </div>
        </div>
      )}

      {/* Selected Count and Action Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          {selectedRows.length} loan{selectedRows.length !== 1 ? 's' : ''} selected
        </div>
        {selectedRows.length > 0 && (
          <button
            onClick={moveToCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <CheckCircle className="h-4 w-4" />
            Mark as Completed
          </button>
        )}
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <ArrowUp className="ml-1 h-3 w-3" />,
                        desc: <ArrowDown className="ml-1 h-3 w-3" />,
                      }[header.column.getIsSorted()] ?? (
                        header.column.columnDef.header !== "" && (
                          <div className="ml-1 flex flex-col">
                            <ArrowUp className="h-2 w-3 -mb-1" />
                            <ArrowDown className="h-2 w-3" />
                          </div>
                        )
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Completed Loans Section */}
      {completedLoans.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Completed Loans ({completedLoans.length})
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Borrower
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {completedLoans.map((loan) => (
                  <tr key={loan.id} className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 line-through">
                      {loan.loanNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 line-through">
                      {loan.loanType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 line-through">
                      {loan.borrower}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;