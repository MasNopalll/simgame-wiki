import { FunctionComponent } from "react";

const NavigationContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1280px] h-[90px] overflow-hidden text-left text-xl text-silver-100 font-inter">
      <div className="absolute top-[3px] left-[137px] w-[30px] h-[30px] overflow-hidden" />
      <div className="absolute top-[3px] left-[453px] w-[30px] h-[30px] overflow-hidden">
        <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
      </div>
      <div className="absolute top-[3px] left-[853px] w-[30px] h-[30px] overflow-hidden" />
      <img
        className="absolute top-[calc(50%_-_34px)] left-[40px] w-[86px] h-[69px] object-cover"
        alt=""
        src="/utopialogo-1@2x.png"
      />
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_112px)] mix-blend-normal">
        Home
      </div>
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_38px)] mix-blend-normal">
        Tutorial
      </div>
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_51px)] mix-blend-normal">
        Glossary
      </div>
    </div>
  );
};

export default NavigationContainer;
