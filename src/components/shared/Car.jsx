import { RiCloseLine,
         RiDeleteBin6Line } from "react-icons/ri";

import areopuerto from "../../assets/areopuerto.png" 
function Car(props) {

  const { showOrder, setShowOrder } = props
  return (
    <div
          className={`lg:col-span-2  fixed lg:right-0 lg:w-96 top-0 bg-[#1F1D2B] w-full h-full transition-all ${showOrder ? "right-0 z-10" : "-right-full"}`
          }
        >
          {/* orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseLine 
              className="lg:hidden absolute left-4 top-4 p-3 box-content  bg-[#262837] rounded-full text-xl"
              onClick={() => {
                setShowOrder(!showOrder)
              }}
            />
            {/* orders  */}
            <h1
              className="text-2xl my-4"
            >Orders #151416</h1>
            {/* botones  */}
            <div
              className="flex items-center gap-4 flex-wrap mb-8"
            >
              <button
                className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl"
              >
                Dine in
              </button>
              <button
                className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500"
              >
                To Go
              </button>
              <button
                className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500"
              >
                Delivery
              </button>
            </div>
            {/* car  */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* product  */}
              <div className=" h-[400px] md:h-[440px] lg:h-[400px] xl:h-[440px] 2xl:h-[440px] overflow-y-auto  pb-10">
                
                <div className="bg-[#262837] p-4 rounded-xl mb-4  ">
                  <div
                    className="grid grid-cols-6 mb-4"
                  >
                    {/* description product  */}
                    <div
                      className="col-span-4 flex items-center gap-2"
                    >
                      <img 
                        src={areopuerto}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h5
                          className="text-sm"
                        >Spacy Seasoned sea...</h5>
                        <p
                          className="text-xs text-gray-500"
                        >$2.29</p>
                      </div>
                    </div>
                    {/* qty  */}
                    <div >
                      <span>2</span>
                    </div>
                    {/* price  */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* note  */}
                  <div className="grid grid-cols-6 items-center gap-2 justify-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        placeholder="Order note...!"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none"
                      />  
                    </form>
                    <div className="text-center">
                      <button
                        className="border border-red-500 p-2 rounded-lg"
                      >
                        <RiDeleteBin6Line
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div
                    className="grid grid-cols-6 mb-4"
                  >
                    {/* description product  */}
                    <div
                      className="col-span-4 flex items-center gap-2"
                    >
                      <img 
                        src={areopuerto}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h5
                          className="text-sm"
                        >Spacy Seasoned sea...</h5>
                        <p
                          className="text-xs text-gray-500"
                        >$2.29</p>
                      </div>
                    </div>
                    {/* qty  */}
                    <div >
                      <span>2</span>
                    </div>
                    {/* price  */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* note  */}
                  <div className="grid grid-cols-6 items-center gap-2 justify-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        placeholder="Order note...!"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none"
                      />  
                    </form>
                    <div className="text-center">
                      <button
                        className="border border-red-500 p-2 rounded-lg"
                      >
                        <RiDeleteBin6Line
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  </div>

                </div>
  
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div
                    className="grid grid-cols-6 mb-4"
                  >
                    {/* description product  */}
                    <div
                      className="col-span-4 flex items-center gap-2"
                    >
                      <img 
                        src={areopuerto}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h5
                          className="text-sm"
                        >Spacy Seasoned sea...</h5>
                        <p
                          className="text-xs text-gray-500"
                        >$2.29</p>
                      </div>
                    </div>
                    {/* qty  */}
                    <div >
                      <span>2</span>
                    </div>
                    {/* price  */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* note  */}
                  <div className="grid grid-cols-6 items-center gap-2 justify-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        placeholder="Order note...!"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none"
                      />  
                    </form>
                    <div className="text-center">
                      <button
                        className="border border-red-500 p-2 rounded-lg"
                      >
                        <RiDeleteBin6Line
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  </div>

                </div>
  
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div
                    className="grid grid-cols-6 mb-4"
                  >
                    {/* description product  */}
                    <div
                      className="col-span-4 flex items-center gap-2"
                    >
                      <img 
                        src={areopuerto}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h5
                          className="text-sm"
                        >Spacy Seasoned sea...</h5>
                        <p
                          className="text-xs text-gray-500"
                        >$2.29</p>
                      </div>
                    </div>
                    {/* qty  */}
                    <div >
                      <span>2</span>
                    </div>
                    {/* price  */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* note  */}
                  <div className="grid grid-cols-6 items-center gap-2 justify-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        placeholder="Order note...!"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none"
                      />  
                    </form>
                    <div className="text-center">
                      <button
                        className="border border-red-500 p-2 rounded-lg"
                      >
                        <RiDeleteBin6Line
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  </div>

                </div>
  
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div
                    className="grid grid-cols-6 mb-4"
                  >
                    {/* description product  */}
                    <div
                      className="col-span-4 flex items-center gap-2"
                    >
                      <img 
                        src={areopuerto}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h5
                          className="text-sm"
                        >Spacy Seasoned sea...</h5>
                        <p
                          className="text-xs text-gray-500"
                        >$2.29</p>
                      </div>
                    </div>
                    {/* qty  */}
                    <div >
                      <span>2</span>
                    </div>
                    {/* price  */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* note  */}
                  <div className="grid grid-cols-6 items-center gap-2 justify-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        placeholder="Order note...!"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none"
                      />  
                    </form>
                    <div className="text-center">
                      <button
                        className="border border-red-500 p-2 rounded-lg"
                      >
                        <RiDeleteBin6Line
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* submit payment  */}
            <div
                className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full"
              >
                <div
                  className="flex items-center justify-between mb-4"
                >
                  <span className="text-gray-400">Discount</span>
                  <span>$0</span>
                </div>
                <div
                  className="flex items-center justify-between mb-6"
                >
                  <span className="text-gray-400">Subtotal</span>
                  <span>$201.03</span>
                </div>
                <div className="mb-10 pb-4">
                  <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                    Continue to payment
                  </button>
                </div>
            </div>

          </div>

        </div>
  )
}

export { Car }
