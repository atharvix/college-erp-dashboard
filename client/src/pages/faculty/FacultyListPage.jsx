import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit3, Trash2, Mail, Phone, Award } from 'lucide-react';
import { DataTable } from '../../components/ui/DataTable';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockFaculty } from '../../data/mockFaculty';

export default function FacultyListPage() {
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState(mockFaculty);

  const columns = [
    {
      header: 'Faculty Member',
      accessorKey: 'name',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256'}
            alt={row.name}
            className="w-10 h-10 rounded-full object-cover border border-slate-700"
          />
          <div>
            <p className="font-semibold text-slate-100">{row.name}</p>
            <p className="text-xs text-indigo-400 font-medium">{row.designation}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Department',
      accessorKey: 'department',
      cell: (row) => <span className="text-slate-200 font-medium">{row.department}</span>,
    },
    {
      header: 'Qualification',
      accessorKey: 'qualification',
      cell: (row) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>{row.qualification}</span>
        </div>
      ),
    },
    {
      header: 'Contact',
      accessorKey: 'email',
      cell: (row) => (
        <div className="text-xs text-slate-400 space-y-0.5">
          <p>{row.email}</p>
          <p>{row.phone}</p>
        </div>
      ),
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (row) => <Badge variant="active">{row.status}</Badge>,
    },
    {
      header: 'Actions',
      sortable: false,
      cell: (row) => (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/faculty/details/${row.id}`)}
          >
            <Eye className="w-4 h-4 text-indigo-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/faculty/edit/${row.id}`)}
          >
            <Edit3 className="w-4 h-4 text-amber-400" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <DataTable
        title="Faculty Directory"
        subtitle="Manage professors, department chairs, and teaching credentials"
        columns={columns}
        data={faculty}
        actions={
          <Button
            variant="primary"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/faculty/add')}
          >
            Add Faculty
          </Button>
        }
      />
    </div>
  );
}
