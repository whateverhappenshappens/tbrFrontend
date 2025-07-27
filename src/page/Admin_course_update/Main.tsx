import React, { useState } from 'react';
import { useEffect } from 'react';
import { Course, CategoryFilter as CategoryFilterType } from '../../apis/update_course/Course';
import { courseService } from '../../apis/update_course/courseService';
import SimpleCourseCard from './SimpleCourseCard';
import CourseUpdateModal from './CourseUpdateModal';
import ToastContainer from './ToastContainer';
import { useToast } from './UseToast';
import { GraduationCap, Settings, TrendingUp, Users, Star, DollarSign } from 'lucide-react';

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  
  // Load courses from API on component mount
  useEffect(() => {
  const loadCourses = async () => {
    setIsLoading(true);

    // const token = localStorage.getItem('access-token');
    // if (token) {
    //   courseService.setBearerToken(token);
    // } else {
    //   addToast({
    //     type: 'error',
    //     message: 'Authentication token missing. Please log in.',
    //   });
    //   setIsLoading(false);
    //   return;
    // }

    try {
      // Try fetching real data
      const courses = await courseService.getAllCourses();
      setCourses(courses);
    } catch (error) {
      alert('Backend not available. Falling back to mock data.');
    } finally {
      setIsLoading(false);
    }
  };

  loadCourses();
}, [addToast]);


  const categories: CategoryFilterType[] = ['All', 'Web Development', 'Machine Learning', 'Coding', 'IOT'];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleUpdateCourse = (courseId: string, updates: Partial<Course>) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, ...updates } : course
      )
    );
  };

  const handleShowToast = (type: 'success' | 'error' | 'warning', message: string) => {
    addToast({ type, message });
  };

  const handleUpdateClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="mt-[10rem] min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
      
      {/* Header */}
      {/* <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Course Admin Portal
                </h1>
                <p className="text-gray-600 font-medium">Manage and update course information with real-time API integration</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <Settings className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">Admin Panel</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
       
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{courses.length}</div>
                <div className="text-sm text-gray-600 font-medium">Total Courses</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {courses.reduce((sum, course) => sum + course.ratingCount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 font-medium">Total Enrollments</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {(courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1)}
                </div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  ₹{courses.reduce((sum, course) => sum + course.price, 0).toFixed(0)}
                </div>
                <div className="text-sm text-gray-600 font-medium">Total Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Loading courses...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <SimpleCourseCard
                key={course.id}
                course={course}
                onUpdateClick={() => handleUpdateClick(course)}
              />
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Admin Instructions & Features
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-blue-800">
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Real-time API Integration:</strong> All changes are saved to your backend via PUT requests</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Inline Editing:</strong> Click on any field to edit course details with validation</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Smart Validation:</strong> Required fields and data type validation included</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Toast Notifications:</strong> Success and error feedback for all operations</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Loading States:</strong> Visual feedback during API calls</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Enhanced UI:</strong> Modern design with smooth animations and hover effects</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Update Modal */}
      {selectedCourse && (
        <CourseUpdateModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleUpdateCourse}
          onShowToast={handleShowToast}
        />
      )}
    </div>
  );
}

export default App;