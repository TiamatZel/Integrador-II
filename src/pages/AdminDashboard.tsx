import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUser, BookOpen, Users, Settings } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  enrolled_students: number;
}

interface User {
  id: string;
  email: string;
  role: string;
  created_at: string;
}

interface Stats {
  totalUsers: number;
  totalCourses: number;
  activeUsers: number;
  revenue: number;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalCourses: 0,
    activeUsers: 0,
    revenue: 0
  });
  const [recentCourses, setRecentCourses] = useState<Course[]>([]);
  const [recentUsers, setRecentUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // In a real application, these would be actual Supabase queries
      // This is just mock data for demonstration
      setStats({
        totalUsers: 1250,
        totalCourses: 45,
        activeUsers: 890,
        revenue: 25000
      });

      setRecentCourses([
        {
          id: '1',
          title: 'React Fundamentals',
          description: 'Learn the basics of React',
          enrolled_students: 120
        },
        {
          id: '2',
          title: 'Advanced TypeScript',
          description: 'Master TypeScript development',
          enrolled_students: 85
        }
      ]);

      setRecentUsers([
        {
          id: '1',
          email: 'user1@example.com',
          role: 'student',
          created_at: '2024-03-15'
        },
        {
          id: '2',
          email: 'user2@example.com',
          role: 'instructor',
          created_at: '2024-03-14'
        }
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Courses</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CircleUser className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">${stats.revenue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Courses */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Courses</h2>
              <div className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.description}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {course.enrolled_students} students enrolled
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Users</h2>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <p className="text-lg font-medium text-gray-900">{user.email}</p>
                    <p className="text-sm text-gray-500 capitalize">Role: {user.role}</p>
                    <p className="text-sm text-gray-600">
                      Joined: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;