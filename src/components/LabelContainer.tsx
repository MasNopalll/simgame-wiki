import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type LabelContainerType = {
  dimensions?: string;
  dimensionsId?: string;

  /** Style props */
  frame5Top?: Property.Top;
  frame5Width?: Property.Width;
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
};

const LabelContainer: FunctionComponent<LabelContainerType> = ({
  dimensions,
  dimensionsId,
  frame5Top,
  frame5Width,
  propLeft,
  propLeft1,
}) => {
  const labelStyle: CSS.Properties = useMemo(() => {
    return {
      top: frame5Top,
      width: frame5Width,
    };
  }, [frame5Top, frame5Width]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[742px] left-[50px] bg-gray-200 w-[1280px] h-[266px] overflow-hidden text-left text-6xl text-white font-inter"
      style={labelStyle}
    >
      <div className="absolute top-[29px] left-[45px] rounded-3xs bg-gray-100 box-border w-[385px] h-[202px] border-[1px] border-solid border-darkslategray-200">
        <img
          className="absolute top-[19px] left-[6.75px] w-[28.95px] h-[30px] overflow-hidden"
          alt=""
          src="/materialsymbolsstrategy.svg"
        />
        <b className="absolute top-[19px] left-[45.35px] flex items-center w-[138.95px]">
          Strategy
        </b>
        <div className="absolute top-[66px] left-[calc(50%_-_185.75px)] text-xl inline-block w-[364.74px] h-[123px] mix-blend-normal">
          Build, explore and research to increase your power. Then use armies,
          thieves and powerful magic to combat your opponents and bring them to
          their knees.
        </div>
      </div>
      <div
        className="absolute top-[29px] left-[416px] rounded-3xs bg-gray-100 box-border w-96 h-[202px] border-[1px] border-solid border-darkslategray-200"
        style={frameDivStyle}
      >
        <img
          className="absolute top-[19px] left-[6.74px] w-[28.87px] h-[30px] overflow-hidden"
          alt=""
          src={dimensions}
        />
        <b className="absolute top-[19px] left-[45.23px] flex items-center w-[138.59px]">
          Teamwork
        </b>
        <div className="absolute top-[66px] left-[calc(50%_-_185.26px)] text-xl inline-block w-[363.79px] h-[123px] mix-blend-normal">
          In Utopia a good team is stronger than the sum of its parts.
          Complement the skills of your team mates to maximize your kingdom's
          glory.
        </div>
      </div>
      <div
        className="absolute top-[29px] left-[786px] rounded-3xs bg-gray-100 box-border w-[390px] h-[202px] border-[1px] border-solid border-darkslategray-200"
        style={frameDiv1Style}
      >
        <img
          className="absolute top-[19px] left-[6.84px] w-[29.32px] h-[30px] overflow-hidden"
          alt=""
          src={dimensionsId}
        />
        <b className="absolute top-[19px] left-[45.94px]">
          Free and in your browser
        </b>
        <div className="absolute top-[66px] left-[calc(50%_-_185.23px)] text-xl inline-block w-[367.52px] h-[123px] mix-blend-normal">
          Utopia is free to play, no downloads are required and you don't need
          to be online all the time to succeed.
        </div>
      </div>
    </div>
  );
};

export default LabelContainer;
