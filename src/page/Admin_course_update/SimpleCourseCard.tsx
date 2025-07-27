import React from 'react';
import { Course } from '../../apis/update_course/Course';
import StarRating from './StarRating';
import { Edit, Calendar, Clock, DollarSign, Users } from 'lucide-react';

interface SimpleCourseCardProps {
  course: Course;
  onUpdateClick: () => void;
}

const SimpleCourseCard: React.FC<SimpleCourseCardProps> = ({ course, onUpdateClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Course Image with Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {course.badgeText}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">{course.rating}</span>
            <StarRating rating={course.rating} size="sm" />
            <span className="text-xs text-gray-600">({course.ratingCount})</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        {/* Header Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{course.name}</h3>
          <p className="text-blue-600 font-medium text-sm line-clamp-2">{course.description}</p>
        </div>

        {/* Course Details Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{course.duration}</span>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-600">₹{course.price}</span>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="flex items-center gap-3 pt-2 border-t">
          <img
            src={course.instructorImageUrl}
            alt={course.instructorName}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">{course.instructorName}</p>
            <p className="text-xs text-blue-600">{course.instructorDesignation}</p>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Start: {new Date(course.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>End: {new Date(course.endDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
            Enroll Now
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onUpdateClick}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Edit className="w-4 h-4" />
              Update Details
            </button>
          </div>
        </div>

        {/* Internship Opportunity */}
        <div className="text-center">
          <span className="text-blue-600 font-medium text-sm">Internship opportunity available</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleCourseCard;