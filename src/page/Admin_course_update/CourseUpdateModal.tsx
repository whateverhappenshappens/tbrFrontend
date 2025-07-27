import React, { useState, useEffect } from 'react';
import { Course } from '../../apis/update_course/Course';
import { courseService, UpdateCourseRequest } from '../../apis/update_course/courseService';
import { X, Save, User, Calendar, DollarSign, Star, Image, Link, Award, Clock, FileText } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface CourseUpdateModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (courseId: string, updates: Partial<Course>) => void;
  onShowToast: (type: 'success' | 'error' | 'warning', message: string) => void;
}

const CourseUpdateModal: React.FC<CourseUpdateModalProps> = ({
  course,
  isOpen,
  onClose,
  onUpdate,
  onShowToast
}) => {
  const [formData, setFormData] = useState<UpdateCourseRequest>({
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
    endDate: course.endDate
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData({
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
        endDate: course.endDate
      });
      setErrors({});
    }
  }, [course, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Course name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (formData.price <= 0) newErrors.price = 'Price must be greater than 0';
    if (formData.rating < 0 || formData.rating > 5) newErrors.rating = 'Rating must be between 0 and 5';
    if (formData.ratingCount < 0) newErrors.ratingCount = 'Rating count cannot be negative';
    if (!formData.instructorName.trim()) newErrors.instructorName = 'Instructor name is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      onShowToast('error', 'Please fix the validation errors');
      return;
    }

    setIsLoading(true);

    try {
      // Set the bearer token before making the request
      await courseService.updateCourse(course.id, formData);
      onUpdate(course.id, formData);
      onShowToast('success', 'Course updated successfully!');
      onClose();
    } catch (error) {
      console.error('Update error:', error);
      onShowToast('error', 'Failed to update course. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof UpdateCourseRequest, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const categoryOptions = ['Web Development', 'Machine Learning', 'Coding', 'IOT'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Award className="w-6 h-6" />
            Update Course Details
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Course Basic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Course Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter course name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.category ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration *
                  </label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.duration ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 3 months"
                  />
                  {errors.duration && <p className="text-red-600 text-sm mt-1">{errors.duration}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.price ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="299.99"
                  />
                  {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="29999"
                />
                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Badge Text
                </label>
                <input
                  type="text"
                  value={formData.badgeText}
                  onChange={(e) => handleInputChange('badgeText', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="e.g., Live Classes"
                />
              </div>
            </div>

            {/* Rating & Enrollment */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Rating & Enrollment
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating (0-5) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.rating ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="4.8"
                  />
                  {errors.rating && <p className="text-red-600 text-sm mt-1">{errors.rating}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating Count *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.ratingCount}
                    onChange={(e) => handleInputChange('ratingCount', parseInt(e.target.value))}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.ratingCount ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="9234"
                  />
                  {errors.ratingCount && <p className="text-red-600 text-sm mt-1">{errors.ratingCount}</p>}
                </div>
              </div>
            </div>

            {/* Instructor Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <User className="w-5 h-5 text-green-600" />
                Instructor Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructor Name *
                  </label>
                  <input
                    type="text"
                    value={formData.instructorName}
                    onChange={(e) => handleInputChange('instructorName', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.instructorName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.instructorName && <p className="text-red-600 text-sm mt-1">{errors.instructorName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    value={formData.instructorDesignation}
                    onChange={(e) => handleInputChange('instructorDesignation', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Lead Web Engineer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor Description
                </label>
                <textarea
                  value={formData.instructorDescription}
                  onChange={(e) => handleInputChange('instructorDescription', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Brief description about the instructor"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Instructor Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.instructorImageUrl}
                    onChange={(e) => handleInputChange('instructorImageUrl', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="https://example.com/instructor.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={formData.instructorLinkedin}
                    onChange={(e) => handleInputChange('instructorLinkedin', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>
            </div>

            {/* Course Schedule */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Course Schedule
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.startDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.startDate && <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.endDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.endDate && <p className="text-red-600 text-sm mt-1">{errors.endDate}</p>}
                </div>
              </div>
            </div>

            {/* Media URLs */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <Image className="w-5 h-5 text-indigo-600" />
                Media & Resources
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Image URL
                </label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="https://example.com/course-image.jpg"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="text-white" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Update Course
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseUpdateModal;