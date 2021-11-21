import React from "react";
import DeskIcon from "../../atoms/DeskIcon/Index";

import { FilePencil, Fontext2 } from "@react95/icons";

import styled from "styled-components";

import useDesktop from "../../customHooks/useDesktop";
import useToolbar from "../../customHooks/useToolbar";

const ContainerIcons = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(12, 8.33vw);
  grid-template-rows: repeat(8, 12.5vh);
  grid-auto-flow: column;
  align-items: center;
  * {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border:1px solid black; */
  }
`;

export default function Index() {
  const { openContact, showProjects } = useDesktop();
  const { openBlog } = useToolbar();

  return (
    <ContainerIcons>
      <div onClick={openContact}>
        <DeskIcon name="Contacto" />
      </div>

      <div onClick={showProjects}>
        <DeskIcon name="Proyectos" />
      </div>

      {/* <DeskIcon icon={<Fontext2 />} name="descargar_cv.pdf" /> */}

      <div onClick={openBlog}>
        <DeskIcon icon={<FilePencil />} name="Blog - dev.to" />
      </div>
    </ContainerIcons>
  );
}
