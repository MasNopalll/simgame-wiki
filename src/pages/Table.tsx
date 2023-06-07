import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypeContainer from "../components/TypeContainer";

const Table: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2044px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[82px] left-[867px]">variasi 1</b>
      <b className="absolute top-[758px] left-[853px]">variasi 2</b>
      <b className="absolute top-[1400px] left-[850px]">variasi 3</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[198px] left-[31px] rounded-3xs bg-gray-200 w-[1217px] h-[494px] overflow-hidden flex flex-col pt-[49px] pb-[94px] pr-[33px] pl-[45px] box-border items-start justify-end text-left text-lg">
        <div className="relative bg-darkslategray-200 box-border w-[1139px] h-[52px] overflow-hidden shrink-0 text-xl border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Type
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Effect
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            Multiplier
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_39.5px)] mix-blend-normal">
            Explanation
          </div>
        </div>
        <div className="relative bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Alchemy
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Income
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0724
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_39.5px)] inline-block w-[596px] mix-blend-normal">
            Seni mengubah timah menjadi emas. Pengetahuan ini akan membantu kita
            meningkatkan
          </div>
        </div>
        <div className="relative bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Tools
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            <p className="m-0">{`Building `}</p>
            <p className="m-0">Effectiveness</p>
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0524
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_39.5px)] inline-block w-[594px] mix-blend-normal">{`Menciptakan alat yang lebih baik berarti pekerja yang lebih efisien. `}</div>
        </div>
        <div className="relative bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Housing
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Population Limits
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0262
          </div>
          <div className="absolute top-[calc(50%_-_46px)] left-[calc(50%_-_39.5px)] inline-block w-[594px] h-[58px] mix-blend-normal">
            Meningkatkan kualitas dan efisiensi perumahan, memberi peluang
            meningkatkanh banyak lahan
          </div>
        </div>
      </div>
      <div className="absolute top-[874px] left-[31px] rounded-3xs bg-gray-200 w-[1217px] h-[494px] overflow-hidden flex flex-col pt-[49px] pb-[94px] pr-[33px] pl-[45px] box-border items-start justify-end text-left text-lg">
        <div className="relative bg-darkslategray-200 box-border w-[1139px] h-[52px] overflow-hidden shrink-0 text-xl border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Type
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Effect
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            Multiplier
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_39.5px)] mix-blend-normal">
            Explanation
          </div>
        </div>
        <div className="relative bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Alchemy
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Income
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0724
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_39.5px)] inline-block w-[609px] mix-blend-normal">
            Seni mengubah timah menjadi emas. Pengetahuan ini akan membantu kita
            meningkatkan
          </div>
        </div>
        <div className="relative bg-darkslategray-300 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Tools
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            <p className="m-0">{`Building `}</p>
            <p className="m-0">Effectiveness</p>
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0524
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_39.5px)] inline-block w-[609px] mix-blend-normal">{`Menciptakan alat yang lebih baik berarti pekerja yang lebih efisien. `}</div>
        </div>
        <div className="relative bg-gray-100 box-border w-[1139px] h-[100px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
            Housing
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
            Population Limits
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
            0.0262
          </div>
          <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_39.5px)] inline-block w-[609px] mix-blend-normal">
            Meningkatkan kualitas dan efisiensi perumahan, memberi peluang
            meningkatkanh banyak lahan
          </div>
        </div>
      </div>
      <TypeContainer />
    </div>
  );
};

export default Table;
