import axios from "axios";
import { baseUrl } from "../Constants";
import Cookies from "js-cookie";

export const SignUp = async (email, fullname, password) => {
  try {
    const requestBody = {
      email,
      fullname,
      password
    };
    const response = await axios.post(baseUrl + "/users/register", requestBody, {
      withCredentials: true,
    });
    Cookies.set("accessToken", response.data.accessToken);
  } catch (error) {
    throw error;
  }
};

export const SignIn = async (email, password) => {
  try {
    const requestBody = {
      email,
      password
    };

    const response = await axios.post(baseUrl + "/users/login", requestBody, {
      withCredentials: true,
    });
    Cookies.set("accessToken", response.data.accessToken);
  } catch (error) {
    throw error;
  }
};

export const Logout = async () => {
  try {
    await axios.post(baseUrl + "/users/logout", {}, {
      withCredentials: true,
    });
    Cookies.remove("accessToken");
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (oldPassword, newPassword) => {
  try {
    await axios.post(baseUrl + "/users/change-password", {
      oldPassword,
      newPassword
    }, {
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};

export const changeEmail = async (email) => {
  try {
    await axios.post(baseUrl + "/users/change-email", {
      email
    }, {
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const user = await axios.get(baseUrl + "/users/user", {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    throw error;
  }
};
