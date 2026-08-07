import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  Download,
  Search,
  SlidersHorizontal,
  FileSpreadsheet,
  FileText,
} from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { utils, writeFile } from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function DataTable({
  columns,
  data = [],
  isLoading = false,
  searchPlaceholder = 'Search records...',
  title,
  subtitle,
  actions,
  filterControls,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);

  // Client-side search filtering
  const filteredData = data.filter((row) => {
    if (!searchTerm) return true;
    return Object.values(row).some(
      (val) => val && val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Client-side sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination calculation
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((d) => d.id || d._id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Export Handlers
  const exportToExcel = () => {
    const ws = utils.json_to_sheet(sortedData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'DataExport');
    writeFile(wb, `${title || 'export'}_${Date.now()}.xlsx`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(title || 'Data Export', 14, 15);
    const tableHeaders = columns.map((c) => c.header);
    const tableRows = sortedData.map((row) =>
      columns.map((c) => (c.accessorKey ? row[c.accessorKey] : ''))
    );
    doc.autoTable({
      head: [tableHeaders],
      body: tableRows,
      startY: 20,
    });
    doc.save(`${title || 'export'}_${Date.now()}.pdf`);
  };

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
      {/* Table Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {title && <h2 className="text-lg font-bold text-slate-100">{title}</h2>}
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Input
            leftIcon={<Search className="w-4 h-4" />}
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />

          {filterControls}

          <div className="flex items-center gap-1.5 border-l border-slate-800 pl-2">
            <Button
              variant="outline"
              size="sm"
              onClick={exportToExcel}
              leftIcon={<FileSpreadsheet className="w-3.5 h-3.5" />}
            >
              Excel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportToPDF}
              leftIcon={<FileText className="w-3.5 h-3.5" />}
            >
              PDF
            </Button>
          </div>

          {actions}
        </div>
      </div>

      {/* Main Data Grid Table */}
      <div className="w-full overflow-x-auto border border-slate-800/80 rounded-xl">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <th className="p-3.5 w-10">
                <input
                  type="checkbox"
                  checked={
                    paginatedData.length > 0 &&
                    selectedRows.length === paginatedData.length
                  }
                  onChange={toggleSelectAll}
                  className="rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              {columns.map((col) => (
                <th key={col.header} className="p-3.5 font-semibold select-none">
                  {col.sortable !== false ? (
                    <button
                      onClick={() => handleSort(col.accessorKey)}
                      className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
                    >
                      {col.header}
                      <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {isLoading ? (
              // Skeleton rows
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="p-3.5">
                    <div className="w-4 h-4 bg-slate-800 rounded" />
                  </td>
                  {columns.map((_, j) => (
                    <td key={j} className="p-3.5">
                      <div className="h-4 bg-slate-800 rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="p-12 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <SlidersHorizontal className="w-8 h-8 text-slate-600" />
                    <p className="text-slate-300 font-medium">No records found</p>
                    <p className="text-xs text-slate-500">
                      Try adjusting your search query or filter parameters.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => {
                const rowId = row.id || row._id || index;
                const isSelected = selectedRows.includes(rowId);
                return (
                  <tr
                    key={rowId}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      isSelected ? 'bg-indigo-500/10' : ''
                    }`}
                  >
                    <td className="p-3.5">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectRow(rowId)}
                        className="rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>
                    {columns.map((col) => (
                      <td key={col.header} className="p-3.5">
                        {col.cell
                          ? col.cell(row)
                          : col.accessorKey
                          ? row[col.accessorKey]
                          : ''}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-slate-400">
        <div>
          Showing{' '}
          <span className="font-semibold text-slate-200 font-numeric">
            {sortedData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
          </span>{' '}
          to{' '}
          <span className="font-semibold text-slate-200 font-numeric">
            {Math.min(currentPage * pageSize, sortedData.length)}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-slate-200 font-numeric">
            {sortedData.length}
          </span>{' '}
          entries
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-4">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-slate-900 border border-slate-800 text-slate-200 rounded px-2 py-1 focus:outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="px-2 font-medium text-slate-300">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
