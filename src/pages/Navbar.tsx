import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-left text-xl text-white font-inter">
      <div className="absolute top-[calc(50%_-_45px)] left-[75px] bg-gray-200 w-[1200px] h-[90px] overflow-hidden">
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
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_118px)] text-xl font-inter text-silver-100 text-left inline-block mix-blend-normal">
          Home
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_49px)] text-xl font-inter text-silver-100 text-left inline-block mix-blend-normal">
          Tutorial
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_+_35px)] text-xl font-inter text-silver-100 text-left inline-block mix-blend-normal">
          Glossary
        </button>
        <div className="absolute top-[0px] left-[718px] bg-gray-200 w-[482px] h-[90px] overflow-hidden">
          <div className="absolute top-[3px] left-[84px] w-[30px] h-[30px] overflow-hidden" />
          <div className="absolute top-[3px] left-[187px] w-[30px] h-[30px] overflow-hidden">
            <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
          </div>
          <div className="absolute top-[3px] left-[321px] w-[30px] h-[30px] overflow-hidden" />
          <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_206px)] rounded-3xs bg-darkslategray-200 w-[412px] h-[50px]" />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_188px)] mix-blend-normal">
            Search...
          </div>
          <img
            className="absolute top-[33px] left-[404px] w-6 h-6 overflow-hidden"
            alt=""
            src="/tablersearch.svg"
          />
        </div>
      </div>
      <img
        className="absolute bottom-[769px] left-[3px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
    </div>
  );
};

export default Navbar;
