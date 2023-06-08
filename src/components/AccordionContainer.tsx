import { FunctionComponent } from "react";
import UtopiaResourceCard from "./UtopiaResourceCard";
import AccordionCom from "./AccordionComponent";

const AccordionContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[927px] left-[50px] bg-gray-200 w-[1280px] h-[635px] overflow-hidden text-left text-6xl text-white font-inter">
      <b className="absolute top-[40px] left-[40px] flex items-center w-[349px] h-7">
        Frequently asked question
      </b>
      <div className="absolute top-[635.5px] left-[39.5px] box-border w-[1201px] h-px border-t-[1px] border-solid border-gainsboro" />
      <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[109px] left-[40px] w-[1139px] h-[61px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_550.5px)] text-lg font-semibold font-inter text-white text-left mix-blend-normal">
          How can I increase my population in Utopia?
        </div>
        <div className="absolute top-[calc(50%_+_6.5px)] left-[calc(50%_+_501.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(-90deg)] [transform-origin:0_0] mix-blend-normal">{`>`}</div>
        <div className="absolute top-[60px] left-[18px] box-border w-[1080px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
      </button>
      <UtopiaResourceCard utopiaGrowthQuestions="What is the best way to grow my kingdom in Utopia?" />
      <UtopiaResourceCard
        utopiaGrowthQuestions="How do I manage my resources effectively for growth in Utopia?"
        propTop="392px"
      />
      <UtopiaResourceCard
        utopiaGrowthQuestions="What are the most important buildings to construct for growth in Utopia?"
        propTop="331px"
      />
      <button className="cursor-pointer [border:none] pt-[25px] px-4 pb-3 bg-gray-200 absolute top-[453px] left-[40px] w-[1139px] h-[61px] overflow-hidden flex flex-row box-border items-center justify-end gap-[515px]">
        <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[0]">
          What are the key strategies for expanding my territory in Utopia?
        </div>
        <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] left-[1095px] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[1]">{`>`}</div>
      </button>
      <div className="absolute top-[170px] left-[40px] bg-gray-200 w-[1139px] h-[100px] overflow-hidden flex flex-col pt-[11px] pb-0 pr-[42px] pl-[19px] box-border items-start justify-end gap-[45px] text-lg">
        <div className="relative inline-block w-[1076px] mix-blend-normal">
          Overall, increasing your population in Utopia requires a combination
          of strategies, such as constructing housing, researching population
          technologies, developing infrastructure, participating in events, and
          keeping your citizens happy.
        </div>
        <div className="relative box-border w-[1080px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
      </div>
      <AccordionCom/>
    </div>
  );
};

export default AccordionContainer;
