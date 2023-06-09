import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ImportantFact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1735px] overflow-hidden text-left text-[inherit] text-white font-inherit">
      <b className="absolute top-[30px] left-[866px] text-77xl">variasi 1</b>
      <b className="absolute top-[619px] left-[852px] text-77xl">variasi 2</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[190px] left-[165px] bg-gray-200 w-[832px] h-[469px] overflow-hidden">
        <div className="absolute top-[105px] left-[44px] bg-gray-100 w-[744px] h-[205px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_22.5px)] left-[calc(50%_-_351px)] inline-block w-[692px] h-[88px] mix-blend-normal">
            <ul className="m-0 pl-6">
              <li className="mb-0">
                Clerik membantu pasukan mereka di medan perang dengan
                menyembuhkan prajurit yang terluka untuk mengurangi jumlah
                korban keseluruhan. Mereka mendukung rekan mereka dengan berkat
                magis.
              </li>
            </ul>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li>Gelar: [NamaPenguasa] yang Diberkati</li>
            </ul>
          </div>
          <div className="absolute top-[calc(50%_-_85.5px)] left-[calc(50%_-_58px)] text-5xl font-semibold font-inter mix-blend-normal">
            The Cleric
          </div>
          <div className="absolute top-[65px] left-[0px] box-border w-[747px] h-0.5 border-t-[2px] border-solid border-silver-200" />
        </div>
      </div>
      <div className="absolute top-[868px] left-[165px] bg-gray-200 w-[832px] h-[340px] overflow-hidden">
        <div className="absolute top-[68px] left-[43px] bg-gray-100 box-border w-[745px] h-[203px] overflow-hidden border-[1px] border-solid border-black">
          <div className="absolute top-[calc(50%_-_25.5px)] left-[calc(50%_-_345.5px)] inline-block w-[692px] h-28 mix-blend-normal">
            <ul className="m-0 pl-6">
              <li className="mb-0">Offensive : 10†</li>
              <li className="mb-0">Defensive : -</li>
              <li className="mb-0">Cost : 350 gc</li>
              <li>Networth : 0.4 networth per point of power</li>
            </ul>
          </div>
          <div className="absolute top-[calc(50%_-_86.5px)] left-[calc(50%_-_115.5px)] text-5xl font-semibold font-inter mix-blend-normal">
            Offensive Specialist
          </div>
          <div className="absolute top-[59px] left-[-1px] box-border w-[747px] h-0.5 border-t-[2px] border-solid border-silver-200" />
        </div>
      </div>
    </div>
  );
};

export default ImportantFact;
