import React, { useState, useEffect } from 'react';
import CouponTable from './CouponTable';
import AddCouponModal from './AddCouponModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { Plus, Settings, Search, Filter, X } from 'lucide-react';
import { couponService } from '../../apis/coupon/couponService';
import { Coupon, CouponType, COUPON_TYPES, fetchCoupons } from '../../apis/coupon/Coupon';
import { toast } from "react-hot-toast";

const AdminPanel: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [couponToDelete, setCouponToDelete] = useState<Coupon | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<CouponType | 'all'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Fetch coupons on component mount
  useEffect(() => {
    const loadCoupons = async () => {
      try {
        setIsInitialLoading(true);
        const apiCoupons = await fetchCoupons();
        // Transform API response to match our Coupon interface if needed
        const formattedCoupons = apiCoupons.map(coupon => ({
          id: coupon.id,
          code: coupon.code,
          discount: coupon.discount,
          type: coupon.type
        }));
        setCoupons(formattedCoupons);
      } catch (error) {
        console.error('Failed to fetch coupons:', error);
        // You might want to show an error notification here
      } finally {
        setIsInitialLoading(false);
      }
    };

    loadCoupons();
  }, []);

  const handleAddCoupon = async (code: string, discount: number, type: CouponType) => {
    setIsLoading(true);
    try {
      const response = await couponService.addCoupon({ 
        couponCode: code.toUpperCase(), 
        percentage: discount,
        type 
      });
      
      if (response) {
        const newCoupon: Coupon = {
          id: response.id,
          code: response.couponCode,
          discount: response.percentage,
          type: response.type
        };
        setCoupons([...coupons, newCoupon]);
        setIsAddModalOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to add coupon:', error);
      // You might want to show an error notification here
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCoupon = (coupon: Coupon) => {
    setCouponToDelete(coupon);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (couponToDelete) {
      setIsLoading(true);
      try {
        await couponService.removeCoupon(couponToDelete.id);
        setCoupons(coupons.filter(c => c.id !== couponToDelete.id));
        window.location.reload();
      } catch (error) {
        console.error('Failed to remove coupon:', error);
        // You might want to show an error notification here
      } finally {
        setIsLoading(false);
        setIsDeleteModalOpen(false);
        setCouponToDelete(null);
      }
    }
  };

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch =
  (coupon.code?.toLowerCase() || "").includes((searchTerm || "").toLowerCase());

    const matchesType = selectedType === 'all' || coupon.type === selectedType;
    return matchesSearch && matchesType;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
  };

  const hasActiveFilters = searchTerm !== '' || selectedType !== 'all';

  const getTypeStats = () => {
    return COUPON_TYPES.map(type => ({
      ...type,
      count: coupons.filter(c => c.type === type.value).length
    }));
  };

  if (isInitialLoading) {
    return (
      <div className="min-h-screen p-6 mt-[15rem] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading coupons...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6  bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-700">Processing...</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Coupon Management</h1>
                <p className="text-gray-600 mt-1">Manage discount codes and promotions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search coupons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as CouponType | 'all')}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="all">All Types</option>
                  {COUPON_TYPES.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200"
                >
                  <X className="h-4 w-4" />
                  <span>Clear</span>
                </button>
              )}
              <button
                onClick={() => setIsAddModalOpen(true)}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Add Coupon</span>
              </button>
              {/* quick-add button for demonstration/testing */}
              <button
                onClick={async () => {
                  // use couponService directly with types from Coupon.ts
                  setIsLoading(true);
                  try {
                    const sample: { couponCode: string; percentage: number; type: CouponType } = {
                      couponCode: 'TEST10',
                      percentage: 10,
                      type: 'percentage'
                    };
                    const res = await couponService.addCoupon(sample);
                    if (res && res.data) {
                      const newCoupon: Coupon = {
                        id: res.data.id,
                        code: res.data.couponCode,
                        discount: res.data.percentage,
                        type: res.data.type
                      };
                      setCoupons(prev => [...prev, newCoupon]);
                      toast.success('Test coupon added');
                    }
                  } catch (e) {
                    console.error(e);
                  } finally {
                    setIsLoading(false);
                  }
                }}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Quick Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Summary */}
        {hasActiveFilters && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-blue-800 font-medium">Active Filters:</span>
                {searchTerm && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedType !== 'all' && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    Type: {COUPON_TYPES.find(t => t.value === selectedType)?.label}
                  </span>
                )}
              </div>
              <span className="text-blue-700">
                {filteredCoupons.length} of {coupons.length} coupons
              </span>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Coupons</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{coupons.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          {getTypeStats().map(type => (
            <div key={type.value} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{type.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{type.count}</p>
                </div>
                <div className={`p-3 rounded-lg ${type.color.replace('text-', 'bg-').replace('-800', '-100')}`}>
                  <span className={`text-lg font-bold ${type.color}`}>
                    {type.icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Table */}
        {/* extra add button placed above table for visibility */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAddModalOpen(true)}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Plus className="h-4 w-4" />
            <span>Add Coupon</span>
          </button>
        </div>
        <CouponTable 
          coupons={filteredCoupons} 
          onDeleteCoupon={handleDeleteCoupon}
          isLoading={isLoading}
        />

        {/* Modals */}
        <AddCouponModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddCoupon={handleAddCoupon}
          existingCodes={coupons.map(c => c.code)}
          isLoading={isLoading}
        />

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
          coupon={couponToDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default AdminPanel;