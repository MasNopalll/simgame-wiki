import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start gap-[308px] text-left text-xl text-silver-100 font-inter">
      <img
        className="relative w-[75px] h-[63px] overflow-hidden shrink-0 cursor-pointer z-[0]"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute my-0 mx-[!important] top-[calc(50%_-_45px)] left-[0px] bg-gray-200 w-[1200px] h-[90px] overflow-hidden shrink-0 z-[1]">
        <div className="absolute top-[3px] left-[132px] w-[30px] h-[30px] overflow-hidden" />
        <div className="absolute top-[3px] left-[426px] w-[30px] h-[30px] overflow-hidden">
          <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
        </div>
        <div className="absolute top-[3px] left-[800px] w-[30px] h-[30px] overflow-hidden" />
        <img
          className="absolute top-[calc(50%_-_34px)] left-[40px] w-[86px] h-[69px] object-cover"
          alt=""
          src="/utopialogo-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_118px)] mix-blend-normal">
          Home
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_49px)] mix-blend-normal">
          Tutorial
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_35px)] mix-blend-normal">
          Glossary
        </div>
        <div className="absolute top-[0px] left-[718px] bg-gray-200 w-[482px] h-[90px] overflow-hidden text-white">
          <div className="absolute top-[3px] left-[84px] w-[30px] h-[30px] overflow-hidden" />
          <div className="absolute top-[3px] left-[187px] w-[30px] h-[30px] overflow-hidden">
            <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
          </div>
          <div className="absolute top-[3px] left-[321px] w-[30px] h-[30px] overflow-hidden" />
          <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_206px)] rounded-3xs bg-darkslategray-200 w-[412px] h-[50px]" />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_188px)] mix-blend-normal">
            |
          </div>
          <img
            className="absolute top-[33px] left-[404px] w-6 h-6 overflow-hidden"
            alt=""
            src="/tablersearch.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
