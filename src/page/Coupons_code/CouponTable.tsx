import React from 'react';
import { Trash2, Tag } from 'lucide-react';
import { Coupon, getCouponTypeInfo } from '../../apis/coupon/Coupon';

interface CouponTableProps {
  coupons: Coupon[];
  onDeleteCoupon: (coupon: Coupon) => void;
  isLoading: boolean;
}

const CouponTable: React.FC<CouponTableProps> = ({ coupons, onDeleteCoupon, isLoading }) => {
  // the parent component (AdminPanel) controls the coupon list and loading state;
  // this table simply renders whatever it receives via props.

  const formatDiscount = (discount: number, type: string) => {
    switch (type) {
      case 'percentage':
        return `${discount}%`;
      case 'fixed':
        return `$${discount}`;
      case 'free-shipping':
        return 'Free';
      case 'bogo':
        return `${discount}% off 2nd`;
      case 'seasonal':
        return `${discount}%`;
      default:
        return `${discount}%`;
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Loading coupons...</h3>
      </div>
    );
  }

  if (coupons.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Tag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No coupons found</h3>
        <p className="text-gray-500">Try creating a new coupon</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Coupon Codes</h2>
        <p className="text-sm text-gray-600 mt-1">Manage your discount codes and promotions</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map((coupon, index) => {
              const typeInfo = getCouponTypeInfo(coupon.type);
              return (
                <tr 
                  key={coupon.id} 
                  className={`hover:bg-gray-50 transition-colors duration-150 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        <Tag className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 font-mono">
                          {coupon.code}
                        </div>
                        
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeInfo.color}`}>
                      <span className="mr-1">{typeInfo.icon}</span>
                      {typeInfo.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {formatDiscount(coupon.discount, coupon.type)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {coupon.type === 'free-shipping' ? 'Shipping' : 'Discount'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onDeleteCoupon(coupon)}
                      disabled={isLoading}
                      className="text-red-600 hover:text-red-900 disabled:text-red-400 transition-colors duration-150 p-2 hover:bg-red-50 rounded-lg"
                      title="Delete coupon"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Showing {coupons.length} coupon{coupons.length !== 1 ? 's' : ''}</span>
          <div className="flex items-center space-x-4">
            <span>Total discount codes: {coupons.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponTable;