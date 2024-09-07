import React, { useState } from "react";
import { UserAPI } from "../../apis/UserAPIs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OperationSignIn: React.FC = ({ handle_login, setIsLoggedIn }: any) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>();
  const [color, setColor] = useState<boolean>(false);

  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handlelogin = async () => {
    const response = await UserAPI.login(data, handle_login, setIsLoggedIn);
    if (response.status === 201) {
      if (value === "sale") {
        toast.success("Login Successful");
        navigate("/operations/sales");
      } else {
        toast.success("Login Successful");
        navigate("/operations/manage-events");
      }
    }
  };

  const handleRoleSale = () => {
    setValue("sale");
    setColor(!color);
  };

  const handleRoleOperation = () => {
    setValue("operation");
    setColor(!color);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="flex flex-col items-center justify-center px-10 py-12 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-8 space-y-6 md:space-y-8">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">Select Type Of Operation</h4>
            <div className="flex justify-evenly mb-6">
              <button
                className={
                  color
                    ? "bg-blue-600 text-white h-12 px-8 rounded-lg shadow"
                    : "bg-gray-100 text-gray-800 h-12 px-8 rounded-lg shadow"
                }
                onClick={handleRoleSale}
              >
                Sales
              </button>
              <button
                className={
                  color
                    ? "bg-gray-100 text-gray-800 h-12 px-8 rounded-lg shadow"
                    : "bg-blue-600 text-white h-12 px-8 rounded-lg shadow"
                }
                onClick={handleRoleOperation}
              >
                Event & Blog
              </button>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Sign in to your account
            </h1>

            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handlelogin}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSignIn;


// import React, { useState } from "react";
// import { UserAPI } from "../../apis/UserAPIs";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const OperationSignIn: React.FC = () => {
//   const Navigate = useNavigate();
//   const [value, setValue] = useState<string>();
//   const [color, setColor] = useState<boolean>(false);

//   const [data, setData] = useState<any>({
//     email: "",
//     password: "",
//   });

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({ ...data, email: e.target.value });
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({ ...data, password: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   const handlelogin = async () => {
//     const response = await UserAPI.login(data);
//     if (response.status === 201) {
//       if (value === "sale") {
//         toast.success("Login Successful");
//         Navigate("/operations/sales");
//       } else {
//         toast.success("Login Successful");
//         Navigate("/operations/manage-events");
//       }
//     }
//   };

//   const handleRoleSale = () => {
//     setValue("sale");
//     setColor(!color);
//   };

//   const handleRoleOperation = () => {
//     setValue("operation");
//     setColor(!color);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h4> Select Type Of Operation</h4>
//             <div className="flex justify-evenly">
//               <button
//                 className={
//                   color
//                     ? "bg-blue-500 h-10 px-5 rounded text-white"
//                     : "bg-white h-10 px-5 rounded"
//                 }
//                 onClick={handleRoleSale}
//               >
//                 Sales
//               </button>
//               <button
//                 className={
//                   color
//                     ? "bg-white px-2 rounded"
//                     : "bg-blue-500 px-2 rounded text-white"
//                 }
//                 onClick={handleRoleOperation}
//               >
//                 Event & Blog
//               </button>
//             </div>

//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Sign in to your account
//             </h1>

//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={data.email}
//                   onChange={handleEmailChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={data.password}
//                   onChange={handlePasswordChange}
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 onClick={handlelogin}
//                 className="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Sign in
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OperationSignIn;
