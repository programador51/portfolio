import React from "react";
import { Folder } from "@react95/icons";
import styled from "styled-components";

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
    border-style: dotted;
  }
`;

export default function Index({ icon = <Folder />, name = "Nueva carpeta" }) {
  return (
    <ContainerIcon>
      {icon}
      {name}
    </ContainerIcon>
  );
}
