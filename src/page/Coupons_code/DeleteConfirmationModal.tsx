export {};
import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';
import { Coupon, getCouponTypeInfo } from '../../apis/coupon/Coupon';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  coupon: Coupon | null;
  isLoading: boolean;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  coupon,
  isLoading
}) => {
  if (!isOpen || !coupon) return null;

  const typeInfo = getCouponTypeInfo(coupon.type);

  const formatDiscount = (discount: number, type: string) => {
    switch (type) {
      case 'percentage':
        return `${discount}%`;
      case 'fixed':
        return `$${discount}`;
      case 'free-shipping':
        return 'Free Shipping';
      case 'bogo':
        return `${discount}% off 2nd item`;
      case 'seasonal':
        return `${discount}%`;
      default:
        return `${discount}%`;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Delete Coupon</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 disabled:text-gray-300 transition-colors duration-150"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this coupon? This action cannot be undone.
            </p>
            
            {/* Coupon Preview */}
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeInfo.color}`}>
                    <span className="mr-1">{typeInfo.icon}</span>
                    {typeInfo.label}
                  </span>
                  <div>
                    <div className="font-mono text-sm font-semibold text-gray-900">
                      {coupon.code}
                    </div>
                    <div className="text-xs text-gray-500">
                      ID: {coupon.id}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">
                    {formatDiscount(coupon.discount, coupon.type)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {coupon.type === 'free-shipping' ? 'Shipping' : 'Discount'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-500 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-400 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Deleting...</span>
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Coupon</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;