import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex gap-6 p-1 mt-4 ">

      <div className="form-control">
        <label className={`lable gap-3 cursor-pointer`}>
          <span className="lable-text">Male</span>
          <input type=" checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
        <div className="form-control">
        <label className={`lable gap-2 cursor-pointer`}>
          <span className="lable-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
