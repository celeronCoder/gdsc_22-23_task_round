import { Logo } from "./Logo";
import { AiOutlineUser } from "react-icons/ai";
import { BiRecycle } from "react-icons/bi";
import { FiTag } from "react-icons/fi";

export function Navbar() {
  return (
    <div className="h-24 px-10 flex items-center justify-between">
      <div className="flex items-center justify-between gap-20">
        <Logo />
        <div className="flex gap-10 mt-1 items-center justify-center text-md font-thin">
          <p className="cursor-pointer select-none font-thin">Marketplace</p>
          <p className="cursor-pointer select-none font-thin">Stats</p>
          <p className="cursor-pointer select-none font-thin">Resources</p>
          <p className="cursor-pointer select-none font-thin">Create</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-20">
        <div className="flex items-center justify-center gap-10">
          <AiOutlineUser className="cursor-pointer" size={22} />
          <BiRecycle className="cursor-pointer" size={22} />
          <div className="cursor-pointer flex items-center gap-2 select-none">
            <FiTag size={22} />
            50.00
          </div>
        </div>
        <div>
          <button className="select-none py-1 px-4 border-2 bg-transparent outline-none rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
