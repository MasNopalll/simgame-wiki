import { FunctionComponent } from "react";
import NavigationContainer from "./NavigationContainer";
import SearchContainer from "./SearchContainer";
import FAQContainer from "./FAQContainer";

const GlossarySection: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1469px] h-[412px] text-left text-mini text-white font-inter">
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
        <div className="absolute top-[109px] left-[258px] [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
        <div className="absolute top-[237px] left-[244px]">{`>`}</div>
      </div>
      <div className="absolute top-[162px] left-[270px] bg-gray-200 w-[832px] h-[1233px] overflow-hidden text-27xl">
        <div className="absolute top-[40px] left-[40px] w-[102px] h-12">
          <b className="absolute top-[0%] left-[0%]">Glossary</b>
        </div>
        <div className="absolute top-[calc(50%_-_492.5px)] left-[calc(50%_-_376px)] text-lg inline-block w-[752px] h-[109px] mix-blend-normal">{`Selamat datang di halaman "Glossary"! Di halaman ini, kami menyediakan daftar kata-kata sulit dan istilah teknis yang sering digunakan dalam wiki ini. Kami memahami bahwa dalam menjelajahi dunia game ini, Anda mungkin akan menemui banyak istilah dan frasa yang mungkin belum familiar bagi Anda. `}</div>
        <div className="absolute top-[253px] left-[40px] text-lg bg-gray-100 w-[752px] h-[969px] overflow-hidden text-[inherit] font-inherit">
          <div className="absolute top-[calc(50%_-_465.5px)] left-[calc(50%_-_356px)] inline-block w-[712px] h-[938px] mix-blend-normal">
            <ul className="m-0 pl-6">
              <li className="mb-0">KD = Kingdom</li>
              <li className="mb-0">BE = Building Efficiency</li>
              <li className="mb-0">ME = Military Efficiency</li>
              <li className="mb-0">OME = Offensive Military Efficiency</li>
              <li className="mb-0">DME = Defensive Military Efficiency</li>
              <li className="mb-0">OPA = Offense Per Acre</li>
              <li className="mb-0">OSPA = Offense Specialists Per Acre</li>
              <li className="mb-0">DPA = Defense Per Acre</li>
              <li className="mb-0">DSPA = Defense Specialists Per Acre</li>
              <li className="mb-0">EPA = Elites Per Acre</li>
              <li className="mb-0">TPA = Thieves Per Acre</li>
              <li className="mb-0">RTPA = Raw Thieves Per Acre</li>
              <li className="mb-0">MTPA = Modified Thieves Per Acre</li>
              <li className="mb-0">WPA = Wizards Per Acre</li>
              <li className="mb-0">RWPA = Raw Wizards Per Acre</li>
              <li className="mb-0">MWPA = Modified Wizards Per Acre</li>
              <li className="mb-0">PPA = Peasants Per Acre</li>
              <li className="mb-0">TM = Traditional March</li>
              <li className="mb-0">T/M = Thief/Mage</li>
              <li className="mb-0">FB = Fire Ball</li>
              <li className="mb-0">LL = Land Lust</li>
              <li className="mb-0">Dice = Paradise</li>
              <li className="mb-0">MV = Mystic Vortex</li>
              <li className="mb-0">Prop = Propaganda</li>
              <li className="mb-0">MP = Minor Protection</li>
              <li className="mb-0">Prot = Protection</li>
              <li className="mb-0">WW = War Win</li>
              <li className="mb-0">Crown = Winning Chart</li>
              <li className="mb-0">EOA = End of Age</li>
              <li className="mb-0">CF = Cease-Fire</li>
              <li className="mb-0">EOWCF = End Of War Cease-Fire</li>
              <li className="mb-0">
                Wave = Large group of coordinated attacks
              </li>
              <li className="mb-0">OOP = Out Of Protection</li>
              <li className="mb-0">
                Overpop = Generally used when your total population is so far
                over your maximum population that you can't attack
              </li>
              <li className="mb-0">
                PK = Peasant Kill - this happens when you have 0 peasants, at
                which point your province will perish
              </li>
              <li className="mb-0">
                Chain = Co-ordinated attacks against a single target in a
                specific order for maximum gains and damage
              </li>
              <li className="mb-0">Bounce = A failed attack</li>
              <li className="mb-0">UB = Unbreakable (referring to defense)</li>
              <li>Bush = Short for Ambush</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[90px] left-[1102px] bg-gray-200 w-56 h-[352px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_94px)] mix-blend-normal">
          Glossary
        </div>
      </div>
      <SearchContainer propLeft="868px" />
      <FAQContainer sectionTitle="Glossary" />
      <div className="absolute top-[125.5px] left-[1108.5px] box-border w-px h-[1229px] border-r-[1px] border-solid border-silver-200" />
    </div>
  );
};

export default GlossarySection;
