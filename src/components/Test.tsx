import axios from "axios";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/v1.5/cart/get-all"
        );
        console.log(response.data.carts);
        // Flatten the data structure to include each course as a separate row
        const flattenedData = response.data.carts.flatMap((cart: any) => {
          return cart.courses.map((course: any) => ({
            userId: cart.userId,
            courseId: course._id,
            courseName: course.name,
            coursePrice: course.price,
            courseDiscountedPrice: course.discountedPrice,
            paidFor: cart.paidFor,
            totalPrice: cart.totalPrice,
            totalDiscountedPrice: cart.totalDiscountedPrice,
          }));
        });
        setData(flattenedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="font-mono font-bold bg-green-500 text-white border-2 border-green-500 text-3xl px-7 py-4 rounded-3xl cursor-pointer hover:bg-white hover:text-green-500">
        {data.length > 0 && (
          <CSVLink data={data} filename={"active_carts.csv"}>
            Download Active Carts
          </CSVLink>
        )}
      </div>
    </div>
  );
}

export default Test;
