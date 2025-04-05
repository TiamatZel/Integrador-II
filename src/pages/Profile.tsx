import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Award, BookOpen, Clock } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  const achievements = [
    {
      id: 1,
      title: 'Python Master',
      description: 'Completed Python Programming Course',
      date: '2024-03-15',
      icon: Award
    },
    {
      id: 2,
      title: 'React Developer',
      description: 'Completed React Development Course',
      date: '2024-03-10',
      icon: BookOpen
    }
  ];

  const inProgress = [
    {
      id: 1,
      title: 'Advanced JavaScript',
      progress: 60,
      lastAccessed: '2024-03-20'
    },
    {
      id: 2,
      title: 'Data Structures',
      progress: 30,
      lastAccessed: '2024-03-19'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and achievements</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Achievements</h4>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-white border rounded-lg p-4 flex items-start"
                  >
                    <achievement.icon className="h-6 w-6 text-indigo-600 mr-3" />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">{achievement.title}</h5>
                      <p className="text-sm text-gray-500">{achievement.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Courses in Progress</h4>
              <div className="space-y-4">
                {inProgress.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-900">{course.title}</h5>
                      <span className="text-sm text-gray-500">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Last accessed: {course.lastAccessed}
                    </div>
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

export default Profile;