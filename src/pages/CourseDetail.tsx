import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, BookOpen, Award } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();

  // This would normally fetch from your API
  const course = {
    id: courseId,
    title: 'Introduction to Python',
    description: 'Learn the basics of Python programming language',
    duration: '6 hours',
    level: 'Beginner',
    instructor: 'John Doe',
    topics: [
      'Python Basics',
      'Control Flow',
      'Functions',
      'Data Structures',
      'Object-Oriented Programming'
    ],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="mt-4 text-lg text-gray-500">{course.description}</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="h-5 w-5 mr-2" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="h-5 w-5 mr-2" />
              <span>{course.instructor}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Course Content</h2>
            <ul className="mt-4 space-y-4">
              {course.topics.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                >
                  <span className="h-6 w-6 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 font-semibold mr-3">
                    {index + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;