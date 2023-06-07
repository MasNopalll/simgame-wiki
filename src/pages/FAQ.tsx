import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccordionContainer from "../components/AccordionContainer";

const FAQ: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2388px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[30px] left-[866px]">variasi 1</b>
      <b className="absolute top-[811px] left-[852px]">variasi 2</b>
      <b className="absolute top-[1577px] left-[849px]">variasi 3</b>
      <b className="absolute top-[1374px] left-[1179px] inline-block text-left w-[68px]">
        3
      </b>
      <img
        className="absolute top-[0px] left-[50px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[146px] left-[50px] bg-gray-200 w-[1280px] h-[635px] overflow-hidden text-left text-6xl">
        <b className="absolute top-[40px] left-[40px] flex items-center w-[349px] h-7">
          Frequently asked question
        </b>
        <div className="absolute top-[635.5px] left-[39.5px] box-border w-[1201px] h-px border-t-[1px] border-solid border-gainsboro" />
        <button className="cursor-pointer pt-[39px] px-[19px] pb-0 bg-gray-100 absolute top-[109px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[682px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_+_7.5px)] left-[calc(50%_+_521.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(-90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">{`>`}</div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-semibold font-inter text-white text-left mix-blend-normal z-[1]">
            How can I increase my population in Utopia?
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[270px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[619px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">{`>`}</div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            What is the best way to grow my kingdom in Utopia?
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[392px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[521px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">{`>`}</div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            How do I manage my resources effectively for growth in Utopia?
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[331px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-end gap-[448px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">{`>`}</div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            What are the most important buildings to construct for growth in
            Utopia?
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[453px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-end gap-[515px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">{`>`}</div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            What are the key strategies for expanding my territory in Utopia?
          </div>
        </button>
        <div className="absolute top-[170px] left-[40px] bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden flex flex-col py-[11px] px-[19px] items-start justify-start text-lg border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_22px)] left-[calc(50%_-_553.5px)] inline-block w-[1076px] mix-blend-normal z-[0]">
            Overall, increasing your population in Utopia requires a combination
            of strategies, such as constructing housing, researching population
            technologies, developing infrastructure, participating in events,
            and keeping your citizens happy.
          </div>
        </div>
      </div>
      <div className="absolute top-[1708px] left-[50px] bg-gray-200 w-[1280px] h-[635px] overflow-hidden text-left text-6xl">
        <b className="absolute top-[40px] left-[40px] flex items-center w-[349px] h-7">
          Frequently asked question
        </b>
        <div className="absolute top-[635.5px] left-[39.5px] box-border w-[1201px] h-px border-t-[1px] border-solid border-gainsboro" />
        <button className="cursor-pointer py-5 px-[19px] bg-gray-100 absolute top-[109px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[689px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_550.5px)] text-lg font-semibold font-inter text-white text-left mix-blend-normal z-[0]">
            How can I increase my population in Utopia?
          </div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_12.5px)] left-[calc(50%_+_528.5px)] text-xl font-extrabold font-inter text-white text-left mix-blend-normal z-[1]">
            -
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[270px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[619px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[16px] text-lg font-inter text-white text-left mix-blend-normal z-[0]">
            What is the best way to grow my kingdom in Utopia?
          </div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[10px] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[1]">
            +
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[392px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-start gap-[521px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_0.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">
            +
          </div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            How do I manage my resources effectively for growth in Utopia?
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[331px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-end gap-[448px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[0]">
            What are the most important buildings to construct for growth in
            Utopia?
          </div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_0.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[1]">
            +
          </div>
        </button>
        <button className="cursor-pointer pt-[25px] px-4 pb-3 bg-gray-100 absolute top-[453px] left-[40px] box-border w-[1139px] h-[61px] overflow-hidden flex flex-row items-center justify-end gap-[515px] border-[1px] border-solid border-darkslategray-200">
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_0.5px)] left-[calc(50%_+_545.5px)] text-xl font-extrabold font-inter text-white text-left [transform:_rotate(90deg)] [transform-origin:0_0] mix-blend-normal z-[0]">
            +
          </div>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_10.5px)] left-[calc(50%_-_553.5px)] text-lg font-inter text-white text-left mix-blend-normal z-[1]">
            What are the key strategies for expanding my territory in Utopia?
          </div>
        </button>
        <div className="absolute top-[170px] left-[40px] bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden flex flex-col py-[11px] px-[19px] items-start justify-start text-lg border-[1px] border-solid border-darkslategray-200">
          <div className="relative inline-block w-[1076px] mix-blend-normal">
            Overall, increasing your population in Utopia requires a combination
            of strategies, such as constructing housing, researching population
            technologies, developing infrastructure, participating in events,
            and keeping your citizens happy.
          </div>
        </div>
      </div>
      <AccordionContainer />
    </div>
  );
};

export default FAQ;
