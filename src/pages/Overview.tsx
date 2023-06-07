import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Overview: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1774px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[30px] left-[846px]">variasi 1</b>
      <b className="absolute top-[846px] left-[818px]">variasi 2</b>
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[146px] left-[224px] bg-gray-200 w-[832px] h-[700px] overflow-hidden text-left text-lg">
        <div className="absolute top-[256px] left-[40px] w-[250px] h-[29px] text-justify text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Basic Geography
          </div>
        </div>
        <div className="absolute top-[432px] left-[40px] w-[74px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">Time</div>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[102px] h-12 text-27xl">
          <b className="absolute top-[0%] left-[0%]">Overview</b>
        </div>
        <div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[109px] mix-blend-normal">{`Utopia adalah sebuah permainan daring (online) dengan genre MMORTS yang dirancang untuk dimainkan oleh banyak pemain dalam satu waktu. Permainan ini berbasis browser dan berfokus pada simulasi kehidupan di dunia virtual. `}</div>
        <div className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[88px] mix-blend-normal">
          Utopia adalah dunia yang penuh dengan lautan luas yang dihiasi dengan
          banyak pulau, dan di setiap pulau tersebut terdapat beberapa Kerajaan.
          Setiap Kerajaan memiliki hingga 25 provinsi, dan salah satunya akan
          menjadi wilayah yang kamu pimpin.
        </div>
        <div className="absolute top-[calc(50%_+_135px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[88px] mix-blend-normal">
          Di dunia Utopia, waktu berjalan jauh lebih cepat dibandingkan dengan
          waktu di Bumi. Satu jam di Bumi sama dengan satu hari Utopia, dan satu
          hari di Bumi sama dengan satu bulan Utopia. Ya, artinya ada 24 hari
          dalam satu bulan Utopia. Setiap tahun Utopia terdiri dari tujuh bulan.
          Kamu harus tahu bahwa penasihatmu tidak tahu tentang waktu di Bumi dan
          hanya akan berbicara dalam waktu Utopia.
        </div>
      </div>
      <div className="absolute top-[972px] left-[224px] bg-gray-200 w-[832px] h-[700px] overflow-hidden text-left text-lg">
        <div className="absolute top-[221px] left-[114px] w-[250px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Basic Geography
          </div>
        </div>
        <div className="absolute top-[386px] left-[114px] w-[74px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">Time</div>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[102px] h-12 text-27xl">
          <b className="absolute top-[0%] left-[0%]">Overview</b>
        </div>
        <div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[109px] mix-blend-normal">{`Utopia adalah sebuah permainan daring (online) dengan genre MMORTS yang dirancang untuk dimainkan oleh banyak pemain dalam satu waktu. Permainan ini berbasis browser dan berfokus pada simulasi kehidupan di dunia virtual. `}</div>
        <div className="absolute top-[calc(50%_-_76px)] left-[calc(50%_-_302px)] inline-block w-[678px] h-[88px] mix-blend-normal">
          Utopia adalah dunia yang penuh dengan lautan luas yang dihiasi dengan
          banyak pulau, dan di setiap pulau tersebut terdapat beberapa Kerajaan.
          Setiap Kerajaan memiliki hingga 25 provinsi, dan salah satunya akan
          menjadi wilayah yang kamu pimpin.
        </div>
        <div className="absolute top-[calc(50%_+_89px)] left-[calc(50%_-_302px)] inline-block w-[678px] h-[88px] mix-blend-normal">
          Di dunia Utopia, waktu berjalan jauh lebih cepat dibandingkan dengan
          waktu di Bumi. Satu jam di Bumi sama dengan satu hari Utopia, dan satu
          hari di Bumi sama dengan satu bulan Utopia. Ya, artinya ada 24 hari
          dalam satu bulan Utopia. Setiap tahun Utopia terdiri dari tujuh bulan.
          Kamu harus tahu bahwa penasihatmu tidak tahu tentang waktu di Bumi dan
          hanya akan berbicara dalam waktu Utopia.
        </div>
      </div>
    </div>
  );
};

export default Overview;
