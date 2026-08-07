import React from 'react';
import {
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  UserCheck,
  Calendar,
  Sparkles,
  Plus,
  ArrowRight,
} from 'lucide-react';
import { StatCard, Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const enrollmentTrends = [
  { month: 'Jan', students: 1200, faculty: 95 },
  { month: 'Feb', students: 1350, faculty: 98 },
  { month: 'Mar', students: 1420, faculty: 102 },
  { month: 'Apr', students: 1580, faculty: 105 },
  { month: 'May', students: 1750, faculty: 110 },
  { month: 'Jun', students: 1940, faculty: 118 },
  { month: 'Jul', students: 2150, faculty: 124 },
];

const departmentStats = [
  { name: 'Computer Science', count: 680 },
  { name: 'Electronics', count: 450 },
  { name: 'Mechanical', count: 320 },
  { name: 'Civil Eng.', count: 280 },
  { name: 'Information Tech', count: 420 },
];

const recentActivities = [
  { id: 1, user: 'Dr. Sarah Connor', action: 'Uploaded Semester 4 Grades', time: '10 mins ago', type: 'grade' },
  { id: 2, user: 'Student Portal', action: 'New Registration: John Doe (CS-2024)', time: '25 mins ago', type: 'student' },
  { id: 3, user: 'System Admin', action: 'Updated RBAC Permission Matrix', time: '1 hour ago', type: 'security' },
  { id: 4, user: 'Prof. Marcus Brody', action: 'Created Advanced AI Course', time: '3 hours ago', type: 'course' },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-950 p-6 rounded-2xl border border-indigo-500/20 shadow-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Enterprise Analytics Suite
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 mt-1 tracking-tight">
            Institutional Control Center
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time analytics, student enrollment metrics, and department telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/students/add')}
          >
            Add Student
          </Button>
          <Button
            variant="secondary"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/faculty/add')}
          >
            Add Faculty
          </Button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Students"
          value="2,150"
          change="12.5%"
          trend="up"
          subtitle="vs previous semester"
          icon={Users}
        />
        <StatCard
          title="Active Faculty"
          value="124"
          change="5.2%"
          trend="up"
          subtitle="Full-time & Professors"
          icon={GraduationCap}
        />
        <StatCard
          title="Departments"
          value="8"
          subtitle="Across 3 Faculties"
          icon={Building2}
        />
        <StatCard
          title="Attendance Rate"
          value="94.8%"
          change="1.4%"
          trend="up"
          subtitle="System-wide average"
          icon={UserCheck}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrollment Trend Area Chart */}
        <Card className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-100">Enrollment Telemetry</h3>
              <p className="text-xs text-slate-400">Growth trajectory over the current academic year</p>
            </div>
            <Badge variant="indigo">Live Feed</Badge>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentTrends}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#f8fafc',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorStudents)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Department Breakdown Bar Chart */}
        <Card className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-100">Department Distribution</h3>
            <p className="text-xs text-slate-400">Student count per major field</p>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentStats} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={10} width={90} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#f8fafc',
                  }}
                />
                <Bar dataKey="count" fill="#4f46e5" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Activity Timeline & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-100">System Activity Stream</h3>
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              View Audit Logs
            </Button>
          </div>

          <div className="space-y-3">
            {recentActivities.map((act) => (
              <div
                key={act.id}
                className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">{act.action}</p>
                    <p className="text-xs text-slate-500">by {act.user}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-mono">{act.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* System Telemetry Overview */}
        <Card className="space-y-4">
          <h3 className="text-base font-bold text-slate-100">System Status</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-slate-400">API Health</span>
              <Badge variant="active">99.98% Online</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-slate-400">Database Nodes</span>
              <Badge variant="indigo">MongoDB Primary</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-slate-400">Security Audit</span>
              <Badge variant="active">Compliant</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
