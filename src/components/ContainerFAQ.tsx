import { FunctionComponent } from "react";
import AccordionCom from "../components/AccordionComponent";

const ContainerFAQ: FunctionComponent = () => {
  return (
    <div className="absolute top-[162px] left-[270px] bg-gray-200 w-[832px] h-[700px] overflow-hidden text-left text-5xl text-white font-inter">
      <div className="absolute top-[256px] left-[40px] w-[74px] h-[29px]">
        <div className="absolute top-[0%] left-[0%] font-semibold hidden">
          Heading 2
        </div>
      </div>
      <div className="absolute top-[40px] left-[40px] w-[102px] h-12 text-27xl">
        <b className="absolute top-[0%] left-[0%]">FAQ</b>
      </div>
      <div className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_376px)] text-lg inline-block w-[759px] h-[115px] mix-blend-normal">
        Berikut daftar pertanyaan yang sering ditanyakan oleh pengguna terkait
        permainan utopia.
      </div>
      <div className="absolute top-[156px] left-[0px] bg-gray-200 w-[815px] h-[1991px] overflow-hidden text-xl">
        <b className="absolute top-[40px] left-[40px] text-6xl flex items-center w-[349px] h-7">
          Frequently asked question
        </b>
        <div className="absolute top-[491.5px] left-[39.5px] box-border w-[810px] h-[1550px] border-t-[10px] border-solid border-gainsboro" />
        <div className="absolute top-[106px] left-[40px] bg-gray-200 w-[810px] h-[1500px] overflow-hidden text-left text-3xl">
        <AccordionCom />
      </div>
       
       </div>
    </div>
  );
};

export default ContainerFAQ;
