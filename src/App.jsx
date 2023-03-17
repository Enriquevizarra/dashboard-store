// * components
import { Sidebar } from "./components/shared/Sidebar";
// * Icons
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
} from "react-icons/ri";
// * css
import "./index.css";
import { useState } from "react";
// * images
import { Car } from "./components/shared/Car";
import { Header } from "./components/shared/Header";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toogleShowOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2" onClick={toogleShowOrder}>
          <RiPieChartLine />
        </button>
        <button className="text-white p-2" onClick={toogleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-10">
        <div className="lg:col-span-5 xl:col-span-6 2xl:col-span-7 md:p-8 p-4 lg:p-2 ">
          {/* header  */}
          <Header />
        </div>
      </main>
    </div>
  );
}

export default App;
