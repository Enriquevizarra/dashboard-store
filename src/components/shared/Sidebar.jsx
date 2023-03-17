// * remixi icon import
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
  RiStore3Line,
} from "react-icons/ri";

function Sidebar(props) {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 trasition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li className="">
            <div
              className=" uppercase font-bold py-5 flex justify-center  bg-[#262837] text-[#ec7c6a] rounded-full w-20 h-20 relative mb-5
              transition hover:-translate-y-2 ease-out delay-150
              hover:bg-[#ec7c6a] hover:text-white
              
              "
            >
              <RiStore3Line
                className="
                text-4xl
                absolute
                top-2
                left-2
                "
              />
              <span
                className="
                text-2xl
                absolute
                bottom-2 right-2
                "
              >
                RB
              </span>
            </div>
          </li>
          {/* *!!icons  */}

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiHome6Line className="text-2xl " />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl " />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Sidebar };
