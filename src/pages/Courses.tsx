import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Python',
    description: 'Learn the basics of Python programming language',
    duration: '6 hours',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Web Development with React',
    description: 'Master modern web development with React',
    duration: '8 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced JavaScript concepts',
    duration: '10 hours',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80'
  }
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
        <p className="mt-4 text-lg text-gray-500">Choose from our selection of programming courses</p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:transform hover:scale-105">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-500">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;