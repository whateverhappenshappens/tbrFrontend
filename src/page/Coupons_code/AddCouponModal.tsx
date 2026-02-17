export {};
import React, { useState } from 'react';
import { X, Plus, AlertCircle } from 'lucide-react';
import { CouponType, COUPON_TYPES, getCouponTypeInfo } from '../../apis/coupon/Coupon';

interface AddCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCoupon: (code: string, discount: number, type: CouponType) => void;
  existingCodes: string[];
  isLoading: boolean;
}

const AddCouponModal: React.FC<AddCouponModalProps> = ({
  isOpen,
  onClose,
  onAddCoupon,
  existingCodes,
  isLoading
}) => {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState<number>(null);
  const [type, setType] = useState<CouponType>('percentage');
  const [errors, setErrors] = useState<{ code?: string; discount?: string }>({});

  const validateForm = () => {
    const newErrors: { code?: string; discount?: string } = {};

    if (!code.trim()) {
      newErrors.code = 'Coupon code is required';
    } else if (code.length < 3) {
      newErrors.code = 'Coupon code must be at least 3 characters';
    } else if (existingCodes.includes(code.toUpperCase())) {
      newErrors.code = 'This coupon code already exists';
    }

    if (type !== 'free-shipping') {
      if (discount <= 0) {
        newErrors.discount = 'Discount must be greater than 0';
      } else if (type === 'percentage' && discount > 100) {
        newErrors.discount = 'Percentage discount cannot exceed 100%';
      } else if (type === 'fixed' && discount > 1000) {
        newErrors.discount = 'Fixed discount seems too high';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const finalDiscount = type === 'free-shipping' ? 0 : discount;
      onAddCoupon(code.trim(), finalDiscount, type);
      handleClose();
    }
  };

  const handleClose = () => {
    setCode('');
    setDiscount(null);
    setType('percentage');
    setErrors({});
    onClose();
  };

  const handleTypeChange = (newType: CouponType) => {
    setType(newType);
    if (newType === 'free-shipping') {
      setDiscount(null);
    }
    // Clear discount error when type changes
    if (errors.discount) {
      setErrors(prev => ({ ...prev, discount: undefined }));
    }
  };

  const getDiscountLabel = () => {
    switch (type) {
      case 'percentage':
        return 'Discount Percentage (%)';
      case 'fixed':
        return 'Discount Amount ($)';
      case 'free-shipping':
        return 'Free Shipping (No discount value needed)';
      case 'bogo':
        return 'Second Item Discount (%)';
      case 'seasonal':
        return 'Seasonal Discount (%)';
      default:
        return 'Discount Value';
    }
  };

  const getDiscountPlaceholder = () => {
    switch (type) {
      case 'percentage':
      case 'seasonal':
        return 'e.g., 25';
      case 'fixed':
        return 'e.g., 10';
      case 'bogo':
        return 'e.g., 50';
      case 'free-shipping':
        return 'N/A';
      default:
        return '0';
    }
  };

  if (!isOpen) return null;

  const selectedTypeInfo = getCouponTypeInfo(type);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Plus className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Add New Coupon</h2>
          </div>
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 disabled:text-gray-300 transition-colors duration-150"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Coupon Code */}
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
              Coupon Code *
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                if (errors.code) {
                  setErrors(prev => ({ ...prev, code: undefined }));
                }
              }}
              disabled={isLoading}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono ${
                errors.code ? 'border-red-300 bg-red-50' : 'border-gray-300'
              } disabled:bg-gray-100 disabled:text-gray-500`}
              placeholder="e.g., SAVE25"
            />
            {errors.code && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.code}
              </div>
            )}
          </div>

          {/* Coupon Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Coupon Type *
            </label>
            <div className="grid grid-cols-1 gap-2">
              {COUPON_TYPES.map((typeOption) => (
                <label
                  key={typeOption.value}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    type === typeOption.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <input
                    type="radio"
                    name="type"
                    value={typeOption.value}
                    checked={type === typeOption.value}
                    onChange={(e) => handleTypeChange(e.target.value as CouponType)}
                    disabled={isLoading}
                    className="sr-only"
                  />
                  <div className={`flex items-center space-x-3 ${
                    type === typeOption.value ? 'text-blue-700' : 'text-gray-700'
                  }`}>
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold ${
                      type === typeOption.value 
                        ? typeOption.color.replace('text-', 'bg-').replace('-800', '-200') + ' ' + typeOption.color
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {typeOption.icon}
                    </span>
                    <div>
                      <div className="font-medium">{typeOption.label}</div>
                      <div className="text-xs text-gray-500">
                        {typeOption.value === 'percentage' && 'Percentage off total'}
                        {typeOption.value === 'fixed' && 'Fixed amount off'}
                        {typeOption.value === 'free-shipping' && 'Free shipping offer'}
                        {typeOption.value === 'bogo' && 'Buy one, get one discount'}
                        {typeOption.value === 'seasonal' && 'Special seasonal offer'}
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Discount Value */}
          <div>
            <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-2">
              {getDiscountLabel()} {type !== 'free-shipping' && '*'}
            </label>
            <div className="relative">
              <input
                type="number"
                id="discount"
                value={type === 'free-shipping' ? '' : discount}
                onChange={(e) => {
                  setDiscount(Number(e.target.value));
                  if (errors.discount) {
                    setErrors(prev => ({ ...prev, discount: undefined }));
                  }
                }}
                disabled={isLoading || type === 'free-shipping'}
                min="0"
                max={type === 'percentage' || type === 'seasonal' || type === 'bogo' ? "100" : "1000"}
                step={type === 'fixed' ? "0.01" : "1"}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.discount ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } disabled:bg-gray-100 disabled:text-gray-500`}
                placeholder={getDiscountPlaceholder()}
              />
              {(type === 'percentage' || type === 'seasonal' || type === 'bogo') && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 text-sm">%</span>
                </div>
              )}
              {type === 'fixed' && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 text-sm">$</span>
                </div>
              )}
            </div>
            {errors.discount && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.discount}
              </div>
            )}
            {type === 'free-shipping' && (
              <p className="mt-2 text-sm text-gray-500">
                Free shipping coupons don't require a discount value.
              </p>
            )}
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
            <div className="flex items-center space-x-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedTypeInfo.color}`}>
                <span className="mr-1">{selectedTypeInfo.icon}</span>
                {selectedTypeInfo.label}
              </span>
              <span className="font-mono text-sm font-semibold">{code || 'COUPON_CODE'}</span>
              <span className="text-sm text-gray-600">
                {type === 'free-shipping' 
                  ? 'Free Shipping' 
                  : type === 'fixed' 
                    ? `$${discount} off`
                    : `${discount}% off`
                }
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-500 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !code.trim() || (type !== 'free-shipping' && discount <= 0)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Adding...</span>
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  <span>Add Coupon</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCouponModal;