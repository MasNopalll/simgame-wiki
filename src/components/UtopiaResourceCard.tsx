import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type UtopiaResourceCardType = {
  utopiaGrowthQuestions?: string;

  /** Style props */
  propTop?: Property.Top;
};

const UtopiaResourceCard: FunctionComponent<UtopiaResourceCardType> = ({
  utopiaGrowthQuestions,
  propTop,
}) => {
  const frameButtonStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[270px] left-[40px] w-[1139px] h-[61px] overflow-hidden"
      style={frameButtonStyle}
    >
      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_550.5px)] text-lg font-inter text-white text-left mix-blend-normal">
        {utopiaGrowthQuestions}
      </div>
      <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_+_525.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal">{`>`}</div>
      <div className="absolute top-[60px] left-[18px] box-border w-[1080px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
    </button>
  );
};

export default UtopiaResourceCard;
