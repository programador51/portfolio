import { Modal } from "@react95/core";
import React, { useState } from "react";

import styled from "styled-components";

const AboutMe = styled.div`
  p {
    margin: 0;
  }
`;

export default function Index() {
  const [showAboutMe, setShowAboutMe] = useState(true);

  return (
    <div>
      {showAboutMe ? (
        <Modal
          title="Bienvenido"
          closeModal={() => setShowAboutMe(false)}
          defaultPosition={{
            x: window.screen.width / 2 - 200,
            y: window.screen.height / 2 - 250,
          }}
        >
          <AboutMe>
            <h1>Un poco de mi...</h1>
            <p>
              Me presento, Jose Luis (programador51), desarrollador web en
              javascript.
            </p>
            De mayor a menor, mis fuertes son:
            <ol>
              <li>Front-end (React.js)</li>
              <li>Back-end (express.js)</li>
              <li>Base de datos relacional (MySQL , SQL Server)</li>
            </ol>
            <p>
              <b>Nov 2020 - Actualidad</b>
            </p>
            <p>
              Me encuentro trabajando en Grupo Saiko realizando un sistema para
            </p>
            <p>
              gestionar las ventas y facturar las cotizaciones de dichas ventas.
            </p>
          </AboutMe>
        </Modal>
      ) : null}
    </div>
  );
}
