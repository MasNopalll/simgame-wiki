import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MilitarySection from "../components/MilitarySection";
import FooterContainer from "../components/FooterContainer";
import DefaultForm from "../components/FormComponent"

const HowToAttack: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2801px] overflow-hidden text-left text-lg text-indianred font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[247px] left-[20px] bg-gray-200 w-[1469px] h-[2163px] overflow-hidden">
        
        <MilitarySection />
        
        <div className="absolute top-[calc(50%_+_789.5px)] left-[calc(50%_-_384.5px)] bg-gray-100 w-[627px] h-[109px]" />
        <div className="absolute top-[calc(50%_+_833.5px)] left-[calc(50%_-_362.5px)] inline-block w-[632px] h-[77px] mix-blend-normal">
          Pastikan untuk tidak terlalu memaksakan diri sehingga Anda memiliki
          cukup militer untuk melindungi tanah Anda.
        </div>
        <div className="absolute top-[calc(50%_+_800.5px)] left-[calc(50%_-_362.5px)] font-semibold mix-blend-normal">
          WARNING
        </div>
        <div className="absolute top-[1433px] left-[calc(50%_-_384.5px)] w-[800px] h-[100px] text-5xl text-white">
          <div className="absolute top-[10%] left-[0%] font-semibold">
            Simulasi Serangan
            <DefaultForm/>
          </div>
        </div>
        
      </div>
      <FooterContainer productId="/riinstagramfill.svg" propTop="2410px" />
    </div>
    
  );
};

export default HowToAttack;
