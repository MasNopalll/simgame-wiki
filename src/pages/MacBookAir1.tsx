import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const MacBookAir1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/navbar");
  }, [navigate]);

  const onFrameLink1Click = useCallback(() => {
    navigate("/troubleshooting");
  }, [navigate]);

  const onFrameLink2Click = useCallback(() => {
    navigate("/important-fact");
  }, [navigate]);

  const onFrameLink3Click = useCallback(() => {
    navigate("/landing-page-1");
  }, [navigate]);

  const onFrameLink4Click = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onFrameLink5Click = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const onFrameLink6Click = useCallback(() => {
    navigate("/bottom-navigation");
  }, [navigate]);

  const onFrameLink7Click = useCallback(() => {
    navigate("/stepper");
  }, [navigate]);

  const onFrameLink8Click = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onFrameLink9Click = useCallback(() => {
    navigate("/problem");
  }, [navigate]);

  const onFrameLink10Click = useCallback(() => {
    navigate("/content-list");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[832px] overflow-hidden text-left text-smi text-black font-inter">
      <b className="absolute top-[80px] left-[calc(50%_-_88px)] text-xl text-white">
        PATTERN LIBRARY
      </b>
      <a
        className="[text-decoration:none] absolute top-[166px] left-[192px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[35px] items-start justify-center cursor-pointer text-[inherit] border-[1px] border-solid border-silver-200"
        onClick={onFrameLinkClick}
      >
        <div className="relative font-semibold">NAVIGATION</div>
      </a>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[351px] left-[192px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col items-center justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/troubleshooting"
        onClick={onFrameLink1Click}
      >
        <div className="relative font-semibold">TROUBLESHOOTING</div>
      </Link>
      <a
        className="[text-decoration:none] absolute top-[166px] left-[1122px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[18px] items-start justify-center cursor-pointer text-[inherit] border-[1px] border-solid border-silver-200"
        onClick={onFrameLink2Click}
      >
        <div className="relative font-semibold">IMPORTANT FACT</div>
      </a>
      <a
        className="[text-decoration:none] absolute top-[166px] left-[378px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[27px] items-start justify-center cursor-pointer text-[inherit] border-[1px] border-solid border-silver-200"
        onClick={onFrameLink3Click}
      >
        <div className="relative font-semibold">LANDING PAGE</div>
      </a>
      <a
        className="[text-decoration:none] absolute top-[351px] left-[378px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[55px] items-start justify-center cursor-pointer text-[inherit] border-[1px] border-solid border-silver-200"
        onClick={onFrameLink4Click}
      >
        <div className="relative font-semibold">TABLE</div>
      </a>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[166px] left-[564px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col items-center justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/overview"
        onClick={onFrameLink5Click}
      >
        <div className="relative font-semibold">OVERVIEW</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[351px] left-[564px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[35px] items-start justify-center text-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/overview"
        onClick={onFrameLink6Click}
      >
        <div className="relative font-semibold">
          <p className="m-0">{`BOTTOM `}</p>
          <p className="m-0">NAVIGATION</p>
        </div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[166px] left-[750px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-[46px] items-start justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/stepper"
        onClick={onFrameLink7Click}
      >
        <div className="relative font-semibold">STEPPER</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[351px] left-[750px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col items-center justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/faq"
        onClick={onFrameLink8Click}
      >
        <div className="relative font-semibold">FAQ</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[166px] left-[936px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col py-0 px-11 items-start justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/problem"
        onClick={onFrameLink9Click}
      >
        <div className="relative font-semibold">PROBLEM</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[351px] left-[936px] rounded-xl bg-white box-border w-[152px] h-[141px] overflow-hidden flex flex-col items-center justify-center text-[inherit] border-[1px] border-solid border-silver-200"
        to="/content-list"
        onClick={onFrameLink10Click}
      >
        <div className="relative font-semibold">CONTENT LIST</div>
      </Link>
    </div>
  );
};

export default MacBookAir1;
