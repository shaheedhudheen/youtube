import menu from "../assets/menu.svg";
import youtube from "../assets/youtube.png";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import account from "../assets/account.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 h-14 ">
      <div className=" flex">
        <img src={menu} alt="menu icon" className="w-8" />
        <img src={youtube} alt="youtube icon" className=" w-28 mx-1" />
      </div>

      <div className=" flex items-center">
        <input
          type="text"
          className=" h-6 border px-5 py-4 focus:outline focus:outline-blue-500 rounded-l-2xl w-40 md:w-48 lg:w-96 z-10"
        />
        <button className="rounded-r-2xl border bg-[#f8f8f8]">
          <img src={search} alt="search icon" className="py-1 px-4 " />
        </button>
      </div>

      <div className=" flex gap-6 mx-4 items-center">
        <img src={bell} alt="bell icon" className=" w-6" />
        <img src={account} alt="account icon" className=" w-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
