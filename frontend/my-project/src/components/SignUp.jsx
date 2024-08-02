import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-slate-100 ">
        <div id="my_modal_3">
          <div className="modal-box h-92 w-96 border-[2px] p-5 rounded-3xl bg-slate-200 justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-5">
                <label
                  htmlFor="name"
                  className="ml-3 text-sm md:text-2xl text-slate-500"
                >
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  id="email"
                  className="w-full md:w-80 px-3 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="ml-3 text-sm md:text-2xl text-slate-500"
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  id="email"
                  className="w-full md:w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-5 ">
                <label
                  htmlFor="password"
                  className="ml-3 text-sm md:text-2xl  text-slate-500"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
                  className="w-full text-sm md:text-lg md:w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <h3>
                  Already have account?
                  <button className="text-blue-500 underline">Login</button>
                  <Login />
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
