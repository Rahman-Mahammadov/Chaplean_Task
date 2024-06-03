const index = ({ heading, text }) => {
  return (
    <div className="bg-gray-600 xl:w-[30%] 900px:w-full   min-[1070px]:w-[46%] max-[900px]:w-[46%] border-2 border-transparent hover:border-primaryBlue duration-500  max-sm:w-full  px-4 py-5 rounded-3xl">
      <h3 className="text-link text-lg mb-3">{heading}</h3>
      <p className="text-text text-[12px]">{text}</p>
    </div>
  );
};

export default index;
