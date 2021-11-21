import React from "react";

import CustomBtn from "../Button/Index";

import ContainerContact from "./Styles";

export default function Index({
  logoPath = "/",
  txtFirstBtn = "OK",
  onClickFirstBtn = () => { },
  txtSecondBtn = "Close",
  onClickSecondBtn = () => { },
}) {
  return (
    <ContainerContact>
      <div>
        <img src={logoPath} />
      </div>
      <CustomBtn message={txtFirstBtn} onClick={() => onClickFirstBtn()} />

      <CustomBtn onClick={() => onClickSecondBtn()} message={txtSecondBtn} />
    </ContainerContact>
  );
}
