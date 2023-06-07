import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ContentList1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onChooseRaceAndClick = useCallback(() => {
    navigate("/content-list1");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/content-list1");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-left text-mini text-silver-100 font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[53px] left-[592px] bg-gray-200 w-[270px] h-[700px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_317px)] left-[calc(50%_-_115px)] mix-blend-normal">
          Overview
        </div>
        <div className="absolute top-[calc(50%_-_284px)] left-[calc(50%_-_115px)] mix-blend-normal">
          Combo Selection
        </div>
        <div
          className="absolute top-[calc(50%_-_251px)] left-[calc(50%_-_115px)] mix-blend-normal cursor-pointer"
          onClick={onChooseRaceAndClick}
        >
          Choose Race and Personality
        </div>
        <div className="absolute top-[calc(50%_-_218px)] left-[calc(50%_-_88px)] mix-blend-normal">
          Personality
        </div>
        <div className="absolute top-[calc(50%_-_189px)] left-[calc(50%_-_88px)] mix-blend-normal">
          Race
        </div>
        <div className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_88px)] mix-blend-normal">
          Most common combination
        </div>
        <div className="absolute top-[calc(50%_-_127px)] left-[calc(50%_-_115px)] mix-blend-normal">
          How to play
        </div>
        <div
          className="absolute top-[103px] left-[258px] [transform:_rotate(90deg)] [transform-origin:0_0] cursor-pointer"
          onClick={onTextClick}
        >{`>`}</div>
        <div className="absolute top-[223px] left-[244px]">{`>`}</div>
      </div>
      <div className="absolute top-[54.5px] left-[861.5px] box-border w-px h-[698px] border-r-[1px] border-solid border-darkgray" />
    </div>
  );
};

export default ContentList1;
