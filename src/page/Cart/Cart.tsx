import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import { UserAPI } from "../../apis/UserAPIs";
import Signup from "../../components/main/login/Login";
import { FaTimes } from "react-icons/fa";
import "./Cart.css"
interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: string;
}

interface CartProps {
  headerHeight: number;
  setCartDetailsData: (data: Course[]) => void;
  setCartValueData: (value: number) => void;
}

interface NetPrice {
  totalPrice: number;
  totalDiscountedPrice: number;
  discount: number;
}

const coupons: Record<string, number> = {
  SAVE10: 10,
  SPRING20: 20,
  WINTER25: 25,
  SUMMER30: 30,
  FALL35: 35,
};

const Cart = ({ headerHeight, setCartDetailsData, setCartValueData }: CartProps) => {
  const { cart, removeFromCart } = useCart();
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const cartPage = useRef<HTMLDivElement | null>(null);
  const [netPriceObj, setNetPriceObj] = useState<NetPrice>({
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
  });
  const [couponCode, setCouponCode] = useState<string>("");
  const [cartValue, setCartValue] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [couponMessage, setCouponMessage] = useState<string>("");
  const [additionalDiscount, setAdditionalDiscount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateNetPrice();
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cartPage.current) {
      cartPage.current.style.paddingTop = `${headerHeight + 10}px`;
    }
  }, [headerHeight]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await UserAPI.isLoggedIn();
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  const toggleSignupPopup = () => {
    setIsSignupPopupVisible(!isSignupPopupVisible);
  };

  const handleApplyCoupon = () => {
    if (coupons.hasOwnProperty(couponCode)) {
      const couponDiscount = coupons[couponCode];
      setCouponMessage(`You have got  ${couponDiscount}% discount`);
      setPromoApplied(true);
      setAdditionalDiscount(couponDiscount);
      calculateNetPrice(couponDiscount);
    } else {
      setCouponMessage("Invalid coupon code");
      setPromoApplied(true);
      setAdditionalDiscount(0);
      calculateNetPrice(0);
    }
  };

  const calculateNetPrice = (additionalDiscount = 0) => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    cart.forEach((course: Course) => {
      totalPrice += course.price;
      totalDiscountedPrice += course.discountedPrice;
    });
    if (additionalDiscount > 0) {
      totalDiscountedPrice = totalDiscountedPrice * (1 - additionalDiscount / 100);
    }
    let discount = Math.floor(((totalPrice - totalDiscountedPrice) / totalPrice) * 100);
    const newNetPriceObj: NetPrice = {
      totalPrice,
      totalDiscountedPrice: Math.floor(totalDiscountedPrice),
      discount,
    };
    setNetPriceObj(newNetPriceObj);
    setCartValue(newNetPriceObj.totalDiscountedPrice);
    setCartDetailsData(cart);
    setCartValueData(newNetPriceObj.totalDiscountedPrice);
  };

  const handleProceedToPayment = () => {
    if (isLoggedIn) {
      navigate("/cart-summary");
    } else {
      toggleSignupPopup();
    }
  };

  return (
    <div
      className="cart text-[#2E436A] px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] overflow-visible flex flex-col gap-10 xl:gap-14 mb-10"
      ref={cartPage}
    >
      <div className="heading text-6xl lg:text-8xl font-semibold text-center lg:text-left overflow-visible">
        
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart-message text-center text-4xl lg:text-6xl font-bold mb-[5rem] overflow-visible">
          <h2 className="overflow-visible">Your bag is empty</h2>
          <NavLink
            to="/programs"
            className="start-shopping bg-[#2E436A] text-white border-2 border-[#2E436A] text-2xl lg:text-4xl px-6 lg:px-10 py-3 lg:py-5 rounded-2xl font-semibold hover:bg-white hover:text-[#2E436A] cursor-pointer mt-10 inline-block"
          >
            Start shopping
          </NavLink>
        </div>
      ) : (
        <div className="main-cart border border-[#ccc] rounded-2xl flex flex-col gap-10 p-5 lg:p-7 xl:p-16 shadow-xl">
          {cart.map((course: Course) => (
            <div className="cart-course-card flex flex-col lg:flex-row gap-3 xl:gap-9" key={course.id}>
              <div className="course-box-1 flex gap-3 xl:gap-7 lg:w-4/6">
                <div className="img h-48 w-5/12 xl:w-4/12 xl:h-60 border rounded-xl overflow-y-hidden">
                  <img src={course.image} alt={course.image} />
                </div>
                <div className="course-name-desc w-7/12 flex flex-col justify-between py-5 xl:py-7">
                  <div className="course-name text-4xl lg:text-5xl xl:text-6xl overflow-visible font-semibold">
                    {course.name}
                  </div>
                  <div className="course-desc text-2xl lg:text-3xl xl:text-4xl xl:overflow-visible">
                    {course.description}
                  </div>
                </div>
              </div>
              <div className="course-box-2 flex items-center justify-between lg:w-2/6">
                <div className="price text-3xl lg:text-4xl xl:text-5xl xl:overflow-visible font-semibold">
                  <div className="new text-[#6D87F5] overflow-hidden">Rs {course.discountedPrice.toFixed(2)}</div>
                  <div className="line-through overflow-hidden">Rs {course.price.toFixed(2)}</div>
                </div>
                <div
                  className="border-2 border-[#FF7E6C] bg-[#FF7E6C] text-white text-2xl lg:text-4xl xl:text-5xl font-semibold px-5 lg:px-6 xl:px-10 py-3 lg:py-4 xl:py-6 cursor-pointer rounded-xl hover:bg-white hover:text-[#FF7E6C]"
                  onClick={() => removeFromCart(course.id)}
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div className="cart-footer flex flex-col gap-5 border-t-2 border-dashed border-[#2E436A] pt-5">
            <div className="net-box flex flex-col lg:flex-row gap-5 lg:w-fit lg:ml-auto lg:gap-10">
              <div className="price text-3xl flex justify-between lg:gap-10">
                <div className="text-4xl lg:text-5xl xl:text-4xl xl:overflow-visible font-semibold">Net Price</div>
                <div className="new text-[#6D87F5] font-semibold">Rs {netPriceObj.totalDiscountedPrice.toFixed(2)}</div>
              </div>
              <div className="discount">
                <div className="text-2xl lg:text-4xl xl:text-5xl xl:overflow-visible flex justify-between font-semibold">
                  <div className="text-[#FF7E6C]">
                    {additionalDiscount > 0 ? `` : `${Math.floor(netPriceObj.discount)}% off`}
                  </div>
                </div>
              </div>
            </div>
            <div className="coupon flex flex-grap gap-3 xl:gap-7">
              <input
                className="input-box p-2 text-6xl w-full sm:w-1/2 lg:w-1/3 xl:py-4 border border-[#2E436A]  rounded-md focus:outline-none"
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="border-[#FF7E6C] bg-[#FF7E6C] text-white text-2xl font-semibold px-14 rounded-md hover:bg-white hover:text-[#FF7E6C]"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
            {promoApplied && <div className="coupon-message">{couponMessage}</div>}
            <div className="flex flex-col gap-5 lg:flex-row-reverse">
            <button
                onClick={handleProceedToPayment}
                className="bg-[#2E436A] text-white border-2 border-[#2E436A] text-2xl lg:text-4xl px-6 lg:px-10 py-3 lg:py-5 rounded-2xl font-semibold hover:bg-white hover:text-[#2E436A] cursor-pointer"
              >
                Proceed to payment
              </button>
              <NavLink to="/programs"
                className="bg-[#2E436A] text-white border-2 border-[#2E436A] text-2xl lg:text-4xl px-6 lg:px-10 py-3 lg:py-5 rounded-2xl font-semibold hover:bg-white hover:text-[#2E436A] cursor-pointer"
              >
                Continue Shopping
              </NavLink>
              
            </div>
          </div>
        </div>
      )}
      {isSignupPopupVisible && (
        <div className=" flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="signup-content bg-white p-8 rounded-lg shadow-md relative">
            <button
              className="close-button  text-gray-500 absolute top-2 right-2"
              onClick={() => setIsSignupPopupVisible(false)}
            >
              <FaTimes />
            </button>
            <Signup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
