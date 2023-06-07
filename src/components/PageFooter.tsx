import { FunctionComponent } from "react";

const PageFooter: FunctionComponent = () => {
  return (
    <div className="absolute top-[225px] left-[0px] bg-gray-200 w-[1280px] h-[97px] overflow-hidden text-left text-3xs text-silver-200 font-inter">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37px] left-[1216px] w-6 h-6 overflow-hidden">
        <img
          className="absolute h-[81.32%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[10.35%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37px] left-[1172px] w-6 h-6 overflow-hidden">
        <img
          className="absolute h-[66.68%] w-[87.5%] top-[16.67%] right-[6.24%] bottom-[16.65%] left-[6.26%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37px] left-[1128px] w-6 h-6 overflow-hidden">
        <img
          className="absolute h-[70.83%] w-[87.17%] top-[16.67%] right-[6.42%] bottom-[12.5%] left-[6.42%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37px] left-[1084px] w-6 h-6 overflow-hidden">
        <img
          className="absolute h-[83.34%] w-[83.34%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37px] left-[1040px] w-6 h-6 overflow-hidden">
        <img
          className="absolute h-[83.13%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.54%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
      </button>
      <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_576px)] mix-blend-normal">
        This page was last modified on 17 April 2023, at 09:41.
      </div>
    </div>
  );
};

export default PageFooter;
