import vector from "../../assets/images/Vector.png";
import text from "../../assets/images/text.png";
const Logo = () => {
  return (
    <div className="z-20">
      
      <div className="flex gap-2" id="logo">
        <img src={vector} alt="Chaplean" width={50} height={40} />
        <img src={text} alt="" />
      </div>
    </div>
  );
};

export default Logo;
