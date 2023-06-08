import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MagicContainer from "../components/ElfMysticContainer";

const Problem: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[843px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[30px] left-[872px]">variasi 1</b>
      <b className="absolute top-[416px] left-[858px]">variasi 2</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      
      <MagicContainer
        elfMysticCombinationText="Pastikan untuk tidak terlalu memaksakan diri sehingga Anda memiliki cukup militer untuk melindungi tanah Anda."
        elfMysticCombinationText2="WARNING"
        propTop="146px"
        propColor="#d76764"
        propColor1="#d76764"
      />
      <MagicContainer
        elfMysticCombinationText="Pastikan untuk tidak terlalu memaksakan diri sehingga Anda memiliki cukup militer untuk melindungi tanah Anda."
        elfMysticCombinationText2="ALERTS"
        propTop="532px"
        propColor="#faca15"
        propColor1="#faca15"
      />

    </div>
  );
  
};

export default Problem;
