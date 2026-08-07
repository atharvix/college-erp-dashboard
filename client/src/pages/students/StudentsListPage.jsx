import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit3, Trash2, Mail, Phone, GraduationCap } from 'lucide-react';
import { DataTable } from '../../components/ui/DataTable';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockStudents } from '../../data/mockStudents';

export default function StudentsListPage() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(mockStudents);
  const [departmentFilter, setDepartmentFilter] = useState('');

  const filteredData = students.filter((s) => {
    if (!departmentFilter) return true;
    return s.department === departmentFilter;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student record?')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const columns = [
    {
      header: 'Student Name',
      accessorKey: 'name',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256'}
            alt={row.name}
            className="w-9 h-9 rounded-full object-cover border border-slate-700"
          />
          <div>
            <p className="font-semibold text-slate-100">{row.name}</p>
            <p className="text-xs text-slate-500 font-mono">{row.rollNumber}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Department',
      accessorKey: 'department',
      cell: (row) => (
        <div>
          <p className="text-slate-200 font-medium">{row.department}</p>
          <p className="text-xs text-slate-500">{row.course} • Sem {row.semester}</p>
        </div>
      ),
    },
    {
      header: 'Contact Info',
      accessorKey: 'email',
      cell: (row) => (
        <div className="space-y-0.5 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-indigo-400" /> {row.email}
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-500" /> {row.phone}
          </div>
        </div>
      ),
    },
    {
      header: 'Batch',
      accessorKey: 'batch',
      cell: (row) => <span className="font-mono text-xs text-slate-300">Class of {row.batch}</span>,
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (row) => (
        <Badge variant={row.status === 'Active' ? 'active' : 'inactive'}>
          {row.status}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      sortable: false,
      cell: (row) => (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/students/details/${row.id}`)}
            title="View Details"
          >
            <Eye className="w-4 h-4 text-indigo-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/students/edit/${row.id}`)}
            title="Edit Record"
          >
            <Edit3 className="w-4 h-4 text-amber-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDelete(row.id)}
            title="Delete Record"
          >
            <Trash2 className="w-4 h-4 text-rose-400" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <DataTable
        title="Students Directory"
        subtitle="Manage enrolled students, academic standing, and profiles"
        columns={columns}
        data={filteredData}
        actions={
          <Button
            variant="primary"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/students/add')}
          >
            Add Student
          </Button>
        }
        filterControls={
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil Eng.">Civil Eng.</option>
          </select>
        }
      />
    </div>
  );
}
