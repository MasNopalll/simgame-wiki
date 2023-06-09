import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UtopiaWikiContainer from "../components/UtopiaWikiContainer";
import LabelContainer from "../components/LabelContainer";
import FooterComp from "../components/FooterComponent";

const LandingPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2197px] overflow-hidden text-right text-77xl text-white font-inter">
      <div className="absolute top-[184px] left-[50px] bg-gray-200 w-[1280px] h-[558px] overflow-hidden text-center">
        <b className="absolute top-[100px] left-[calc(50%_-_305px)] text-left">
          UTOPIA WIKI
        </b>
        <div className="absolute top-[236px] left-[calc(50%_-_305px)] text-xl tracking-[0.1em] font-light inline-block w-[609px] h-[114px]">
          Welcome to Utopia, a world like no other, full of war, intrigue,
          strategy and diplomacy!
        </div>
        <div className="absolute top-[310px] left-[calc(50%_-_112px)] w-56 h-10 text-smi text-lavender">
          <button className="cursor-pointer [border:none] p-0 bg-blueviolet-100 absolute top-[0px] left-[0px] rounded-8xs w-[106px] h-10 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]" />
          <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_99px)] flex items-center justify-center w-[79px] h-[23.45px]">
            Get Started
          </b>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_+_22px)] text-smi font-bold font-inter text-lavender text-center flex items-center justify-center w-[90px] h-[23px]">{`Learn more ->`}</button>
        </div>
      </div>
      <b className="absolute top-[30px] left-[790px]">variasi 1</b>
      <b className="absolute top-[1008px] left-[739px]">variasi 2</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <UtopiaWikiContainer />
      <LabelContainer
        dimensions="/materialsymbolsstrategy3.svg"
        dimensionsId="/materialsymbolsstrategy4.svg"
        frame5Top="742px"
        frame5Width="1280px"
        propLeft="443px"
        propLeft1="840px"
      />
      <LabelContainer
        dimensions="/materialsymbolsstrategy5.svg"
        dimensionsId="/materialsymbolsstrategy4.svg"
        frame5Top="1687px"
        frame5Width="1280px"
        propLeft="443px"
        propLeft1="840px"
        
      />
      
    </div>
  );
};

export default LandingPage1;
