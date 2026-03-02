import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import { UserAPI } from "../../apis/UserAPIs";
import { couponService } from "../../apis/coupon/couponService";
import Signup from "../../components/main/login/Login";
import { FaTimes } from "react-icons/fa";
import "./Cart.css";
import Helmet from "react-helmet";
import Help from "../../components/Help";

interface Course {
  id: string;
  name: string;
  description: string;
  image: string;

  // backend may send different keys
  price?: number;
  discountedPrice?: number;
  originalPrice?: number;
  discountPrice?: number;
  discounted_price?: number;
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

const Cart = ({
  headerHeight,
  setCartDetailsData,
  setCartValueData,
}: CartProps) => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const cartPage = useRef<HTMLDivElement | null>(null);

  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserEmail, setloggedInUserEmail] = useState("");

  const [netPriceObj, setNetPriceObj] = useState<NetPrice>({
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
  });

  const [couponCode, setCouponCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const [additionalDiscount, setAdditionalDiscount] = useState(0);

  /* ----------------------------
     🔥 PRICE NORMALIZER (REAL FIX)
  ----------------------------- */
  const getPrice = (course: Course) =>
    Number(
      course.price ??
        course.originalPrice ??
        0
    );

  const getDiscountedPrice = (course: Course) =>
    Number(
      course.discountedPrice ??
        course.discountPrice ??
        course.discounted_price ??
        course.price ??
        0
    );

  /* ---------------------------- */
  useEffect(() => {
    calculateNetPrice();
  }, [cart]);

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

  /* ----------------------------
     COUPON (BACKEND)
  ----------------------------- */
  const handleApplyCoupon = async () => {
    setPromoApplied(false);
    setAdditionalDiscount(0);

    if (!couponCode.trim()) {
      setCouponMessage("Invalid coupon code");
      setPromoApplied(true);
      calculateNetPrice(0);
      return;
    }

    const result = await couponService.validateCoupon(couponCode);

    if (result.success) {
      setCouponMessage(
        `Woohoo! 🎉 You've got an extra ${result.discount}% off`
      );
      setAdditionalDiscount(result.discount);
      setPromoApplied(true);
      calculateNetPrice(result.discount);
    } else {
      setCouponMessage(result.message || "Invalid coupon code");
      setPromoApplied(true);
      calculateNetPrice(0);
    }
  };

  /* ----------------------------
     PRICE CALCULATION
  ----------------------------- */
  const calculateNetPrice = (extraDiscount = 0) => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    cart.forEach((course: Course) => {
      totalPrice += getPrice(course);
      totalDiscountedPrice += getDiscountedPrice(course);
    });

    if (extraDiscount > 0) {
      totalDiscountedPrice =
        totalDiscountedPrice * (1 - extraDiscount / 100);
    }

    const discount =
      totalPrice > 0
        ? Math.floor(
            ((totalPrice - totalDiscountedPrice) / totalPrice) * 100
          )
        : 0;

    const newNet = {
      totalPrice,
      totalDiscountedPrice: Math.round(totalDiscountedPrice),
      discount,
    };

    setNetPriceObj(newNet);
    setCartDetailsData(cart);
    setCartValueData(newNet.totalDiscountedPrice);
  };

  const handleProceedToPayment = () => {
    if (isLoggedIn) navigate("/cart-summary");
    else setIsSignupPopupVisible(true);
  };

  /* ----------------------------
     UI (UNCHANGED LAYOUT)
  ----------------------------- */
  return (
    <div
      className="cart text-[#2E436A] px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] flex flex-col gap-10 mb-10"
      ref={cartPage}
    >
      <Helmet>
        <title>TechBairn - Cart</title>
      </Helmet>

      <Help />

      {cart.length === 0 ? (
        <div className="text-center text-4xl font-bold">
          Your bag is empty
        </div>
      ) : (
        <div className="main-cart border rounded-2xl flex flex-col gap-10 p-5 lg:p-7 xl:p-16 shadow-xl">
          {cart.map((course: Course) => {
            const price = getPrice(course);
            const discounted = getDiscountedPrice(course);

            return (
              <div
                className="cart-course-card flex flex-col lg:flex-row gap-3 xl:gap-9"
                key={course.id}
              >
                <div className="course-box-1 flex gap-3 xl:gap-7 lg:w-4/6">
                  <div className="img h-48 w-5/12 xl:w-4/12 xl:h-60 border rounded-xl overflow-hidden">
                    <img src={course.image} alt={course.name} />
                  </div>

                  <div className="w-7/12 flex flex-col justify-between py-5">
                    <div className="text-4xl lg:text-5xl font-semibold">
                      {course.name}
                    </div>
                    <div className="text-2xl lg:text-3xl">
                      {course.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between lg:w-2/6">
                  <div className="text-3xl lg:text-4xl font-semibold">
                    <div className="text-[#6D87F5]">
                      Rs {discounted.toFixed(2)}
                    </div>
                    <div className="line-through">
                      Rs {price.toFixed(2)}
                    </div>
                  </div>

                  <div
                    onClick={() => removeFromCart(course.id)}
                    className="bg-[#FF7E6C] text-white px-6 py-3 rounded-xl cursor-pointer"
                  >
                    Remove
                  </div>
                </div>
              </div>
            );
          })}

          <div className="border-t-2 border-dashed pt-5 flex flex-col gap-5">
            <div className="flex justify-end gap-6 text-3xl font-semibold">
              <div>Net Price</div>
              <div className="text-[#6D87F5]">
                Rs {netPriceObj.totalDiscountedPrice.toFixed(2)}
              </div>
              {additionalDiscount === 0 && (
                <div className="text-[#FF7E6C]">{netPriceObj.discount}% off</div>
              )}
            </div>

            <div className="flex gap-3">
              <input
                className="border p-2 rounded-md w-1/3"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="bg-[#FF7E6C] text-white px-6 rounded-md"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>

            {promoApplied && <div>{couponMessage}</div>}

            <div className="flex lg:flex-row-reverse gap-4">
              <button
                className="bg-[#2E436A] text-white px-8 py-3 rounded-2xl"
                onClick={handleProceedToPayment}
              >
                Proceed to payment
              </button>

              <NavLink
                to="/programs"
                className="bg-[#2E436A] text-white px-8 py-3 rounded-2xl"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {isSignupPopupVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={() => setIsSignupPopupVisible(false)}
              className="absolute top-2 right-2 text-4xl"
            >
              <FaTimes />
            </button>
            <Signup
              handle_login={() => setIsLoggedIn(true)}
              setIsLoggedIn={setIsLoggedIn}
              setloggedInUserEmail={setloggedInUserEmail}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;