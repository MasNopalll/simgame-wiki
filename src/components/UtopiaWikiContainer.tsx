import { FunctionComponent } from "react";

const UtopiaWikiContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[1130px] left-[50px] bg-gray-200 w-[1280px] h-[558px] overflow-hidden text-left text-77xl text-white font-inter">
      <b className="absolute top-[58px] left-[37px]">UTOPIA WIKI</b>
      <div className="absolute top-[216px] left-[37px] text-xl tracking-[0.1em] font-light inline-block w-[609px] h-[114px]">
        Welcome to Utopia, a world like no other, full of war, intrigue,
        strategy and diplomacy!
      </div>
      <div className="absolute top-[310px] left-[37px] w-56 h-10 text-center text-smi text-lavender">
        <button className="cursor-pointer [border:none] p-0 bg-blueviolet-100 absolute top-[0px] left-[0px] rounded-8xs w-[106px] h-10 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]" />
        <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_99px)] flex items-center justify-center w-[79px] h-[23.45px]">
          Get Started
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_+_22px)] text-smi font-bold font-inter text-lavender text-center flex items-center justify-center w-[90px] h-[23px]">{`Learn more ->`}</button>
      </div>
      <img
        className="absolute top-[128px] left-[754px] w-[423px] h-[290px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default UtopiaWikiContainer;
