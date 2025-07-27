import React from 'react';
import { Course } from '../../apis/update_course/Course';
import StarRating from './StarRating';
import EditableField from './EditableField';

interface CourseCardProps {
  course: Course;
  onUpdateCourse: (courseId: string, updates: Partial<Course>) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onUpdateCourse }) => {
  const handleFieldUpdate = (field: keyof Course) => (value: string | number) => {
    onUpdateCourse(course.id, { [field]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Course Image with Badge */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <EditableField
            value={course.badgeText}
            onSave={handleFieldUpdate('badgeText')}
            className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Course Title and Rating */}
        <div className="flex items-start justify-between mb-2">
          <EditableField
            value={course.name}
            onSave={handleFieldUpdate('name')}
            className="text-xl font-bold text-gray-900"
          />
          <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-xs">
            <EditableField
              value={course.rating}
              onSave={handleFieldUpdate('rating')}
              type="number"
              className="text-white font-medium min-w-0"
            />
            <StarRating rating={course.rating} size="sm" />
            <EditableField
              value={course.ratingCount}
              onSave={handleFieldUpdate('ratingCount')}
              type="number"
              className="text-white text-xs ml-1"
            />
          </div>
        </div>

        {/* Description */}
        <EditableField
          value={course.description}
          onSave={handleFieldUpdate('description')}
          type="textarea"
          className="text-sm text-blue-600 mb-3 font-medium"
        />

        {/* Duration and Opportunity */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <EditableField
            value={course.duration}
            onSave={handleFieldUpdate('duration')}
            className="font-medium"
          />
          <span className="text-blue-600 font-medium">Internship opportunity</span>
        </div>

        {/* Instructor */}
        <div className="mb-4">
          <EditableField
            value={course.instructorName}
            onSave={handleFieldUpdate('instructorName')}
            className="text-sm font-medium text-gray-900"
          />
          <EditableField
            value={course.instructorDesignation}
            onSave={handleFieldUpdate('instructorDesignation')}
            className="text-xs text-gray-500"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <EditableField
            value={course.price}
            onSave={handleFieldUpdate('price')}
            type="number"
            className="text-lg font-bold text-green-600"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Enroll
          </button>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Details
          </button>
        </div>

        {/* Admin Details Section */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Admin Details</h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-gray-500">Category: </span>
              <EditableField
                value={course.category}
                onSave={handleFieldUpdate('category')}
                className="text-gray-700"
              />
            </div>
            <div>
              <span className="text-gray-500">Start Date: </span>
              <EditableField
                value={course.startDate}
                onSave={handleFieldUpdate('startDate')}
                type="date"
                className="text-gray-700"
              />
            </div>
            <div>
              <span className="text-gray-500">End Date: </span>
              <EditableField
                value={course.endDate}
                onSave={handleFieldUpdate('endDate')}
                type="date"
                className="text-gray-700"
              />
            </div>
            <div>
              <span className="text-gray-500">Image URL: </span>
              <EditableField
                value={course.imageUrl}
                onSave={handleFieldUpdate('imageUrl')}
                type="url"
                className="text-gray-700 truncate max-w-40"
              />
            </div>
            <div>
              <span className="text-gray-500">Instructor LinkedIn: </span>
              <EditableField
                value={course.instructorLinkedin}
                onSave={handleFieldUpdate('instructorLinkedin')}
                type="url"
                className="text-gray-700 truncate max-w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;