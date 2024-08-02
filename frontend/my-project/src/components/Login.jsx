import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-5">
                <label htmlFor="email" className="ml-3 text-2xl text-slate-500">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  id="email"
                  className=" w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="ml-3 text-2xl text-slate-500"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
                  className=" w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button
                  // to="/"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                {/* {navigate("/")} */}
                <h3>
                  Not registered?{" "}
                  <Link to="/signup" className="text-blue-500 underline">
                    Signup
                  </Link>
                </h3>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
