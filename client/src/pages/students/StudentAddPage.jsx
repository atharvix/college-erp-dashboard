import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, Mail, Phone, BookOpen, Building2 } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export default function StudentAddPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    rollNumber: '',
    email: '',
    phone: '',
    gender: 'Male',
    course: 'B.Tech',
    department: 'Computer Science',
    semester: 1,
    batch: 2024,
    section: 'A',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Student created successfully!');
    navigate('/students');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate('/students')}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Enroll New Student</h1>
          <p className="text-xs text-slate-400">Add a student profile to the institutional database</p>
        </div>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="e.g. Aarav"
              leftIcon={<User className="w-4 h-4" />}
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <Input
              label="Last Name"
              placeholder="e.g. Sharma"
              leftIcon={<User className="w-4 h-4" />}
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
            <Input
              label="Roll Number / ID"
              placeholder="e.g. CS2024099"
              value={formData.rollNumber}
              onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="aarav@university.edu"
              leftIcon={<Mail className="w-4 h-4" />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Phone Number"
              placeholder="+91 98765 43210"
              leftIcon={<Phone className="w-4 h-4" />}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="bg-slate-900 border border-slate-800 text-slate-100 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil Eng.">Civil Eng.</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Semester
              </label>
              <select
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: Number(e.target.value) })}
                className="bg-slate-900 border border-slate-800 text-slate-100 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-indigo-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
            <Input
              label="Batch Year"
              type="number"
              value={formData.batch}
              onChange={(e) => setFormData({ ...formData, batch: Number(e.target.value) })}
              required
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate('/students')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              leftIcon={<Save className="w-4 h-4" />}
            >
              Save Student Profile
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
