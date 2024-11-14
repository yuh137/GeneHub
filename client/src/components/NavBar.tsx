import React, { useState } from "react";
import { Breadcrumb, Modal, MenuProps, Dropdown } from "antd";
import { Link } from "react-router-dom";
import FacebookSVG from "../assets/FacebookSVG";
import GoogleSVG from "../assets/GoogleSVG";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import LinkedInSVG from "../assets/LinkedInSVG";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthToken, useAuth } from "../contexts/AuthContext";
import { User } from "../utils/utils";

interface RegisterCredentialsInput {
  username: string;
  email?: string;
  password: string;
}

interface LoginCredentialsInput {
  username: string;
  password: string;
}

const NavBar = () => {
  const navigate = useNavigate();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { loggedInUser, defineLoggedInUser, logout } = useAuth();
  const { register: registerSignup, handleSubmit: handleSubmitSignup } =
    useForm<RegisterCredentialsInput>();
  const { register: registerLogin, handleSubmit: handleSubmitLogin } =
    useForm<LoginCredentialsInput>();
  const onRegisterSubmit: SubmitHandler<RegisterCredentialsInput> = async (
    data
  ) => {
    console.log(data);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/Auth/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: data.username,
        Email: data.email,
        Password: data.password,
        UserType: 0,
        Roles: ["Reader"],
      }),
    });

    if (!res.ok) {
      console.log("Error registering", res);
    } else {
      console.log(await res);
    }
  };
  const onLoginSubmit: SubmitHandler<LoginCredentialsInput> = async (data) => {
    console.log(data);

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/Auth/LoginByUsername`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: data.username,
          Password: data.password,
        }),
      }
    );

    if (!res.ok) {
      console.log("Error logging in", res);
    } else {
      // console.log(await res.json());
      const token: AuthToken = await res.json();
      localStorage.setItem("token", JSON.stringify(token));
      const userId = token.userID;

      const userRes = await fetch(
        `${process.env.REACT_APP_API_URL}/User/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.jwtToken}`,
          },
        }
      );

      if (!userRes.ok) {
        console.log("Error getting user", userRes);
      } else {
        // console.log(await userRes.json());

        const userDTO: User = await userRes.json();
        defineLoggedInUser(userDTO);
      }
    }
  };

  return (
    <>
      <div className="sm:w-[85svw] sm:h-20 bg-[#005555] rounded-md flex justify-between items-center absolute left-1/2 -translate-x-1/2 top-4 sm:px-8 w-[90svw] h-16 px-4">
        <div className="text-[#ccc] font-semibold hover:text-white hover:cursor-pointer transition duration-100 sm:text-2xl justify-self-start self-center">
          GeneHubAI
        </div>

        {/* Navigation Bar */}
        <Breadcrumb
          className="justify-self-end self-center *:sm:space-x-8 sm:block hidden"
          separator=""
          items={
            !loggedInUser
              // Render Navbar with no logged in user
              ? [
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75 flex items-center sm:gap-x-1"
                        onClick={() => navigate(-1)}
                      >
                        <Icon
                          className="sm:w-[24px] sm:h-[24px]"
                          icon="material-symbols:arrow-left-alt-rounded"
                        />
                        <div>Previous page</div>
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75"
                        onClick={() => navigate("/contacts")}
                      >
                        Contact Us
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75"
                        onClick={() => setIsRegisterModalOpen(true)}
                      >
                        Register
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75"
                        onClick={() => setIsLoginModalOpen(true)}
                      >
                        Login
                      </div>
                    ),
                  },
                ]
                // Render Navbar with logged in user
              : [
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75 flex items-center sm:gap-x-1 sm:p-2"
                        onClick={() => navigate(-1)}
                      >
                        <Icon
                          className="sm:w-[24px] sm:h-[24px]"
                          icon="material-symbols:arrow-left-alt-rounded"
                        />
                        <div>Previous page</div>
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75 sm:p-2"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div
                        className="text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75 sm:p-2"
                        onClick={() => navigate("/contacts")}
                      >
                        Contact Us
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div className="uder-info group relative text-[#ccc] sm:text-[16px] hover:cursor-pointer transition delay-75 border border-solid border-white rounded-lg">
                        <div className="hover:text-[#005555] transition delay-75 hover:bg-white sm:p-2 rounded-lg truncate">{loggedInUser?.username ?? "Anonymous"}</div>
                        <div className="absolute hidden box-border flex-col sm:w-[150%] sm:h-fit sm:p-2 rounded-lg group-hover:flex group-focus:flex text-black group-hover:bg-white sm:translate-y-2 before:content-[''] before:absolute before:w-full sm:before:h-4 before:-top-3 before:left-0 hover:cursor-default">
                          <div className="hover:text-white hover:cursor-pointer hover:bg-[#005555] sm:px-1 rounded-md transition delay-75">User Info</div>
                          <div className="hover:text-white hover:cursor-pointer hover:bg-[#005555] sm:px-1 rounded-md transition delay-75 flex items-center sm:gap-x-1" onClick={() => {
                            logout();
                          }}>
                            <span>Logout</span>
                            <Icon icon="material-symbols:logout" className="sm:translate-y-[1px]"/>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]
          }
        />

        {/* Register Modal */}
        <Modal
          open={isRegisterModalOpen}
          onCancel={() => setIsRegisterModalOpen(false)}
          onOk={() => setIsRegisterModalOpen(false)}
          footer={<></>}
          className="sm:!w-[60svw]"
        >
          <div className="relative grid grid-cols-10">
            <div className="bg-[#012433] col-span-4 sm:h-[70svh] rounded-s-lg flex flex-col justify-center sm:gap-y-4 sm:px-8">
              <div className="text-white sm:text-3xl font-semibold">
                Welcome to GeneHubAI
              </div>
              <div className="divider sm:h-[4px] sm:w-[50%] rounded-full bg-[#005555]" />
              <div className="text-white sm:text-lg font-semibold">
                Create a new account and start your journey
              </div>
            </div>
            <div className="col-span-6 sm:h-[70svh] sm:px-12 sm:py-16 flex flex-col items-center sm:gap-y-4">
              <input
                type="text"
                className="sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100"
                placeholder="Email Address"
                {...registerSignup("email", { required: true })}
              />
              <input
                type="text"
                className="sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100"
                placeholder="Username"
                {...registerSignup("username", { required: true })}
              />
              <input
                type="password"
                className="sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100"
                placeholder="Password"
                {...registerSignup("password", { required: true })}
              />
              <div className="flex sm:w-2/3 sm:gap-x-2">
                <div className="sm:w-[45%] sm:h-[1px] bg-black self-center" />
                <div>Or</div>
                <div className="sm:w-[45%] sm:h-[1px] bg-black self-center" />
              </div>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#005555] transition delay-100">
                <div className="sm:col-span-1">
                  <FacebookSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with Facebook
                </div>
              </button>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100">
                <div className="sm:col-span-1">
                  <GoogleSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with Google
                </div>
              </button>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100">
                <div className="sm:col-span-1">
                  <LinkedInSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with LinkedIn
                </div>
              </button>
              <button
                className="sm:w-2/3 sm:h-[48px] bg-[#005555] text-white sm:text-xl font-semibold rounded-xl hover:-translate-y-1 transition duration-100"
                onClick={handleSubmitSignup(onRegisterSubmit)}
              >
                Sign up
              </button>
              <div className="flex sm:gap-x-1">
                <div className="sm:text-lg">Already have an account?</div>
                <div
                  className="sm:text-lg text-blue-500 font-semibold hover:cursor-pointer hover:underline"
                  onClick={() => {
                    setIsRegisterModalOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Login Modal */}
        <Modal
          open={isLoginModalOpen}
          onCancel={() => setIsLoginModalOpen(false)}
          onOk={() => setIsLoginModalOpen(false)}
          footer={<></>}
          className="sm:!w-[60svw]"
        >
          <div className="relative grid grid-cols-10">
            <div className="col-span-6 sm:h-[70svh] sm:px-12 sm:py-16 flex flex-col items-center justify-center sm:gap-y-6">
              <input
                type="text"
                className="sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100"
                placeholder="Username"
                {...registerLogin("username", { required: true })}
              />
              <input
                type="password"
                className="sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100"
                placeholder="Password"
                {...registerLogin("password", { required: true })}
              />
              <div className="flex sm:w-2/3 sm:gap-x-2">
                <div className="sm:w-[45%] sm:h-[1px] bg-black self-center" />
                <div>Or</div>
                <div className="sm:w-[45%] sm:h-[1px] bg-black self-center" />
              </div>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#005555] transition delay-100">
                <div className="sm:col-span-1">
                  <FacebookSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with Facebook
                </div>
              </button>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100">
                <div className="sm:col-span-1">
                  <GoogleSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with Google
                </div>
              </button>
              <button className="sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100">
                <div className="sm:col-span-1">
                  <LinkedInSVG />
                </div>
                <div className="sm:col-span-6 text-[16px] self-center">
                  Continue with LinkedIn
                </div>
              </button>
              <button
                className="sm:w-2/3 sm:h-[48px] bg-[#005555] text-white sm:text-xl font-semibold rounded-xl hover:-translate-y-1 transition duration-100"
                onClick={handleSubmitLogin(onLoginSubmit)}
              >
                Login
              </button>
              <div className="flex sm:gap-x-1">
                <div className="sm:text-lg">Don't have an account?</div>
                <div
                  className="sm:text-lg text-blue-500 font-semibold hover:cursor-pointer hover:underline"
                  onClick={() => {
                    setIsLoginModalOpen(false);
                    setIsRegisterModalOpen(true);
                  }}
                >
                  Register
                </div>
              </div>
            </div>
            <div className="bg-[#012433] col-span-4 sm:h-[70svh] rounded-e-lg flex flex-col justify-center sm:gap-y-4 sm:px-8">
              <div className="text-white sm:text-3xl font-semibold">
                Welcome back
              </div>
              <div className="divider sm:h-[4px] sm:w-[50%] rounded-full bg-[#005555]" />
              <div className="text-white sm:text-lg font-semibold">
                Login to keep track of your searches
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
