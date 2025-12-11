import React from "react";
import GenderCheckBox from "./GenderCheckBox";

export default function Signup() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4">
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 text-white">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Create Account
        </h2>

        {/* Full Name */}
        <form action="">
          <label className="form-control w-full mb-5">
            <div className="label my-2">
              <span className="label-text text-white/90">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="your full name"
              className="px-2 py-0.5 rounded-s-sm input input-bordered w-full bg-[#0E1A29] border-gray/50 text-white placeholder-white/60 backdrop-blur-md"
            />
          </label>

          {/* Username */}
          <label className="form-control w-full mb-5">
            <div className="label my-2">
              <span className="label-text text-white/90">Username</span>
            </div>
            <input
              type="text"
              placeholder="choose a username"
              className="px-2 py-0.5 rounded-s-sm input input-bordered w-full bg-[#0E1A29] border-gray/50 text-white placeholder-white/60 backdrop-blur-md"
            />
          </label>

          {/* Password */}
          <label className="form-control w-full mb-5">
            <div className="label my-2">
              <span className="label-text text-white/90">Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="px-2 py-0.5 rounded-s-sm input input-bordered w-full bg-[#0E1A29] border-gray/50 text-white placeholder-white/60 backdrop-blur-md"
            />
          </label>

          {/* Confirm Password */}
          <label className="form-control w-full mb-6">
            <div className="label my-2">
              <span className="label-text text-white/90">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="px-2 py-0.5 rounded-s-sm input input-bordered w-full bg-[#0E1A29] border-gray/50 text-white placeholder-white/60 backdrop-blur-md"
            />
          </label>

          <GenderCheckBox></GenderCheckBox>

          {/* Signup Button */}
          <button className="mt-4 px-2 py-0.5 rounded-s-sm btn btn-primary w-full font-semibold bg-[#0E1A29] border-gray/50 hover:bg-orange-600 transition cursor-pointer">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/70 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Login Link */}
          <p className="text-center text-white/80">
            Already have an account?{" "}
            <button className="text-orange-300 hover:text-orange-400 font-medium transition cursor-pointer">
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
