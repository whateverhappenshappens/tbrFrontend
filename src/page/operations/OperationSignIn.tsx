import React from "react";
import { useEffect, useState } from "react";
import { UserAPI } from "../../apis/UserAPIs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

interface Props {
  handle_login: any;
  setIsLoggedIn: any;
}

const OperationSignIn: React.FC<Props> = ({ handle_login, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>();
  const [color, setColor] = useState<boolean>(false);

  const [data, setData] = useState({
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

    if (response?.status === 201) {
      toast.success("Login Successful");

      if (value === "sale") {
        navigate("/operations/sales");
      } else {
        navigate("/operations/manage-events");
      }
    }
  };

  const handleRoleSale = () => {
    setValue("sale");
    setColor(true);
  };

  const handleRoleOperation = () => {
    setValue("operation");
    setColor(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>TechBairn - Operations</title>
        <meta
          name="TechBairn Operations Page"
          content="TechBairn Operations Page."
        />
      </Helmet>

      <div className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20 mx-auto min-h-screen">
        <div className="w-full bg-white rounded-xl shadow-lg dark:border sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">

            <h4 className="text-base md:text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-300">
              Select Type Of Operation
            </h4>

            <div className="flex justify-evenly gap-4">
              <button
                className={
                  color
                    ? "bg-blue-500 h-12 px-6 rounded-lg text-white text-lg"
                    : "bg-white h-12 px-6 rounded-lg text-lg"
                }
                onClick={handleRoleSale}
              >
                Sales
              </button>

              <button
                className={
                  !color
                    ? "bg-blue-500 h-12 px-6 rounded-lg text-white text-lg"
                    : "bg-white h-12 px-6 rounded-lg text-lg"
                }
                onClick={handleRoleOperation}
              >
                Event & Blog
              </button>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h1>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-base md:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base md:text-lg rounded-lg block w-full p-3 md:p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-base md:text-lg font-medium text-gray-900 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base md:text-lg rounded-lg block w-full p-3 md:p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handlelogin}
                className="w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-lg px-6 py-3 text-center"
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
