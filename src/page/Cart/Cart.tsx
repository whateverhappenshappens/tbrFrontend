import { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartAPI } from "../../apis/CartAPI/CartAPIs";
import { useCart } from "../../CartContext";
import { UserAPI } from "../../apis/UserAPIs";
import Signup from "../../components/main/login/Login";
import axios from "axios";
import { FaTimes } from "react-icons/fa";  // Import the cross icon

interface Props {
  headerHeight: number;
  setCartDetailsData: any;
  setCartValueData: any;
}

interface CourseType {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

const coupons: Record<string, number> = {
  SAVE10: 10,
  SPRING20: 20,
  WINTER25: 25,
  SUMMER30: 30,
  FALL35: 35,
};

interface NetPriceObjType {
  totalPrice: number;
  totalDiscountedPrice: number;
  discount: number;
}

const Cart: React.FC<Props> = ({
  headerHeight,
  setCartDetailsData,
  setCartValueData,
}) => {
  const { cart, removeFromCart } = useCart();
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartPage = useRef<HTMLDivElement>(null);
  const [netPriceObj, setNetPriceObj] = useState<NetPriceObjType>({
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
  });
  const [couponCode, setCouponCode] = useState("");
  const [cartValue, setCartValue] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const [additionalDiscount, setAdditionalDiscount] = useState(0);
  const [paymentToggle, setPaymentToggle] = useState<boolean>(true);

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    cart.forEach((course) => {
      totalPrice += course.price;
      totalDiscountedPrice += course.discountedPrice;
    });

    let discount = ((totalPrice - totalDiscountedPrice) / totalPrice) * 100;

    setNetPriceObj({
      totalPrice,
      totalDiscountedPrice,
      discount,
    });
    setCartValue(totalDiscountedPrice);
    setCartDetailsData(cart);
    setCartValueData(cartValue);
    console.log("Cart data: ", cart);
    console.log("Cart value: ", cartValue);
  }, [cart, cartValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cartPage.current) {
      cartPage.current.style.paddingTop = `${headerHeight + 10}px`;
    }
  }, [headerHeight]);

  const toggleSignupPopup = () => {
    setIsSignupPopupVisible(!isSignupPopupVisible);
  };

  const handleApplyCoupon = () => {
    if (coupons.hasOwnProperty(couponCode)) {
      const couponDiscount = coupons[couponCode];
      setCouponMessage(
        `You have got ${Math.floor(
          netPriceObj.discount
        )}% + ${couponDiscount}% discount`
      );
      setPromoApplied(true);
      setAdditionalDiscount(couponDiscount);
      calculateNetPrice(couponDiscount);
    } else {
      setCouponMessage("Invalid coupon code");
      setPromoApplied(false);
      setAdditionalDiscount(0);
      calculateNetPrice(0);
    }
  };

  const calculateNetPrice = (additionalDiscount = 0) => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    cart.forEach((course) => {
      totalPrice += course.price;
      totalDiscountedPrice += course.discountedPrice;
    });

    if (additionalDiscount > 0) {
      totalDiscountedPrice =
        totalDiscountedPrice * (1 - additionalDiscount / 100);
    }

    let discount = Math.floor(
      ((totalPrice - totalDiscountedPrice) / totalPrice) * 100
    );

    const newNetPriceObj = {
      totalPrice,
      totalDiscountedPrice: Math.floor(totalDiscountedPrice),
      discount,
    };

    setNetPriceObj(newNetPriceObj);
    setCartValue(newNetPriceObj.totalDiscountedPrice);
  };

  const handleProceedToPayment = () => {
    if (!isLoggedIn) {
      toggleSignupPopup();
    } else {
      // Proceed to payment logic here
    }
  };

  return (
    <div
      className="cart text-[#2E436A] px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] overflow-visible flex flex-col gap-10 xl:gap-14 mb-10"
      ref={cartPage}
    >
      <div className="heading text-6xl lg:text-8xl font-semibold text-center lg:text-left overflow-visible">
        Your Shopping Bag
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
          {cart.map((course) => (
            <div
              key={course.id}
              className="cart-course-card flex flex-col lg:flex-row gap-3 xl:gap-9"
            >
              <div className="course-box-1 flex gap-3 xl:gap-7 lg:w-4/6">
                <div className="img h-48 w-5/12 xl:w-4/12 xl:h-60 border rounded-xl bg-slate-500"></div>
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
                  <div className="new text-[#6D87F5] overflow-hidden">
                    Rs {course.discountedPrice}
                  </div>
                  <div className="line-through overflow-hidden">
                    Rs {course.price}
                  </div>
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
                <div className="text-4xl lg:text-5xl xl:text-6xl xl:overflow-visible text-[#2E436A] font-semibold">
                  Total Amount
                </div>
                <div className="flex flex-col xl:text-5xl xl:overflow-hidden">
                  <div className="new text-[#6D87F5] xl:overflow-visible">
                    Rs {netPriceObj.totalDiscountedPrice.toFixed(2)}
                  </div>
                  <div className="old line-through xl:overflow-visible">
                    {promoApplied &&
                      `Rs ${netPriceObj.totalDiscountedPrice.toFixed(2)}`}
                  </div>
                  <div className="discount-per xl:overflow-visible">
                    {promoApplied
                      ? " "
                      : `${Math.floor(netPriceObj.discount)}% off`}
                  </div>
                </div>
              </div>
            </div>
            <div className="coupon flex flex-col lg:flex-row gap-5 lg:w-fit lg:ml-auto lg:gap-10 items-center">
              <div className="input-box-wrapper flex flex-auto items-center text-3xl lg:text-4xl">
                <input
                  className="input-box p-5 text-3xl lg:text-4xl"
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  className="btn coupon-btn text-white bg-[#2E436A] overflow-visible text-3xl lg:text-4xl  font-semibold rounded-xl hover:bg-white hover:text-[#2E436A] cursor-pointer"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="coupon-message text-3xl lg:text-4xl font-semibold text-green-500">
                  {couponMessage}
                </div>
              )}
            </div>
            <div className="pay-box flex flex-col justify-evenly lg:flex-row gap-5 lg:w-fit lg:ml-auto lg:gap-10">
              <div className="continue-shopping flex justify-center mt-10">
                <NavLink
                  to="/programs"
                  className="bg-[#2E436A] text-white text-3xl lg:text-4xl p-5 lg:p-6 xl:p-8 font-semibold rounded-xl cursor-pointer hover:bg-white hover:text-[#2E436A]"
                >
                  Continue Shopping
                </NavLink>
              </div>
              <div
                className="bg-[#2E436A] text-white mt-[25px] text-3xl lg:text-4xl p-5 lg:p-6 xl:p-8 font-semibold rounded-xl cursor-pointer hover:bg-white hover:text-[#2E436A]"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </div>
            </div>
          </div>
        </div>
      )}
      {isSignupPopupVisible && (
        <div className="absolute z-50 w-[78%] bg-white top-[1%] right-[11%] border rounded-lg">
          <button
            className="absolute top-[2rem] right-[4rem] text-5xl font-bold text-black hover:text-gray-700"
            onClick={toggleSignupPopup}
          >
            <FaTimes />
          </button>
          <Signup closePopup={toggleSignupPopup} />
        </div>
      )}
    </div>
  );
};

export default Cart;
