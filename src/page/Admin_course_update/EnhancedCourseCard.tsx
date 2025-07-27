import React, { useState } from 'react';
import { Course } from '../../apis/update_course/Course';
import { CourseService, UpdateCourseRequest } from '../../apis/update_course/courseService';
import StarRating from './StarRating';
import EnhancedEditableField from './EnhancedEditableField';
import LoadingSpinner from './LoadingSpinner';
import { Calendar, Clock, DollarSign, Users, Award, ExternalLink, User } from 'lucide-react';

interface EnhancedCourseCardProps {
  course: Course;
  onUpdateCourse: (courseId: string, updates: Partial<Course>) => void;
  onShowToast: (type: 'success' | 'error' | 'warning', message: string) => void;
}

const EnhancedCourseCard: React.FC<EnhancedCourseCardProps> = ({ 
  course, 
  onUpdateCourse, 
  onShowToast 
}) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleFieldUpdate = (field: keyof Course) => async (value: string | number) => {
    setIsUpdating(true);
    
    try {
      const updatedCourse: UpdateCourseRequest = {
        name: course.name,
        description: course.description,
        category: course.category,
        duration: course.duration,
        price: course.price,
        imageUrl: course.imageUrl,
        badgeText: course.badgeText,
        rating: course.rating,
        ratingCount: course.ratingCount,
        instructorName: course.instructorName,
        instructorDesignation: course.instructorDesignation,
        instructorDescription: course.instructorDescription,
        instructorImageUrl: course.instructorImageUrl,
        instructorLinkedin: course.instructorLinkedin,
        startDate: course.startDate,
        endDate: course.endDate,
        [field]: value
      };

      await CourseService.updateCourse(course.id, updatedCourse);
      onUpdateCourse(course.id, { [field]: value });
      onShowToast('success', `${field} updated successfully!`);
    } catch (error) {
      onShowToast('error', `Failed to update ${field}. Please try again.`);
      throw error;
    } finally {
      setIsUpdating(false);
    }
  };

  const categoryOptions = ['Web Development', 'Machine Learning', 'Coding', 'IOT'];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
      {isUpdating && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
            <LoadingSpinner size="md" />
            <span className="text-sm font-medium text-gray-700">Updating course...</span>
          </div>
        </div>
      )}

      {/* Course Image with Enhanced Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <EnhancedEditableField
            value={course.badgeText}
            onSave={handleFieldUpdate('badgeText')}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          />
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <EnhancedEditableField
              value={course.rating}
              onSave={handleFieldUpdate('rating')}
              type="number"
              min={0}
              max={5}
              step={0.1}
              className="text-sm font-bold text-gray-900"
            />
            <StarRating rating={course.rating} size="sm" />
            <EnhancedEditableField
              value={course.ratingCount}
              onSave={handleFieldUpdate('ratingCount')}
              type="number"
              className="text-xs text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="space-y-3">
          <EnhancedEditableField
            value={course.name}
            onSave={handleFieldUpdate('name')}
            label="Course Name"
            className="text-2xl font-bold text-gray-900"
            required
          />
          
          <EnhancedEditableField
            value={course.description}
            onSave={handleFieldUpdate('description')}
            type="textarea"
            label="Description"
            className="text-blue-600 font-medium leading-relaxed"
            required
          />
        </div>

        {/* Course Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600" />
            <EnhancedEditableField
              value={course.duration}
              onSave={handleFieldUpdate('duration')}
              label="Duration"
              className="text-sm font-medium text-gray-700"
            />
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <DollarSign className="w-4 h-4 text-green-600" />
            <EnhancedEditableField
              value={course.price}
              onSave={handleFieldUpdate('price')}
              type="number"
              min={0}
              step={0.01}
              label="Price"
              className="text-sm font-bold text-green-600"
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-600" />
          <EnhancedEditableField
            value={course.category}
            onSave={handleFieldUpdate('category')}
            type="select"
            options={categoryOptions}
            label="Category"
            className="text-sm font-medium text-purple-600"
          />
        </div>

        {/* Instructor Section */}
        <div className="border-t pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <User className="w-4 h-4" />
            Instructor Details
          </h4>
          
          <div className="flex items-start gap-3">
            <img
              src={course.instructorImageUrl}
              alt={course.instructorName}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="flex-1 space-y-2">
              <EnhancedEditableField
                value={course.instructorName}
                onSave={handleFieldUpdate('instructorName')}
                label="Name"
                className="font-semibold text-gray-900"
              />
              <EnhancedEditableField
                value={course.instructorDesignation}
                onSave={handleFieldUpdate('instructorDesignation')}
                label="Designation"
                className="text-sm text-blue-600"
              />
              <EnhancedEditableField
                value={course.instructorDescription}
                onSave={handleFieldUpdate('instructorDescription')}
                type="textarea"
                label="Bio"
                className="text-xs text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-600" />
            <EnhancedEditableField
              value={course.startDate}
              onSave={handleFieldUpdate('startDate')}
              type="date"
              label="Start Date"
              className="text-sm text-gray-700"
            />
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-red-600" />
            <EnhancedEditableField
              value={course.endDate}
              onSave={handleFieldUpdate('endDate')}
              type="date"
              label="End Date"
              className="text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
            Enroll Now
          </button>
          <div className="flex items-center gap-3">
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View Details
            </button>
            <span className="text-blue-600 font-medium">Internship opportunity</span>
          </div>
        </div>

        {/* Admin URLs Section */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <h5 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Resource Links
          </h5>
          <div className="space-y-2">
            <EnhancedEditableField
              value={course.imageUrl}
              onSave={handleFieldUpdate('imageUrl')}
              type="url"
              label="Course Image URL"
              className="text-xs text-gray-600 break-all"
            />
            <EnhancedEditableField
              value={course.instructorImageUrl}
              onSave={handleFieldUpdate('instructorImageUrl')}
              type="url"
              label="Instructor Image URL"
              className="text-xs text-gray-600 break-all"
            />
            <EnhancedEditableField
              value={course.instructorLinkedin}
              onSave={handleFieldUpdate('instructorLinkedin')}
              type="url"
              label="Instructor LinkedIn"
              className="text-xs text-gray-600 break-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCourseCard;