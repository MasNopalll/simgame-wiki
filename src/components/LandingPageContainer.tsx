import { FunctionComponent } from "react";

const LandingPageContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[1129px] left-[0px] bg-gray-200 w-[2197px] h-[558px] overflow-hidden text-left text-77xl text-white font-inter">
      <b className="absolute top-[58px] left-[65px]">UTOPIA WIKI</b>
      <div className="absolute top-[216px] left-[65px] text-xl tracking-[0.1em] font-light inline-block w-[609px] h-[114px]">
        Welcome to Utopia, a world like no other, full of war, intrigue,
        strategy and diplomacy!
      </div>
      <div className="absolute top-[310px] left-[65px] w-56 h-10 text-center text-smi text-lavender">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-blueviolet-100 w-[106px] h-10" />
        <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_99px)] flex items-center justify-center w-[79px] h-[23.45px]">
          Get Started
        </b>
        <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_22px)] flex items-center justify-center w-[90px] h-[23px]">{`Learn more ->`}</b>
      </div>
      <img
        className="absolute top-[128px] left-[724px] w-[423px] h-[290px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default LandingPageContainer;
