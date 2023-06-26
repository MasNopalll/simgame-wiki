import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type SearchContainerType = {
  /** Style props */
  propLeft?: Property.Left;
};

const SearchContainer: FunctionComponent<SearchContainerType> = ({
  propLeft,
}) => {
  const searchbarStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[868px] bg-gray-200 w-[482px] h-[90px] overflow-hidden text-left text-xl text-white font-inter"
      style={searchbarStyle}
    >
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
  );
};

export default SearchContainer;
