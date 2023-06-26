import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DefaultForm from "../components/FormComponent";
import React, { useState } from 'react';

const Calculator: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcoutlineHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkslategray-100 w-full h-[2388px] overflow-hidden text-right text-77xl text-white font-inter">
      <b className="absolute top-[1374px] left-[1179px] ">
      </b>
      <img
        className="absolute top-[0px] left-[50px] w-[75px] h-[63px] overflow-hidden cursor-pointer"
        alt=""
        src="/icoutlinehome.svg"
        onClick={onIcoutlineHomeClick}
      />
      <div className="absolute top-[146px] left-[50px] bg-gray-200 w-[1280px] overflow-hidden text-left text-6xl">
        <DefaultForm/>
      </div>
      
    </div>
  );
};

export default Calculator;
