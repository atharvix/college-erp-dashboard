import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, GraduationCap, Calendar, ShieldCheck, Edit3 } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockStudents } from '../../data/mockStudents';

export default function StudentDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = mockStudents.find((s) => s.id === id) || mockStudents[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/students')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{student.name}</h1>
            <p className="text-xs text-slate-400 font-mono">ID: {student.rollNumber}</p>
          </div>
        </div>

        <Button
          variant="secondary"
          leftIcon={<Edit3 className="w-4 h-4" />}
          onClick={() => navigate(`/students/edit/${student.id}`)}
        >
          Edit Record
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="flex flex-col items-center text-center p-6 space-y-4">
          <img
            src={student.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256'}
            alt={student.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500/50 shadow-xl"
          />
          <div>
            <h3 className="text-lg font-bold text-slate-100">{student.name}</h3>
            <p className="text-xs text-indigo-400 font-medium">{student.department}</p>
          </div>
          <Badge variant={student.status === 'Active' ? 'active' : 'inactive'}>
            {student.status} Student
          </Badge>
        </Card>

        {/* Details Grid */}
        <Card className="md:col-span-2 space-y-4 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
            Academic & Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <span className="text-xs text-slate-500">Email Address</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" /> {student.email}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Phone Number</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" /> {student.phone}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Course & Major</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" /> {student.course} - {student.department}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Semester & Batch</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-400" /> Sem {student.semester} (Class of {student.batch})
              </p>
            </div>

            <div className="sm:col-span-2 space-y-1">
              <span className="text-xs text-slate-500">Address</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" /> {student.address}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
