import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BREADCRUMBS: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-left text-xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[3px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[371px] left-[calc(50%_-_241px)] bg-gray-200 w-[482px] h-[90px] overflow-hidden">
        <div className="absolute top-[3px] left-[84px] w-[30px] h-[30px] overflow-hidden" />
        <div className="absolute top-[3px] left-[187px] w-[30px] h-[30px] overflow-hidden">
          <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
        </div>
        <div className="absolute top-[3px] left-[321px] w-[30px] h-[30px] overflow-hidden" />
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_131px)] mix-blend-normal">
          How to play
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_25px)] mix-blend-normal">
          Military
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_157px)] mix-blend-normal">{`>`}</div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_1px)] mix-blend-normal">{`>`}</div>
        <img
          className="absolute h-[18.89%] w-[4.15%] top-[40%] right-[86.31%] bottom-[41.11%] left-[9.54%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector5.svg"
        />
      </div>
    </div>
  );
};

export default BREADCRUMBS;
