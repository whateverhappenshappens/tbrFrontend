import React, { useEffect, useState } from "react";

interface Props {
  coupon: any;
  setcoupon: any;
}

const EnrollStudent: React.FC<Props> = ({ coupon, setcoupon }) => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Apply Coupon");

  const coupons: { [key: string]: number } = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE30: 30,
    SAVE40: 40,
    SAVE50: 50,
  };

  const handleApplyCoupon = () => {
    if (coupons[couponCode] !== undefined) {
      const discountPercentage = coupons[couponCode];
      setDiscount(discountPercentage);
      setMessage(`You have got 35% + ${discountPercentage}% discount`);
      setButtonText("Promo Applied");
      setcoupon(couponCode);
    } else {
      setDiscount(null);
      setMessage("Invalid coupon code");
      setButtonText("Apply Coupon");
    }
  };

  useEffect(() => {
    console.log(coupon);
  }, [coupon]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="p-6 max-w-sm mt-[15rem] mx-auto bg-white rounded-xl shadow-md space-y-4">
      <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/2zhUebETcUI?si=TScgi1XOgQ1FYuGS"
  title="YouTube video player"
  style={{ border: "none" }} 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      <h1 className="text-2xl font-bold text-center">Coupon Application</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </div>
      {message && <p className="text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default EnrollStudent;
