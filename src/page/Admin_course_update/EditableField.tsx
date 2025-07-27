import React, { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';

interface EditableFieldProps {
  value: string | number;
  onSave: (value: string | number) => void;
  type?: 'text' | 'number' | 'textarea' | 'url' | 'date';
  className?: string;
  placeholder?: string;
}

const EditableField: React.FC<EditableFieldProps> = ({
  value,
  onSave,
  type = 'text',
  className = '',
  placeholder = ''
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.toString());

  const handleSave = () => {
    const finalValue = type === 'number' ? parseFloat(editValue) : editValue;
    onSave(finalValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value.toString());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        {type === 'textarea' ? (
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={`border border-blue-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            placeholder={placeholder}
            rows={2}
            autoFocus
          />
        ) : (
          <input
            type={type}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={`border border-blue-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            placeholder={placeholder}
            autoFocus
          />
        )}
        <button
          onClick={handleSave}
          className="p-1 text-green-600 hover:bg-green-100 rounded"
        >
          <Check className="w-4 h-4" />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 text-red-600 hover:bg-red-100 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-2">
      <span className={className}>{value}</span>
      <button
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 p-1 text-blue-600 hover:bg-blue-100 rounded transition-opacity"
      >
        <Edit2 className="w-3 h-3" />
      </button>
    </div>
  );
};

export default EditableField;