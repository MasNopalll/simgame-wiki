import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterContainerType = {
  productId?: string;

  /** Style props */
  propTop?: Property.Top;
};

const FooterContainer: FunctionComponent<FooterContainerType> = ({
  productId,
  propTop,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[823px] left-[20px] bg-gray-200 w-[1469px] h-[97px] overflow-hidden text-left text-3xs text-silver-200 font-inter"
      style={footerStyle}
    >
      <img
        className="absolute top-[37px] left-[1367px] w-6 h-6 overflow-hidden"
        alt=""
        src="/mdigithub.svg"
      />
      <img
        className="absolute top-[37px] left-[1323px] w-6 h-6 overflow-hidden"
        alt=""
        src="/icbaselinediscord.svg"
      />
      <img
        className="absolute top-[37px] left-[1279px] w-6 h-6 overflow-hidden"
        alt=""
        src="/mditwitter.svg"
      />
      <img
        className="absolute top-[37px] left-[1235px] w-6 h-6 overflow-hidden"
        alt=""
        src={productId}
      />
      <img
        className="absolute top-[37px] left-[1191px] w-6 h-6 overflow-hidden"
        alt=""
        src="/icbaselinefacebook.svg"
      />
      <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_651.5px)] mix-blend-normal">
        This page was last modified on 17 April 2023, at 09:41.
      </div>
    </div>
  );
};

export default FooterContainer;
