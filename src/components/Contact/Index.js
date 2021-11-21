import React, { useEffect, useState } from "react";
import { Modal, Alert } from "@react95/core";
import { Wmsui325900 } from "@react95/icons";
import ContactItem from "../../atoms/ContactItem/Index";
import ContainerContact from "./Styles";

import useStore from "../../zustand/index";
import useContact from "../../customHooks/useContact";

export default function Index() {
  const { showContact } = useStore();
  const {
    copyEmail,
    copyPhoneNumber,
    copyGithubProfile,
    openGithubProfile,
    openWhatsapp,
    closeContact,
    showAlert,
    closeAlert,
    sendEmailProg51
  } = useContact();

  const contacts = [
    {
      logo: "/img/gmail.png",
      firstBtn: {
        text: "Enviar e-mail",
        cb: sendEmailProg51,
      },
      secondBtn: {
        text: "Copiar e-mail",
        cb: copyEmail,
      },
    },
    {
      logo: "/img/github.png",
      firstBtn: {
        text: "Abrir github",
        cb: openGithubProfile,
      },
      secondBtn: {
        text: "Copiar link",
        cb: copyGithubProfile,
      },
    },
    {
      logo: "/img/whatsapp.png",
      firstBtn: {
        text: "Enviar mensaje",
        cb: openWhatsapp,
      },
      secondBtn: {
        text: "Copiar numero",
        cb: copyPhoneNumber,
      },
    },
  ];

  return (
    <div>
      {showAlert ? (
        <Alert
          title="Texto copiado"
          type="info"
          hasSound={false}
          buttons={[
            {
              value: "Ok",
              onClick: closeAlert,
            },
          ]}
          message="Copiado (Puedes hacer Ctrl + V)"
        />
      ) : null}

      {showContact ? (
        <Modal
          closeModal={() => closeContact(false)}
          icon={<Wmsui325900 />}
          title="Contacto"
          width="400"
          height="350"
          defaultPosition={{
            x: window.screen.width / 2 - 200,
            y: window.screen.height / 2 - 250,
          }}
        >
          <p>Contesto mas rapido por un mensaje de whatsapp</p>
          <ContainerContact>
            {contacts.map((contact) => (
              <ContactItem
                logoPath={contact.logo}
                txtFirstBtn={contact.firstBtn.text}
                onClickFirstBtn={() => contact.firstBtn.cb()}
                txtSecondBtn={contact.secondBtn.text}
                onClickSecondBtn={() => contact.secondBtn.cb()}
              />
            ))}
          </ContainerContact>
        </Modal>
      ) : null}
    </div>
  );
}
