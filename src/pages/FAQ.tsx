import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccordionContainer from "../components/AccordionContainer";
import AccordionCom from "../components/AccordionComponent";

const FAQ: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2388px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[30px] left-[866px]">variasi 1</b>
      <b className="absolute top-[811px] left-[852px]">variasi 2</b>
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
        <AccordionCom />
      </div>
      <div className="absolute top-[937px] left-[50px] bg-gray-200 w-[1280px] h-[635px] overflow-hidden text-left text-6xl">
        <AccordionCom />
      </div>
    </div>
  );
};

export default FAQ;
