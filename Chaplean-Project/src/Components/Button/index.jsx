const index = (props) => {
  return (
    <div
      className={`${props.bg} text-sm py-1 px-4 rounded-full ${props.color} cursor-pointer whitespace-nowrap duration-300 border border-primaryBlue`}
    >
      {props.text}
    </div>
  );
};

export default index;
