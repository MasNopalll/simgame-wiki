import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../components/NavigationContainer";
import SearchContainer from "../components/SearchContainer";
import FAQContainer from "../components/FAQContainer";
import FooterContainer from "../components/FooterContainer";

const HowToPlay2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeading2Text1Click = useCallback(() => {
    navigate("/how-to-play");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/how-to-play");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/how-to-play-3");
  }, [navigate]);

  const onHeading4ContainerClick = useCallback(() => {
    navigate("/how-to-play-3");
  }, [navigate]);

  const onEllipseIconClick = useCallback(() => {
    navigate("/how-to-play");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/how-to-play-3");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1872px] overflow-hidden text-left text-xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[247px] left-[20px] bg-gray-200 w-[1469px] h-[1347px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1469px] h-[920px] text-mini text-silver-100">
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
            <div className="absolute top-[109px] left-[258px] [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
            <div className="absolute top-[237px] left-[244px]">{`>`}</div>
          </div>
          <div className="absolute top-[90px] left-[1102px] bg-gray-200 w-56 h-[352px] overflow-hidden text-silver-300">
            <div className="absolute top-[calc(50%_-_71px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Target Finding
            </div>
            <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Attacking Target
            </div>
            <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_94px)] text-white mix-blend-normal">
              Attack Type
            </div>
            <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Drafting Soldier
            </div>
          </div>
          <SearchContainer propLeft="987px" />
          <FAQContainer sectionTitle="Overview" />
          <div className="absolute top-[181px] left-[267px] bg-gray-200 w-[832px] h-[859px] overflow-hidden text-lg text-white">
            <div className="absolute top-[169px] left-[114px] w-[250px] h-[29px] text-5xl">
              <div className="absolute top-[0%] left-[0%] font-semibold">
                Pilih cara bermain
              </div>
            </div>
            <div className="absolute top-[53.37%] left-[13.7%] text-5xl font-semibold">
              Menentukan cara bermain
            </div>
            <div className="absolute top-[40px] left-[40px] w-[450px] h-12 text-27xl">
              <b className="absolute top-[0%] left-[0%]">How to play</b>
            </div>
            <div className="absolute top-[calc(50%_-_323.5px)] left-[calc(50%_-_376px)] inline-block w-[752px] mix-blend-normal">{`Terdapat beberapa langkah penting yang harus dilakukan oleh pemain. Beberapa diantaranya adalah sebagai berikut: `}</div>
            <div className="absolute top-[calc(50%_-_224.5px)] left-[calc(50%_-_302px)] inline-block w-[678px] h-[88px] mix-blend-normal">
              Bagi para pemain baru, Langkah awal cepat untuk memainkan
              permainan utopia yaitu Untuk memulai permainan, pemain harus
              menentukan cara bermain yang akan digunakan. Terdapat beberapa
              cara bermain yang dapat dipilih oleh pemain yaitu attacker, mage,
              thief, dan explorer/bank
            </div>
            <div className="absolute top-[calc(50%_+_69.5px)] left-[calc(50%_-_302px)] inline-block w-[678px] h-[88px] mix-blend-normal">
              Setelah membaca definisi yang diberikan oleh utopia, pemain
              diharapkan dapat menentukan sedari awal bagaimana cara bermain
              yang akan dilakukannya nantinya. Dan hal ini harus dilakukan
              secara konsisten, sehingga pemain dapat berkonsultasi pada
              pemimpin kerajaan nantinya untuk dibuatkan strategi dalam
              menyerang kerajaan lain.
            </div>
            <div className="absolute top-[calc(50%_-_111.5px)] left-[calc(50%_-_302px)] bg-gray-200 box-border w-[664px] h-[127px] overflow-hidden text-sm border-[1px] border-solid border-white">
              <div className="absolute top-[52px] left-[41px] w-[200px] h-[29px]">
                <div
                  className="absolute top-[0%] left-[0%] font-semibold cursor-pointer"
                  onClick={onHeading2Text1Click}
                >
                  Membaca guides
                </div>
              </div>
              <div
                className="absolute h-[11.81%] w-[2.29%] top-[40.94%] left-[3.99%] font-semibold inline-block cursor-pointer"
                onClick={onText3Click}
              >
                1
              </div>
              <div className="absolute h-[11.81%] w-[1.76%] top-[40.94%] left-[28.61%] font-semibold text-blueviolet-100 inline-block">
                2
              </div>
              <div
                className="absolute h-[11.89%] w-[2.62%] top-[41.73%] left-[62.95%] font-semibold inline-block cursor-pointer"
                onClick={onText5Click}
              >
                3
              </div>
              <div className="absolute top-[52px] left-[213px] w-[200px] h-[29px] text-blueviolet-100">
                <div className="absolute top-[0%] left-[0%] font-semibold">
                  Menentukan cara bermain
                </div>
              </div>
              <div
                className="absolute top-[calc(50%_-_10.5px)] left-[438px] w-[200px] h-[29px] cursor-pointer"
                onClick={onHeading4ContainerClick}
              >
                <div className="absolute top-[0%] left-[0%] font-semibold">{`Menentukan race & personality`}</div>
              </div>
              <img
                className="absolute top-[53px] left-[22px] w-4 h-4 cursor-pointer"
                alt=""
                src="/ellipse-12.svg"
                onClick={onEllipseIconClick}
              />
              <img
                className="absolute top-[53px] left-[185px] w-[18.06px] h-[17px]"
                alt=""
                src="/ellipse-141.svg"
              />
              <div
                className="absolute top-[53px] left-[413px] rounded-[50%] box-border w-[19px] h-[17px] cursor-pointer border-[2px] border-solid border-silver-400"
                onClick={onEllipseClick}
              />
            </div>
          </div>
          <div className="absolute top-[125.5px] left-[1098.5px] box-border w-px h-[1132px] border-r-[1px] border-solid border-silver-200" />
        </div>
        <div className="absolute top-[calc(50%_+_130.5px)] left-[307px] rounded-3xs bg-gray-200 w-[387px] h-[373px] overflow-hidden flex flex-col pt-12 pb-[68px] pr-[33px] pl-[45px] box-border items-start justify-end">
          <div className="self-stretch relative bg-darkslategray-200 box-border h-[52px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_23.5px)] mix-blend-normal">
              Pure
            </div>
          </div>
          <div className="self-stretch flex-1 relative bg-gray-100 overflow-hidden mt-[-4px] text-lg border-[1px] border-solid border-darkslategray-200">
            <div className="absolute top-[calc(50%_-_118.5px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
              Alchemy
            </div>
            <div className="absolute top-[calc(50%_-_32.5px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
              Tools
            </div>
            <div className="absolute top-[calc(50%_+_53.5px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
              Housing
            </div>
            <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_39.5px)] text-xl mix-blend-normal">
              Attacker
            </div>
            <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_25.5px)] text-xl mix-blend-normal">
              Mage
            </div>
            <div className="absolute top-[calc(50%_+_34.5px)] left-[calc(50%_-_31.5px)] text-xl mix-blend-normal">
              Thieve
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_130.5px)] left-[694px] rounded-3xs bg-gray-200 w-[387px] h-[389px] overflow-hidden flex flex-col pt-12 pb-[30px] pr-[33px] pl-[45px] box-border items-start justify-end">
          <div className="self-stretch relative bg-darkslategray-200 box-border h-[52px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_23.5px)] mix-blend-normal">
              Pure
            </div>
          </div>
          <div className="self-stretch relative bg-gray-100 box-border h-[263px] overflow-hidden shrink-0 mt-[-4px] border-[1px] border-solid border-darkslategray-200">
            <div className="absolute top-[calc(50%_-_118.5px)] left-[calc(50%_-_550.5px)] text-lg mix-blend-normal">
              Alchemy
            </div>
            <div className="absolute top-[calc(50%_-_32.5px)] left-[calc(50%_-_550.5px)] text-lg mix-blend-normal">
              Tools
            </div>
            <div className="absolute top-[calc(50%_+_53.5px)] left-[calc(50%_-_550.5px)] text-lg mix-blend-normal">
              Housing
            </div>
            <div className="absolute top-[calc(50%_-_115.5px)] left-[calc(50%_-_72.5px)] mix-blend-normal">
              Attacker / Thief
            </div>
            <div className="absolute top-[calc(50%_-_64.5px)] left-[calc(50%_-_74.5px)] mix-blend-normal">
              Attacker / Mage
            </div>
            <div className="absolute top-[calc(50%_-_13.5px)] left-[calc(50%_-_59.5px)] mix-blend-normal">
              Thief / Mage
            </div>
            <div className="absolute top-[calc(50%_+_37.5px)] left-[calc(50%_-_108.5px)] mix-blend-normal">
              Attacker / Thief / Mage
            </div>
            <div className="absolute top-[calc(50%_+_88.5px)] left-[calc(50%_-_71.5px)] mix-blend-normal">
              Explorer / Bank
            </div>
          </div>
        </div>
      </div>
      <FooterContainer productId="/riinstagramfill.svg" propTop="1594px" />
    </div>
  );
};

export default HowToPlay2;
