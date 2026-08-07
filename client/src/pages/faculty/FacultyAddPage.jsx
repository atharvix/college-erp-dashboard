import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, Mail, Phone, Award } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export default function FacultyAddPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: 'Assistant Professor',
    department: 'Computer Science',
    email: '',
    phone: '',
    qualification: '',
    experienceYears: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Faculty profile added successfully!');
    navigate('/faculty');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate('/faculty')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Add Faculty Member</h1>
          <p className="text-xs text-slate-400">Register new professor or department staff</p>
        </div>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name (with title)"
              placeholder="e.g. Dr. Sarah Connor"
              leftIcon={<User className="w-4 h-4" />}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Designation"
              placeholder="e.g. Professor & HOD"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="sarah.connor@university.edu"
              leftIcon={<Mail className="w-4 h-4" />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Phone Number"
              placeholder="+91 98765 11111"
              leftIcon={<Phone className="w-4 h-4" />}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              label="Qualification / Degree"
              placeholder="e.g. Ph.D. in Computer Science"
              leftIcon={<Award className="w-4 h-4" />}
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              required
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="bg-slate-900 border border-slate-800 text-slate-100 rounded-lg px-3.5 py-2 text-sm focus:outline-none"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil Eng.">Civil Eng.</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <Button type="button" variant="ghost" onClick={() => navigate('/faculty')}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" leftIcon={<Save className="w-4 h-4" />}>
              Save Profile
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
