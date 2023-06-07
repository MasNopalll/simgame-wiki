import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TextMobileStepper from "../components/StepperComponent";

const Stepper: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1204px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[30px] left-[866px]">variasi 1</b>
      <b className="absolute top-[619px] left-[852px]">variasi 2</b>
      <b className="absolute top-[904px] left-[849px]">variasi 3</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[calc(50%_-_458px)] left-[calc(50%_-_417px)] bg-gray-200 w-[833px] h-[458px] overflow-hidden text-left text-5xl">
        <div className="absolute top-[53px] left-[69px] w-[200px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Drafting Soldier
          </div>
        </div>
        <div className="absolute top-[244px] left-[69px] w-[200px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Finding Target
          </div>
        </div>
        <div className="absolute top-[347px] left-[69px] w-[200px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Attack Type
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_138px)] left-[calc(50%_-_347.5px)] text-lg inline-block w-[664px] h-[45px] mix-blend-normal">
          Rekrut prajurit dasar dengan menuju ke tab Militer dan memilih tingkat
          perekrutan dan target. Pastikan keseimbangan antara militer dan
          petani, karena mempertahankan pasukan besar bisa mahal. Prajurit dapat
          direkrut dengan kecepatan yang bervariasi, namun semakin cepat
          rekrutmen, semakin mahal biayanya per prajurit. Patriotisme dapat
          dilancarkan untuk meningkatkan efisiensi perekrutan.
        </div>
        <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_347.5px)] text-lg inline-block w-[664px] h-[45px] mix-blend-normal">
          Untuk menemukan target, cari tanah yang lebih lemah, preman yang
          mungkin menyerang, dan peluang untuk mendapatkan sumber daya.
        </div>
        <div className="absolute top-[calc(50%_+_156px)] left-[calc(50%_-_347.5px)] text-lg inline-block w-[664px] h-[45px] mix-blend-normal">
          Ada beberapa jenis serangan yang dapat dilakukan, termasuk Tradisional
          March, Raze, Plunder, Learn, Massacre, Conquest, dan Ambush.
        </div>
        <div className="absolute top-[56px] left-[32px] rounded-[50%] bg-silver-300 box-border w-5 h-5 border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[249px] left-[32px] rounded-[50%] bg-silver-300 box-border w-5 h-5 border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[352px] left-[32px] rounded-[50%] bg-silver-300 box-border w-5 h-5 border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[75px] left-[calc(50%_-_376.5px)] box-border w-0.5 h-[175px] border-r-[2px] border-solid border-silver-300" />
        <div className="absolute top-[268px] left-[calc(50%_-_376.5px)] box-border w-0.5 h-[85px] border-r-[2px] border-solid border-silver-300" />
      </div>
      <TextMobileStepper/>
      <div className="absolute top-[calc(50%_+_159px)] left-[calc(50%_-_394px)] bg-gray-200 w-[788px] h-[143px] overflow-hidden text-left text-5xl">
        <div className="absolute top-[53px] left-[69px] w-[200px] h-[29px] text-blueviolet-100">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Drafting Soldier
          </div>
        </div>
        <div className="absolute w-[1.96%] top-[37.76%] left-[5.08%] font-semibold text-blueviolet-100 inline-block">
          1
        </div>
        <div className="absolute w-[2.45%] top-[37.06%] left-[40.15%] font-semibold inline-block">
          2
        </div>
        <div className="absolute w-[2.62%] top-[37.06%] left-[74.49%] font-semibold inline-block">
          3
        </div>
        <div className="absolute top-[53px] left-[352px] w-[200px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Finding Target
          </div>
        </div>
        <div className="absolute top-[53px] left-[622px] w-[200px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">{`Attack Type `}</div>
        </div>
        <div className="absolute top-[53px] left-[31px] rounded-[50%] box-border w-[30px] h-[30px] border-[2px] border-solid border-blueviolet-200" />
        <div className="absolute top-[53px] left-[309px] rounded-[50%] box-border w-[30px] h-[30px] border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[53px] left-[580px] rounded-[50%] box-border w-[30px] h-[30px] border-[2px] border-solid border-silver-300" />
      </div>
      <div className="absolute top-[calc(50%_+_418px)] left-[calc(50%_-_341px)] bg-gray-200 w-[682px] h-[143px] overflow-hidden text-left text-5xl">
        <div className="absolute top-[57px] left-[64px] w-[74px] h-[29px] text-blueviolet-100">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Step 1
          </div>
        </div>
        <div className="absolute top-[57px] left-[319px] w-[76px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Step 2
          </div>
        </div>
        <div className="absolute top-[57px] left-[572px] w-[76px] h-[29px]">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Step 3
          </div>
        </div>
        <div className="absolute top-[57px] left-[26px] rounded-[50%] bg-blueviolet-100 box-border w-[30px] h-[30px] border-[2px] border-solid border-blueviolet-200" />
        <div className="absolute top-[57px] left-[281px] rounded-[50%] bg-silver-200 box-border w-[30px] h-[30px] border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[57px] left-[534px] rounded-[50%] bg-silver-200 box-border w-[30px] h-[30px] border-[2px] border-solid border-silver-300" />
        <div className="absolute top-[70.5px] left-[175.5px] box-border w-[69px] h-[3px] border-t-[3px] border-solid border-white" />
        <div className="absolute top-[70.5px] left-[429.5px] box-border w-[69px] h-[3px] border-t-[3px] border-solid border-white" />
      </div>
    </div>
  );
};

export default Stepper;
