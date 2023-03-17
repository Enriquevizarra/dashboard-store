import { Data } from "../../Data";

import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function TypeDish(props) {
  const { selectTypeDish } = props;

  const [dataDish, setdataDish] = useState(Data[0]);

  useEffect(() => {
    setdataDish(Data[selectTypeDish]);
  }, [selectTypeDish]);

  return (
    <div>
      <div className="flex item-center justify-between mb-16">
        <h2 className="text-xl text-gray-300 ">{dataDish.title}</h2>
        <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
          <RiArrowDownSLine /> Dine in
        </button>
      </div>
      <div className="p-8 pb-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {dataDish.dishes.map((dish) => (
          <Card
            key={dish.id}
            img={dish.img}
            description={dish.description}
            price={dish.price}
            inventory={dish.inventory}
          />
        ))}
      </div>
    </div>
  );
}

export { TypeDish };
