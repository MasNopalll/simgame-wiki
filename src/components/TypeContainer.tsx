import { FunctionComponent } from "react";

const TypeContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[1516px] left-[31px] rounded-3xs bg-gray-200 w-[1217px] h-[477px] overflow-hidden flex flex-col pt-12 pb-[107px] pr-[33px] pl-[45px] box-border items-start justify-end text-left text-xl text-white font-inter">
      <div className="relative bg-darkslategray-200 box-border w-[1139px] h-[52px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
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
      <div className="relative bg-gray-100 box-border w-[1139px] h-[274px] overflow-hidden shrink-0 mt-[-4px] text-lg border-[1px] border-solid border-darkslategray-200">
        <div className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
          Alchemy
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
          Tools
        </div>
        <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_550.5px)] mix-blend-normal">
          Housing
        </div>
        <div className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
          Income
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
          <p className="m-0">{`Building `}</p>
          <p className="m-0">Effectiveness</p>
        </div>
        <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_379.5px)] mix-blend-normal">
          Population Limits
        </div>
        <div className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
          0.0724
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
          0.0524
        </div>
        <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_205.5px)] mix-blend-normal">
          0.0262
        </div>
        <div className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_39.5px)] inline-block w-[443px] mix-blend-normal">
          Seni mengubah timah menjadi emas. Pengetahuan ini akan membantu kita
          meningkatkan
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_39.5px)] inline-block w-[443px] mix-blend-normal">{`Menciptakan alat yang lebih baik berarti pekerja yang lebih efisien. `}</div>
        <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_39.5px)] inline-block w-[443px] mix-blend-normal">
          Meningkatkan kualitas dan efisiensi perumahan, memberi peluang
          meningkatkanh banyak lahan
        </div>
      </div>
    </div>
  );
};

export default TypeContainer;
