function Card(props) {
  const { img, description, price, inventory } = props;
  // *const  {img, description, price, inventory} = props

  return (
    <div className="bg-[#1F1D2B] py-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
      {/* *image  */}
      <img
        src={img}
        alt="pollito"
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      {/* title  */}
      <p className="text-xl">{description}</p>
      {/* price  */}
      <span className="text-gray-400">{price}</span>
      {/* parragraph  */}
      <p className="text-gray-600">{inventory}</p>
    </div>
  );
}

export { Card };
