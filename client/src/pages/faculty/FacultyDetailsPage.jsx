import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, GraduationCap, Award, Briefcase, Edit3 } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockFaculty } from '../../data/mockFaculty';

export default function FacultyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const professor = mockFaculty.find((f) => f.id === id) || mockFaculty[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/faculty')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{professor.name}</h1>
            <p className="text-xs text-indigo-400 font-medium">{professor.designation}</p>
          </div>
        </div>

        <Button
          variant="secondary"
          leftIcon={<Edit3 className="w-4 h-4" />}
          onClick={() => navigate('/faculty')}
        >
          Back to List
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center text-center p-6 space-y-4">
          <img
            src={professor.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256'}
            alt={professor.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500/50 shadow-xl"
          />
          <div>
            <h3 className="text-lg font-bold text-slate-100">{professor.name}</h3>
            <p className="text-xs text-slate-400">{professor.department}</p>
          </div>
          <Badge variant="active">{professor.status}</Badge>
        </Card>

        <Card className="md:col-span-2 space-y-4 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
            Professional Overview
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <span className="text-xs text-slate-500">Email Address</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" /> {professor.email}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Phone Number</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" /> {professor.phone}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Qualification</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> {professor.qualification}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500">Academic Experience</span>
              <p className="text-slate-200 font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" /> {professor.experienceYears} Years Experience
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
