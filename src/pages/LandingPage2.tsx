import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LabelContainer from "../components/LabelContainer";
import LandingPageContainer from "../components/LandingPageContainer";

const LandingPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2176px] overflow-hidden text-right text-77xl text-white font-inter">
      <div className="absolute top-[184px] left-[0px] bg-gray-200 w-[1199px] h-[558px] overflow-hidden text-center">
        <b className="absolute top-[100px] left-[calc(50%_-_304.5px)] text-left">
          UTOPIA WIKI
        </b>
        <div className="absolute top-[236px] left-[calc(50%_-_304.5px)] text-xl tracking-[0.1em] font-light inline-block w-[609px] h-[114px]">
          Welcome to Utopia, a world like no other, full of war, intrigue,
          strategy and diplomacy!
        </div>
        <div className="absolute top-[310px] left-[calc(50%_-_111.5px)] w-56 h-10 text-smi text-lavender">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkblue w-[106px] h-10" />
          <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_99px)] flex items-center justify-center w-[79px] h-[23.45px]">
            Get Started
          </b>
          <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_22px)] flex items-center justify-center w-[90px] h-[23px]">{`Learn more ->`}</b>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <LabelContainer
        dimensions="/materialsymbolsstrategy1.svg"
        dimensionsId="/materialsymbolsstrategy2.svg"
      />
      <b className="absolute top-[63px] left-[788px]">variasi 1</b>
      <LandingPageContainer />
      <b className="absolute top-[1008px] left-[781px]">variasi 2</b>
      <LabelContainer
        dimensions="/materialsymbolsstrategy1.svg"
        dimensionsId="/materialsymbolsstrategy2.svg"
        frame5Top="1687px"
        frame5Width="1200px"
        propLeft="416px"
        propLeft1="787px"
      />
    </div>
  );
};

export default LandingPage2;
