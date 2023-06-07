import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MagicContainer from "../components/ElfMysticContainer";

const Troubleshooting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[843px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[58px] left-[867px]">variasi 1</b>
      <b className="absolute top-[422px] left-[853px]">variasi 2</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <MagicContainer
        elfMysticCombinationText="Kombinasi Elf dan Mystic sangat populer di Utopia-game karena kedua ras ini memiliki kekuatan sihir yang kuat. Elf memiliki kemampuan sihir alami dan cenderung lebih cepat dalam produksi sihir daripada ras lainnya."
        elfMysticCombinationText2="TIPS"
      />
      <MagicContainer
        elfMysticCombinationText="Kombinasi Elf dan Mystic sangat populer di Utopia-game karena kedua ras ini memiliki kekuatan sihir yang kuat. Elf memiliki kemampuan sihir alami dan cenderung lebih cepat dalam produksi sihir daripada ras lainnya."
        elfMysticCombinationText2="INFO"
        propTop="186px"
        propColor="#5290e7"
        propColor1="#5290e7"
      />
    </div>
  );
};

export default Troubleshooting;
