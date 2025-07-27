import React, { useState } from 'react';
import { Edit2, Check, X, Loader2 } from 'lucide-react';

interface EnhancedEditableFieldProps {
  value: string | number;
  onSave: (value: string | number) => Promise<void>;
  type?: 'text' | 'number' | 'textarea' | 'url' | 'date' | 'select';
  options?: string[];
  className?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const EnhancedEditableField: React.FC<EnhancedEditableFieldProps> = ({
  value,
  onSave,
  type = 'text',
  options = [],
  className = '',
  placeholder = '',
  label,
  required = false,
  min,
  max,
  step
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.toString());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (required && !editValue.trim()) {
      setError('This field is required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const finalValue = type === 'number' ? parseFloat(editValue) : editValue;
      await onSave(finalValue);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to save changes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value.toString());
    setIsEditing(false);
    setError(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type !== 'textarea') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        {label && <label className="text-xs font-medium text-gray-700">{label}</label>}
        <div className="flex items-center gap-2">
          {type === 'textarea' ? (
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className={`border-2 border-blue-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
              placeholder={placeholder}
              rows={3}
              autoFocus
              disabled={isLoading}
            />
          ) : type === 'select' ? (
            <select
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className={`border-2 border-blue-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
              autoFocus
              disabled={isLoading}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className={`border-2 border-blue-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
              placeholder={placeholder}
              autoFocus
              disabled={isLoading}
              min={min}
              max={max}
              step={step}
            />
          )}
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          </button>
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-2">
      <div className={className}>
        {label && <div className="text-xs font-medium text-gray-500 mb-1">{label}</div>}
        <span className="block">{value}</span>
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200"
      >
        <Edit2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default EnhancedEditableField;