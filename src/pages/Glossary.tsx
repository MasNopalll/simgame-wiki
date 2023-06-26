import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GlossarySection from "../components/GlossarySection";
import FooterContainer from "../components/FooterContainer";

const Glossary: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1813px] overflow-hidden">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[159px] left-[20px] bg-gray-200 w-[1469px] h-[1428px] overflow-hidden">
        <GlossarySection />
      </div>
      <FooterContainer productId="/riinstagramfill.svg" propTop="1587px" />
    </div>
  );
};

export default Glossary;
