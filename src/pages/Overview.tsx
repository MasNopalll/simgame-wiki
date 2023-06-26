import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../components/NavigationContainer";
import SearchContainer from "../components/SearchContainer";
import FAQContainer from "../components/FAQContainer";
import FooterContainer from "../components/FooterContainer";

const Overview: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[1362px] overflow-hidden text-left text-mini text-silver-100 font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[247px] left-[20px] bg-gray-200 w-[1469px] h-[936px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1469px] h-[920px]">
          <NavigationContainer />
          <div className="absolute top-[90px] left-[0px] bg-gray-200 w-[270px] h-[700px] overflow-hidden">
            <b className="absolute top-[calc(50%_-_311px)] left-[calc(50%_-_111px)] mix-blend-normal">
              Overview
            </b>
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
          <div className="absolute top-[162px] left-[270px] bg-gray-200 w-[832px] h-[700px] overflow-hidden text-lg text-white">
            <div className="absolute top-[256px] left-[40px] w-[200px] h-[45px] text-5xl">
              <div className="absolute top-[0%] left-[0%] font-semibold">
                Basic Geography
              </div>
            </div>
            <div className="absolute top-[412px] left-[40px] w-[74px] h-[45px] text-5xl">
              <div className="absolute top-[0%] left-[0%] font-semibold">
                Time
              </div>
            </div>
            <div className="absolute top-[40px] left-[40px] w-[102px] h-12 text-27xl">
              <b className="absolute top-[0%] left-[0%]">Overview</b>
            </div>
            <div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[109px] mix-blend-normal">
              Utopia adalah sebuah permainan daring (online) yang dirancang
              untuk dimainkan oleh banyak pemain dalam satu waktu. Permainan ini
              berbasis browser dan berfokus pada simulasi kehidupan di dunia
              virtual. Dalam permainan ini, pemain akan berperan sebagai seorang
              Raja atau Ratu yang bertanggung jawab untuk membangun dan
              mengelola kerajaannya.
            </div>
            <div className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[88px] mix-blend-normal">
              Utopia adalah dunia yang penuh dengan lautan luas yang dihiasi
              dengan banyak pulau, dan di setiap pulau tersebut terdapat
              beberapa Kerajaan. Setiap Kerajaan memiliki hingga 25 provinsi,
              dan salah satunya akan menjadi wilayah yang kamu pimpin.
            </div>
            <div className="absolute top-[calc(50%_+_115px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[88px] mix-blend-normal">
              <p className="m-0">
                Di dunia Utopia, waktu berjalan jauh lebih cepat dibandingkan
                dengan waktu di Bumi. Satu jam di Bumi sama dengan satu hari
                Utopia, dan satu hari di Bumi sama dengan satu bulan Utopia. Ya,
                artinya ada 24 hari dalam satu bulan Utopia. Setiap tahun Utopia
                terdiri dari tujuh bulan. Kamu harus tahu bahwa penasihatmu
                tidak tahu tentang waktu di Bumi dan hanya akan berbicara dalam
                waktu Utopia.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Di awal setiap Era, semua orang mulai dari awal dengan provinsi
                yang baru, memberikan kesempatan pada setiap penguasa dan setiap
                kerajaan untuk menjadi yang terbaik. Setiap Era berlangsung
                sekitar 8 hingga 12 tahun Utopia, yang setara dengan 8 hingga 12
                minggu di waktu Bumi.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Di Utopia, kerajaan yang sukses akan menjadi yang paling kuat
                dan terhormat di seluruh dunia. Permainan ini terus berkembang
                dan diperbarui oleh pengembang, dan tersedia dalam beberapa
                bahasa.
              </p>
            </div>
          </div>
          <div className="absolute top-[90px] left-[1102px] bg-gray-200 w-56 h-[352px] overflow-hidden text-silver-300">
            <div className="absolute top-[calc(50%_-_71px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Time
            </div>
            <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Growth
            </div>
            <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_94px)] mix-blend-normal">
              Basic Geography
            </div>
            <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_94px)] text-white mix-blend-normal">
              Overview
            </div>
          </div>
          <SearchContainer propLeft="868px" />
          <FAQContainer sectionTitle="Overview" />
          <img
            className="absolute top-[126px] left-[1108px] w-px h-[752.5px]"
            alt=""
            src="/line-71.svg"
          />
        </div>
      </div>
      <FooterContainer productId="/riinstagramfill1.svg" propTop="1183px" />
    </div>
  );
};

export default Overview;
