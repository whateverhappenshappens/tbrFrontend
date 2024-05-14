import { useRef, useEffect, useState } from "react";

import { OrderRequestData } from "../../types/OrderRequestData";
import axios from "axios"; // shift to services
// import Razorpay from "razorpay";

interface courseType {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

interface netPriceObjType {
  totalPrice: number;
  totalDiscountedPrice: number;
  discount: number;
}

const Cart = ({ headerHeight }: any) => {
  const cartPage = useRef<HTMLDivElement>(null);

  const [addedCourses, setAddedCourses] = useState<courseType[]>([
    {
      id: "one",
      name: "Webmonk",
      description:
        "A very small description of course should be included here within a maximum of 2 lines",
      price: 5000,
      discountedPrice: 2999,
    },
    {
      id: "two",
      name: "Webmonk",
      description:
        "A very small description of course should be included here within a maximum of 2 lines",
      price: 5000,
      discountedPrice: 2999,
    },
    {
      id: "three",
      name: "Webmonk",
      description:
        "A very small description of course should be included here within a maximum of 2 lines",
      price: 5000,
      discountedPrice: 2999,
    },
  ]);

  const [netPriceObj, setNetPriceObj] = useState<netPriceObjType>({
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
  });

  const removeCourse = (courseId: string) => {
    setAddedCourses(addedCourses.filter((a) => a.id !== courseId));
  };

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    addedCourses.forEach((course) => {
      totalPrice += course.price;
      totalDiscountedPrice += course.discountedPrice;
    });

    let discount = Math.ceil((totalDiscountedPrice / totalPrice) * 100);

    setNetPriceObj({
      totalPrice,
      totalDiscountedPrice,
      discount,
    });
  }, [addedCourses]);

  const requestData: OrderRequestData = {
    utr: "utr-number",
    mobileNumber: "9999999999",
    userId: "user-id",
    paymentId: "payment-id",
    modeOfPayment: "mode-of-payment",
    selectedCourses: addedCourses.map(({ description, ...rest }) => rest),
  };

  function handlePayment() {
    axios
      .post(`http://localhost:8080/payment/${netPriceObj.totalDiscountedPrice * 100}`, requestData)
      .then((response) => {
        console.log("order created!", response, netPriceObj.totalDiscountedPrice * 100);
        const data = response.data;
        const options = {
          key: "rzp_test_LFEMJf6qnRSih6",
          amount: data.amount,
          currency: "INR",
          name: "Techbairn",
          description: "Test Transaction",
          order_id: data.orderId,
          callback_url: "google.com",
          show_coupons: true,
          handler: function (response: any) {
            console.log("success -->", response);
            axios
              .post("http://localhost:8080/payment/success", {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                mobileNumber: "9999999999",
              })
              .then((response) => {
                console.log("payment success!", response);
                // toast.success("Course Purchased!");
              });
          },
          prefill: {
            name: "Gaurav",
            email: "gauravtripathii7979@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const paymentWindow = new (window as any).Razorpay(options);
        paymentWindow.on("payment.failed", function (response: any) {
          console.log("failure --->", response);
          // an api to log failure
          axios.post("http://localhost:8080/payment/fail", {
            orderId: response.error.metadata.order_id,
            paymentId: response.error.metadata.payment_id,
            description: response.error.description,
            reason: response.error.reason,
            source: response.error.source,
            step: response.error.step,
          });
        });
        paymentWindow.open();
      })
      .catch((error) => {
        console.error("There was a problem with the payment operation:", error);
      });
  }

  useEffect(() => {
    cartPage.current!.style.paddingTop = `${headerHeight + 10}px`;
  }, [headerHeight]);

  return (
    <div
      className="cart text-[#2E436A] px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] overflow-visible flex flex-col gap-10 xl:gap-14 mb-10"
      ref={cartPage}
    >
      <div className="heading text-6xl lg:text-8xl font-semibold text-center lg:text-left overflow-visible">
        Your Shopping bag
      </div>
      <div className="main-cart border border-[#ccc] rounded-2xl flex flex-col gap-10 p-5 lg:p-7 xl:p-16 shadow-xl">
        {addedCourses.map((course, index) => (
          <div
            key={index}
            className="cart-course-card flex flex-col lg:flex-row gap-3 xl:gap-92"
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
                onClick={() => removeCourse(course.id)}
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
                  Rs {netPriceObj.totalDiscountedPrice}
                </div>
                <div className="old line-through xl:overflow-visible">
                  Rs {netPriceObj.totalPrice}
                </div>
                <div className="discount-per xl:overflow-visible">
                  {netPriceObj.discount}% off
                </div>
              </div>
            </div>

            {/* COUPONS SERCTION */}
            {/* <div className="discount-coupon shadow-2xl lg:shadow-md border rounded-2xl w-fit flex mx-auto lg:h-fit lg:my-auto">
              <input
                type="text"
                placeholder="Enter Coupon code"
                className="border-none px-5 py-3 text-xl lg:text-3xl outline-none"
              />
              <div className="bg-[#6D87F5] text-white px-7 py-3 rounded-2xl text-xl lg:text-3xl border border-[#6D87F5] hover:bg-white hover:text-[#6D87F5] cursor-pointer">
                Apply
              </div>
            </div> */}
          </div>
          <div className="buttons flex justify-between">
            <div className="continue-shopping bg-[#2E436A] text-white border-2 border-[#2E436A] text-2xl lg:text-4xl px-6 lg:px-10 py-3 lg:py-5 rounded-2xl font-semibold hover:bg-white hover:text-[#2E436A] cursor-pointer">
              Continue shopping
            </div>
            <div className="continue-shopping bg-[#6D87F5] text-white text-2xl lg:text-4xl border-2 border-[#6D87F5] px-6 lg:px-16 py-3 lg:py-5 rounded-2xl font-semibold hover:bg-white hover:text-[#6D87F5] cursor-pointer" onClick={() => handlePayment()}>
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
