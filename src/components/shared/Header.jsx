// *React Icons
import { RiSearchLine } from "react-icons/ri";
// * Components
import { TypeDish } from "./TypeDish";

// * imagenes de comidas
import { useState } from "react";

function Header() {
  const [selectTypeDish, setSelectTypeDish] = useState(0);

  const handleSelectTypeDish = (value) => {
    setSelectTypeDish(value);
  };

  const today = new Date().toDateString();

  return (
    <header className="">
      {/* title in search  */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl text-gray-300">Resto Bar</h1>
          <p className="text-gray-500">{today}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Seach"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
            />
          </div>
        </form>
        {/* tabs  */}
      </div>
      {/* tabs  */}
      <nav className="text-gray-300 flex items-center gap-2 justify-between border-b mb-6 lg:justify-start lg:gap-8">
        <a
          href="#"
          className={
            selectTypeDish === 0
              ? "py-2 pr-4 relative border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
              : "py-2 pr-4"
          }
          onClick={() => {
            handleSelectTypeDish(0);
          }}
        >
          Hot Dishes
        </a>
        <a
          href="#"
          onClick={() => {
            handleSelectTypeDish(1);
          }}
          className={
            selectTypeDish === 1
              ? "py-2 pr-4 relative border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
              : "py-2 pr-4"
          }
        >
          Cold Dishes
        </a>
        <a
          href="#"
          className={
            selectTypeDish === 2
              ? "py-2 pr-4 relative border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
              : "py-2 pr-4"
          }
          onClick={() => {
            handleSelectTypeDish(2);
          }}
        >
          Soup Dishes
        </a>
        <a
          href="#"
          className={
            selectTypeDish === 3
              ? "py-2 pr-4 relative border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
              : "py-2 pr-4"
          }
          onClick={() => {
            handleSelectTypeDish(3);
          }}
        >
          Grill Dishes
        </a>
      </nav>
      {/* title content */}

      <TypeDish selectTypeDish={selectTypeDish} />
    </header>
  );
}

export { Header };
