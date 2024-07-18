import { api } from "./configs/axiosConfigs";
import toast from "react-hot-toast";
import { User } from "../types/User";

// function to refresh the access token
async function refreshAccessToken() {
  console.log("inside refresh token function.");
  localStorage.removeItem("access-token");
  await api
    .post("/v1.5/auth/refresh-token")
    .then((res) => {
      console.log(res);
      localStorage.setItem("access-token", res.data.access_token);
    })
    .catch((error: any) => {
      console.log(
        `An error occurred while fetching access token -> ${error.status}`
      );
    });
}

export const UserAPI = {
  create: async function (user: User) {
    try {
      const res = await api.post("/v1.5/auth/register", user);
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },

  login: async function (user: User, handle_login?: any, setIsLoggedIn?: any) {
    const formData = new URLSearchParams();
    const useremail = user.email;
    formData.append("username", user.email);
    formData.append("password", user.password);
    try {
      const res = await api.post("/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (res.status === 201) {
        localStorage.setItem("access-token", res.data.access_token);
        if (typeof handle_login === "function") handle_login();
        if (typeof setIsLoggedIn === "function") setIsLoggedIn(true);
        // localStorage.setItem("user-email", useremail);
      }
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      if (typeof setIsLoggedIn === "function") setIsLoggedIn(false);
      return Promise.reject(error);
    }
  },

  logout: async function (setIsLoggedIn?: any) {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: "/v1.5/auth/logout",
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      console.log(res);
      toast.success("Logout Successful");
      localStorage.removeItem("access-token");
      // localStorage.removeItem("user-email");
      if (typeof setIsLoggedIn === "function") setIsLoggedIn(false);
      return;
    } catch (error) {
      refreshAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },

  check_access_token_validity: async function () {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: "/v1.5/requests/test/private/zoro",
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res;
    } catch (error) {
      refreshAccessToken();
      return error;
    }
  },

  private_test: async function () {
    const access_token = localStorage.getItem("access-token");

    try {
      const res = await api.request({
        url: "/v1.5/requests/test/private/zoro",
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      // console.log(res);
      // toast.success("Valid access token!");
      return res;
    } catch (error) {
      refreshAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },

  public_test: async function () {
    try {
      const res = await api.get("/v1.5/requests/test/public");
      console.log(res);
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  UserDetails: async function () {
    const access_token = localStorage.getItem("access-token");
    if (!access_token) {
      return false;
    }
    try {
      const res = await api.request({
        url: "/v1.5/requests/test/private/zoro",
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      console.log(res.data);
      return res;
    } catch (error) {
      console.error("An error occurred while checking login status:", error);
      return false;
    }
  },
  UpdateProfileDetail: async function (useremail: any) {
    const access_token = localStorage.getItem("access-token");

    try {
      const res = await api.request({
        url: `/v1.5/users/@${useremail}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res;
    } catch (error) {
      refreshAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
  userProfileDetail: async function (useremail: any) {
    const access_token = localStorage.getItem("access-token");

    try {
      const res = await api.request({
        url: `/v1.5/users/@${useremail}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res;
    } catch (error) {
      refreshAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
  UpdateUserProfile: async function (email: any, patchOps: any[]) {
    const access_token = localStorage.getItem("access-token");
    const url = `/v1.5/users/${email}`;

    try {
      const res = await api.patch(url, patchOps, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json-patch+json",
        },
      });
      console.log("Profile updated:", res.data);
      toast.success("Profile updated successfully!");
      return res.data; // Assuming you want to return the updated profile data
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile.");
      return Promise.reject(error);
    }
  },
  // userProfileDetail: async function (useremail: any) {
  //   try {
  //     const res = await api.get(`/v1.5/users/@${useremail}`);
  //     return res.data;
  //   } catch (error) {
  //     console.error(
  //       "An error occurred while fetching user profile details:",
  //       error
  //     );
  //     return Promise.reject(error);
  //   }
  // },
};

// import { api } from "./configs/axiosConfigs";
// import toast from "react-hot-toast";
// // import { AxiosError } from "axios";
// import { User } from "../types/User";

// // function to refresh the access token
// async function refreshAccessToken() {
//   console.log("inside refresh token function.");
//   localStorage.removeItem("access-token");
//   await api
//     .post("/v1.5/auth/refresh-token")
//     .then((res) => {
//       console.log(res);
//       localStorage.setItem("access-token", res.data.access_token);
//     })
//     .catch((error: any) => {
//       console.log(
//         `An error occurred while fetching access token -> ${error.status}`
//       );
//     });
// }

// export const UserAPI = {
//   create: async function (user: User) {
//     try {
//       const res = await api.post("/v1.5/auth/register", user);
//       return res;
//     } catch (error) {
//       console.error("An error occurred:", error);
//       return Promise.reject(error);
//     }
//   },

//   login: async function (user: User, handle_login?: any, setIsLoggedIn?: any) {
//     const formData = new URLSearchParams();
//     formData.append("username", user.email);
//     formData.append("password", user.password);
//     try {
//       const res = await api.post("/login", formData, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });

//       if (res.status == 201) {
//         localStorage.setItem("access-token", res.data.access_token);
//         if (typeof handle_login === "function") handle_login();
//         if (typeof setIsLoggedIn === "function") setIsLoggedIn(true);
//       }
//       return res;
//     } catch (error) {
//       console.error("An error occurred:", error);
//       setIsLoggedIn(false);
//       return Promise.reject(error);
//     }
//   },

//   logout: async function () {
//     const access_token = localStorage.getItem("access-token");
//     try {
//       const res = await api.request({
//         url: "/v1.5/auth/logout",
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + access_token,
//         },
//       });
//       console.log(res);
//       toast.success("Logout Successfull");
//       localStorage.removeItem("access-token");
//       return;
//     } catch (error) {
//       refreshAccessToken();
//       console.error("An error occurred:", error);
//       toast.error("Invalid access token!");
//       return error;
//     }
//   },

//   Operationslogin: async function (
//     user: User,
//     handle_login?: any,
//     setIsLoggedIn?: any
//   ) {
//     const formData = new URLSearchParams();
//     formData.append("username", user.email);
//     formData.append("password", user.password);
//     console.log(user);
//     try {
//       const res = await api.post("/login", formData, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });

//       if (res.status == 201) {
//         localStorage.setItem("access-token", res.data.access_token);
//         if (typeof handle_login === "function") handle_login();
//         if (typeof setIsLoggedIn === "function") setIsLoggedIn(true);
//       }
//       return res;
//     } catch (error) {
//       console.error("An error occurred:", error);

//       return Promise.reject(error);
//     }
//   },

//   check_access_token_validity: async function () {
//     const access_token = localStorage.getItem("access-token");
//     try {
//       const res = await api.request({
//         url: "/v1.5/requests/test/private/zoro",
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + access_token,
//         },
//       });
//       return res;
//     } catch (error) {
//       refreshAccessToken();
//       return error;
//     }
//   },

//   private_test: async function () {
//     const access_token = localStorage.getItem("access-token");

//     try {
//       const res = await api.request({
//         url: "/v1.5/requests/test/private/zoro",
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + access_token,
//         },
//       });
//       console.log(res);
//       toast.success("Valid access token!");
//       return res;
//     } catch (error) {
//       refreshAccessToken();
//       console.error("An error occurred:", error);
//       toast.error("Invalid access token!");
//       return error;
//     }
//   },

//   public_test: async function () {
//     try {
//       const res = await api.get("/v1.5/requests/test/public");
//       console.log(res);
//       return res;
//     } catch (error) {
//       console.error("An error occurred:", error);
//       return Promise.reject(error);
//     }
//   },
// };
