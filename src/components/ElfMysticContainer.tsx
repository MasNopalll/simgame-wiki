import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type MagicContainerType = {
  elfMysticCombinationText?: string;
  elfMysticCombinationText2?: string;

  /** Style props */
  propTop?: Property.Top;
  propColor?: Property.Color;
  propColor1?: Property.Color;
};

const MagicContainer: FunctionComponent<MagicContainerType> = ({
  elfMysticCombinationText,
  elfMysticCombinationText2,
  propTop,
  propColor,
  propColor1,
}) => {
  const warningBlocksStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const kombinasiElfDanStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const tIPSStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="absolute top-[550px] left-[270px] bg-gray-200 w-[832px] h-[236px] overflow-hidden text-left text-lg text-mediumseagreen font-inter"
      style={warningBlocksStyle}
    >
      <div className="absolute top-[calc(50%_-_74px)] left-[calc(50%_-_373px)] bg-gray-100 w-[745px] h-[149px]" />
      <div
        className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_346px)] inline-block w-[692px] h-[88px] mix-blend-normal"
        style={kombinasiElfDanStyle}
      >
        {elfMysticCombinationText}
      </div>
      <div
        className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_346px)] font-semibold mix-blend-normal"
        style={tIPSStyle}
      >
        {elfMysticCombinationText2}
      </div>
    </div>
  );
};

export default MagicContainer;
