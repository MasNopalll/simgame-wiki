import { FunctionComponent } from "react";
import NavigationContainer from "./NavigationContainer";
import SearchContainer from "./SearchContainer";

const MilitarySection: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1469px] h-[920px] text-left text-mini text-white font-inter">
      <NavigationContainer />
      <div className="absolute top-[90px] left-[0px] bg-gray-200 w-[270px] h-[700px] overflow-hidden text-silver-100">
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
        <div className="absolute top-[calc(50%_-_80px)] left-[calc(50%_-_111px)] mix-blend-normal">
          How to attack
        </div>
        <div className="absolute top-[calc(50%_-_47px)] left-[calc(50%_-_111px)] mix-blend-normal">
          FAQ
        </div>
        <div className="absolute top-[109px] left-[258px] [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
        <div className="absolute top-[270px] left-[244px]">{`>`}</div>
      </div>
      <div className="absolute top-[162px] left-[270px] bg-gray-200 w-[832px] h-[1253px] overflow-hidden text-lg">
        <div className="absolute top-[40px] left-[40px] w-[102px] h-12 text-27xl">
          <b className="absolute top-[0%] left-[0%]">Military</b>
        </div>
        <div className="absolute top-[calc(50%_-_508.5px)] left-[calc(50%_-_376px)] inline-block w-[752px] h-[109px] mix-blend-normal">
          Dalam dunia game strategi, kekuatan militer menjadi kunci untuk
          memperluas wilayah, melindungi kekayaan, dan mengamankan dominasi atas
          musuh-musuh kita. Melalui pemahaman yang baik tentang taktik,
          koordinasi pasukan, dan penggunaan sumber daya dengan bijak, Anda akan
          mampu mengembangkan kekuatan militer yang tangguh dan menghadapi lawan
          dengan percaya diri
        </div>
        <div className="absolute top-[258px] left-[78px] w-[200px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Rekrut Prajurit
          </div>
        </div>
        <div className="absolute top-[662px] left-[78px] w-[200px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Mencari Lawan
          </div>
        </div>
        <div className="absolute top-[787px] left-[78px] w-[200px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Tipe Serangan
          </div>
        </div>
        <div className="absolute top-[911px] left-[78px] w-[500px] h-[29px] text-5xl">
          <div className="absolute top-[0%] left-[0%] font-semibold">
            Melancarkan Serangan
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_314.5px)] left-[calc(50%_-_338px)] inline-block w-[664px] h-[45px] mix-blend-normal">
          Rekrut prajurit dasar dengan menuju ke tab Militer dan memilih tingkat
          perekrutan dan target. Pastikan keseimbangan antara militer dan
          petani, karena mempertahankan pasukan besar bisa mahal. Prajurit dapat
          direkrut dengan kecepatan yang bervariasi, namun semakin cepat
          rekrutmen, semakin mahal biayanya per prajurit. Patriotisme dapat
          dilancarkan untuk meningkatkan efisiensi perekrutan.
        </div>
        <div className="absolute top-[calc(50%_+_90.5px)] left-[calc(50%_-_338px)] inline-block w-[664px] h-[45px] mix-blend-normal">
          Untuk menemukan target, cari tanah yang lebih lemah, preman yang
          mungkin menyerang, dan peluang untuk mendapatkan sumber daya.
        </div>
        <div className="absolute top-[calc(50%_+_214.5px)] left-[calc(50%_-_336px)] inline-block w-[664px] h-[45px] mix-blend-normal">
          Ada beberapa jenis serangan yang dapat dilakukan, termasuk Tradisional
          March, Raze, Plunder, Learn, Massacre, Conquest, dan Ambush.
        </div>
        <div className="absolute top-[calc(50%_+_338.5px)] left-[calc(50%_-_336px)] inline-block w-[664px] h-[45px] mix-blend-normal">
          Setelah kita menemukan target yang tepat untuk diserang, kita perlu
          mendapatkan intelijen yang memadai untuk memastikan bahwa serangan
          kita berhasil. Dengan melakukan spionase pada militer musuh, kita bisa
          mengetahui seberapa kuat pertahanan yang melindungi wilayah mereka.
          Namun, ada faktor acak kecil yang diterapkan pada semua serangan,
          sehingga kita perlu mengirim lebih banyak pasukan penyerang dari
          pertahanan musuh yang ada untuk memastikan bahwa serangan kita
          berhasil. Disarankan agar kita mengirim sekitar 104% dari pertahanan
          musuh kita. Namun, kita perlu berhati-hati - jika musuh melihat
          pencuri kita menyelinap di wilayah mereka, mereka mungkin mengambil
          tindakan sendiri untuk menghindari invasi kita.
        </div>
        <img
          className="absolute top-[261px] left-[41px] w-5 h-5"
          alt=""
          src="/ellipse-13.svg"
        />
        <img
          className="absolute top-[667px] left-[41px] w-5 h-5"
          alt=""
          src="/ellipse-13.svg"
        />
        <img
          className="absolute top-[790px] left-[41px] w-5 h-5"
          alt=""
          src="/ellipse-13.svg"
        />
        <img
          className="absolute top-[917px] left-[41px] w-5 h-5"
          alt=""
          src="/ellipse-13.svg"
        />
        <div className="absolute top-[281px] left-[calc(50%_-_366px)] box-border w-0.5 h-[386px] border-r-[2px] border-solid border-gray-400" />
        
        <img
          className="absolute top-[685px] left-[calc(50%_-_366px)] w-0.5 h-[107.5px]"
          alt=""
          src="/line-7.svg"
        />
        <img
          className="absolute top-[809px] left-[calc(50%_-_366px)] w-0.5 h-[109.5px]"
          alt=""
          src="/line-7.svg"
        />
        <div className="absolute top-[calc(50%_-_142.5px)] left-[calc(50%_-_338px)] bg-gray-100 w-[627px] h-36" />
        <div className="absolute top-[calc(50%_-_98.5px)] left-[calc(50%_-_325px)] text-mediumseagreen inline-block w-[632px] h-[77px] mix-blend-normal">
          Kombinasi Elf dan Mystic sangat populer di Utopia-game karena kedua
          ras ini memiliki kekuatan sihir yang kuat. Elf memiliki kemampuan
          sihir alami dan cenderung lebih cepat dalam produksi sihir daripada
          ras lainnya.
        </div>
        <div className="absolute top-[calc(50%_-_131.5px)] left-[calc(50%_-_325px)] font-semibold text-mediumseagreen mix-blend-normal">
          TIPS
        </div>
      </div>
      <div className="absolute top-[90px] left-[1102px] bg-gray-200 w-56 h-[352px] overflow-hidden text-silver-300">
        <div className="absolute top-[calc(50%_-_71px)] left-[calc(50%_-_94px)] mix-blend-normal">
          Tipe Serangan
        </div>
        <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_94px)] mix-blend-normal">
          Melancarkan Serangan
        </div>
        <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_94px)] text-white mix-blend-normal">
          Mencari Lawan
        </div>
        <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_94px)] mix-blend-normal">
          Rekrut Prajurit
        </div>
      </div>
      <SearchContainer propLeft="868px" />
      <div className="absolute top-[123px] left-[267px] bg-gray-200 w-[482px] h-[90px] overflow-hidden text-xs">
        <div className="absolute top-[3px] left-[84px] w-[30px] h-[30px] overflow-hidden" />
        <div className="absolute top-[3px] left-[187px] w-[30px] h-[30px] overflow-hidden">
          <div className="absolute h-full w-full top-[10%] right-[3.33%] bottom-[-10%] left-[-3.33%] overflow-hidden" />
        </div>
        <div className="absolute top-[3px] left-[321px] w-[30px] h-[30px] overflow-hidden" />
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_128px)] mix-blend-normal">
          How to attack
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_8px)] mix-blend-normal">
          Military
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_154px)] mix-blend-normal">
          /
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_30px)] mix-blend-normal">
          /
        </div>
        <img
          className="absolute h-[18.89%] w-[4.15%] top-[33.33%] right-[86.31%] bottom-[47.78%] left-[9.54%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector5.svg"
        />
      </div>
      <div className="absolute top-[125.5px] left-[1108.5px] box-border w-px h-[1891px] border-r-[1px] border-solid border-silver-200" />
    </div>
  );
};

export default MilitarySection;
