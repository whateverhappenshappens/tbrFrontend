import { couponService } from "../../apis/coupon/couponService";

export type CouponType = 'percentage' | 'fixed' | 'free-shipping' | 'bogo' | 'seasonal';

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: CouponType;
  // Add any additional fields from your API response
}

export const COUPON_TYPES: { value: CouponType; label: string; color: string; icon: string }[] = [
  { value: 'percentage', label: 'Percentage', color: 'bg-blue-100 text-blue-800', icon: '%' },
  { value: 'fixed', label: 'Fixed Amount', color: 'bg-green-100 text-green-800', icon: '$' },
  { value: 'free-shipping', label: 'Free Shipping', color: 'bg-purple-100 text-purple-800', icon: '🚚' },
  { value: 'bogo', label: 'Buy One Get One', color: 'bg-orange-100 text-orange-800', icon: '2x' },
  { value: 'seasonal', label: 'Seasonal', color: 'bg-red-100 text-red-800', icon: '🎉' },
];

export const getCouponTypeInfo = (type: CouponType) => {
  return COUPON_TYPES.find(t => t.value === type) || COUPON_TYPES[0];
};

// Function to fetch coupons from API
export const fetchCoupons = async (): Promise<Coupon[]> => {
  try {
    const response = await couponService.getCoupons();
    return response.data.map((apiCoupon: any) => ({
      id: apiCoupon.id,
      code: apiCoupon.couponCode,
      discount: apiCoupon.percentage,
      type: apiCoupon.type as CouponType
    }));
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return []; // Return empty array if API fails
  }
};