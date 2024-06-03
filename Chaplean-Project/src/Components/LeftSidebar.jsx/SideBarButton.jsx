import checkbox from "../../assets/images/checkbox.png";
import socialmedia from "../../assets/images/socialmedia.png";

const SideBarButton = () => {
  return (
    <div className="w-full bg-gray-600 rounded-xl border-primaryBlue border ">
      <div className="flex items-center justify-between py-3 px-2  rounded-xl ">
        <div className="flex items-center justify-between gap-4">
          <div className="w-6 h-6 flex items-center">
            <img
              src={socialmedia}
              alt="socialMedia"
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="font-poppins text-xs text-white">
            <h2 className="font-bold">Chaplean App</h2>
            <p className="text-xs">Social media platform</p>
          </div>
        </div>
        <div className="w-8 h-8 cursor-pointer">
          <img src={checkbox} />
        </div>
      </div>
    </div>
  );
};

export default SideBarButton;
