import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className=" py-1.5 bg-white  border-b border-black/10">
      <div className="w-11/12 mx-auto p-2 flex items-center justify-between">
        <h3 className="text-xl font-arimo wrap-break-word space-x-8 line-clamp-3 antialiased font-bold text-slate-950/80">MyanCharge</h3>

        <div className="flex gap-x-2.5">
          <NavButton placeholder="Read Our Blog" />
          <NavButton placeholder="Contact Us" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
