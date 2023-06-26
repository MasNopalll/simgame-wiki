import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MacBookAir2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNAVIGATIONTABS1Click = useCallback(() => {
    navigate("/navbar");
  }, [navigate]);

  const onJUMBOTRON2TextClick = useCallback(() => {
    navigate("/jumbotron");
  }, [navigate]);

  const onPARAGRAPH2TextClick = useCallback(() => {
    navigate("/paragraph");
  }, [navigate]);

  const onSTEPPER3TextClick = useCallback(() => {
    navigate("/stepper");
  }, [navigate]);

  const onPROBLEMTROUBLESHOOTINGClick = useCallback(() => {
    navigate("/problem");
  }, [navigate]);

  const onTABLE3TextClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onBOTTOMNAVIGATION1Click = useCallback(() => {
    navigate("/bottom-navigation");
  }, [navigate]);

  const onACCORDION3TextClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onMENU1TextClick = useCallback(() => {
    navigate("/content-list");
  }, [navigate]);

  const onIMPORTANTFACT1Click = useCallback(() => {
    navigate("/important-fact");
  }, [navigate]);

  const onCALCULATOR1TextClick = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onLANDINGPAGETextClick = useCallback(() => {
    navigate("/landing-page-1");
  }, [navigate]);

  const onOVERVIEWTextClick = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const onLISTRACEClick = useCallback(() => {
    navigate("/how-to-play");
  }, [navigate]);

  const onHOWTOPLAYClick = useCallback(() => {
    navigate("/how-to-play");
  }, [navigate]);

  const onHOWTOATTACKClick = useCallback(() => {
    navigate("/how-to-attack");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBREADCRUMBSTextClick = useCallback(() => {
    navigate("/breadcrumbs");
  }, [navigate]);

  const onGLOSSARYTextClick = useCallback(() => {
    navigate("/glossary");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-left text-smi text-black font-inter">
      <div className="absolute top-[222px] left-[261px] bg-white w-[333px] h-[482px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[333px] h-[61px] overflow-hidden text-6xl text-white">
          <div className="absolute top-[15px] left-[calc(50%_-_82.5px)] font-semibold">
            COMPONENT
          </div>
        </div>
        <div
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_-_141.5px)] font-medium cursor-pointer"
          onClick={onNAVIGATIONTABS1Click}
        >
          NAVIGATION TABS (1)
        </div>
        <div
          className="absolute top-[calc(50%_-_137px)] left-[calc(50%_-_141.5px)] font-medium cursor-pointer"
          onClick={onJUMBOTRON2TextClick}
        >
          JUMBOTRON (2)
        </div>
        <div
          className="absolute top-[calc(50%_-_105px)] left-[calc(50%_-_141.5px)] font-medium cursor-pointer"
          onClick={onPARAGRAPH2TextClick}
        >
          PARAGRAPH (2)
        </div>
        <div
          className="absolute top-[calc(50%_-_74px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[97px] h-[22px] cursor-pointer"
          onClick={onSTEPPER3TextClick}
        >
          STEPPER (3)
        </div>
        <div
          className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_141.5px)] font-medium cursor-pointer"
          onClick={onPROBLEMTROUBLESHOOTINGClick}
        >
          PROBLEM / TROUBLESHOOTING (4)
        </div>
        <div
          className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[69px] h-[21px] cursor-pointer"
          onClick={onTABLE3TextClick}
        >
          TABLE (3)
        </div>
        <div
          className="absolute top-[calc(50%_+_23px)] left-[calc(50%_-_141.5px)] font-medium cursor-pointer"
          onClick={onBOTTOMNAVIGATION1Click}
        >{`BOTTOM NAVIGATION (1) `}
        
        </div>

        <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[141px] h-[21px] cursor-pointer"
        onClick={onBREADCRUMBSTextClick}
        >
          BREADCRUMBS (1)
        </div>
        <div
          className="absolute top-[calc(50%_+_86px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[141px] h-[21px] cursor-pointer"
          onClick={onACCORDION3TextClick}
        >
          ACCORDION (3)
        </div>
        <div
          className="absolute top-[calc(50%_+_118px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[141px] h-[21px] cursor-pointer"
          onClick={onMENU1TextClick}
        >
          MENU (1)
        </div>
        <div
          className="absolute top-[calc(50%_+_150px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[141px] h-[21px] cursor-pointer"
          onClick={onIMPORTANTFACT1Click}
        >
          IMPORTANT FACT (1)
        </div>
        <div
          className="absolute top-[calc(50%_+_182px)] left-[calc(50%_-_141.5px)] font-medium inline-block w-[141px] h-[21px] cursor-pointer"
          onClick={onCALCULATOR1TextClick}
        >
          CALCULATOR (1)
        </div>
      </div>
      <div className="absolute top-[222px] left-[694px] bg-white w-[325px] h-[482px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[325px] h-[61px] overflow-hidden text-6xl text-white">
          <div className="absolute top-[15px] left-[calc(50%_-_33.5px)] font-semibold">
            PAGE
          </div>
        </div>
        <div
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onLANDINGPAGETextClick}
        >
          LANDING PAGE
        </div>
        <div
          className="absolute top-[calc(50%_-_144px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onOVERVIEWTextClick}
        >
          OVERVIEW
        </div>
        <div
          className="absolute top-[calc(50%_-_117px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onLISTRACEClick}
        >{`LIST RACE & PERSONALITY`}</div>
        <div
          className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onHOWTOPLAYClick}
        >
          HOW TO PLAY
        </div>
        <div
          className="absolute top-[calc(50%_-_63px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onHOWTOATTACKClick}
        >
          HOW TO ATTACK
        </div>
        <div
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onFAQTextClick}
        >
          FAQ
        </div>
        <div
          className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_137.5px)] font-medium cursor-pointer"
          onClick={onGLOSSARYTextClick}
        >
          GLOSSARY
        </div>
      </div>
      <b className="absolute top-[81px] left-[calc(50%_-_427px)] text-[40px] text-white">
        PATTERN LIBRARY WIKI SIMULATION GAME
      </b>
    </div>
  );
};

export default MacBookAir2;
