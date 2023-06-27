import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../components/NavigationContainer";
import ContainerFAQ from "../components/ContainerFAQ";
import SearchContainer from "../components/SearchContainer";
import FAQContainer from "../components/FAQContainer";
import FooterContainer from "../components/FooterContainer";

const FAQ: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1862px] overflow-hidden text-left text-mini text-silver-100 font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[100px] left-[20px] bg-gray-200 w-[1469px] h-[1136px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1469px] h-[920px]">
          <NavigationContainer />
          <div className="absolute top-[90px] left-[0px] bg-gray-200 w-[270px] h-[700px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_311px)] left-[calc(50%_-_111px)] mix-blend-normal">
              Overview
            </div>
            <div className="absolute top-[calc(50%_-_278px)] left-[calc(50%_-_111px)] mix-blend-normal">
              Combo Selection
            </div>
            <div className="absolute top-[calc(50%_-_245px)] left-[calc(50%_-_111px)] mix-blend-normal">
              Choose Race and Personality
            </div>
            <div className="absolute top-[calc(50%_-_212px)] left-[calc(50%_-_81px)] mix-blend-normal">
              Personality
            </div>
            <div className="absolute top-[calc(50%_-_179px)] left-[calc(50%_-_81px)] mix-blend-normal">
              Race
            </div>
            <div className="absolute top-[calc(50%_-_146px)] left-[calc(50%_-_81px)] mix-blend-normal">
              Most common combination
            </div>
            <div className="absolute top-[calc(50%_-_113px)] left-[calc(50%_-_111px)] mix-blend-normal">
              How to play
            </div>
            <div className="absolute top-[calc(50%_-_80px)] left-[calc(50%_-_111px)] text-white mix-blend-normal">
              FAQ
            </div>
            <div className="absolute top-[109px] left-[258px] [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
            <div className="absolute top-[237px] left-[244px]">{`>`}</div>
          </div>
          <ContainerFAQ />
          <div className="absolute top-[90px] left-[1102px] bg-gray-200 w-56 h-[352px] overflow-hidden text-white">
            <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_94px)] mix-blend-normal">
              FAQ
            </div>
          </div>
          <SearchContainer />
          <FAQContainer sectionTitle="FAQ" />
         
      </div>
        <FooterContainer productId="/riinstagramfill.svg"  propTop="1010px"  />
      <div className="absolute top-[125.5px] left-[1108.5px] box-border w-px h-[661px] border-r-[1px] border-solid border-silver-200" />
        
        </div>
    </div>
  );
};

export default FAQ;
