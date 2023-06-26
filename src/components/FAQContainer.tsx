import { FunctionComponent } from "react";

type FAQContainerType = {
  sectionTitle?: string;
};

const FAQContainer: FunctionComponent<FAQContainerType> = ({
  sectionTitle,
}) => {
  return (
    <div className="absolute top-[123px] left-[267px] bg-gray-200 w-[482px] h-[90px] overflow-hidden text-left text-xs text-white font-inter">
      <div className="absolute top-[3px] left-[84px] w-[30px] h-[30px] overflow-hidden" />
      <div className="absolute top-[3px] left-[187px] w-[30px] h-[30px] overflow-hidden">
        <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
      </div>
      <div className="absolute top-[3px] left-[321px] w-[30px] h-[30px] overflow-hidden" />
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_128px)] mix-blend-normal">
        {sectionTitle}
      </div>
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_154px)] mix-blend-normal">
        /
      </div>
      <img
        className="absolute h-[18.89%] w-[4.15%] top-[33.33%] right-[86.31%] bottom-[47.78%] left-[9.54%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector5.svg"
      />
    </div>
  );
};

export default FAQContainer;
