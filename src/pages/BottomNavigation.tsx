import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/PageFooter";

const BottomNavigation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-right text-77xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[3px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <PageFooter />
      <div className="absolute top-[499px] left-[0px] bg-gray-200 w-[1280px] h-[97px] overflow-hidden text-left text-3xs text-silver-200">
        <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_576px)] mix-blend-normal">
          This page was last modified on 17 April 2023, at 09:41.
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_293px)] text-xs font-inter text-silver-200 text-left inline-block mix-blend-normal">
          About
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_461px)] text-xs font-inter text-silver-200 text-left inline-block mix-blend-normal">
          Licensing
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_355px)] text-xs font-inter text-silver-200 text-left inline-block mix-blend-normal">
          Privacy Policy
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_542px)] text-xs font-inter text-silver-200 text-left inline-block mix-blend-normal">
          Contact Us
        </button>
      </div>
      <b className="absolute top-[95px] left-[866px]">variasi 1</b>
      <b className="absolute top-[354px] left-[866px]">variasi 2</b>
    </div>
  );
};

export default BottomNavigation;
