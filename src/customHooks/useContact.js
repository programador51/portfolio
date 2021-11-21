import { useState } from "react";
import { copyToClipboard } from "../helpers/clipboard";
import { openPage, sendEmail } from "../helpers/links";
import { soundCloseFolder } from "../helpers/sounds";
import useStore from "../zustand";

export default function useContact() {

    const { setShowContact } = useStore();

    const [showAlert, setShowAlert] = useState(false);

    const githubUrl = 'https://github.com/programador51';
    const numberPhone = 5218111932475;

    const copyEmail = () => {
        copyToClipboard('programando51@gmail.com');
        setShowAlert(true);
    };

    const sendEmailProg51 = () => sendEmail('programando51@gmail.com');

    const copyGithubProfile = () => {
        copyToClipboard(githubUrl);
        setShowAlert(true);
    };

    const openGithubProfile = () => openPage(githubUrl);

    const openWhatsapp = () => openPage(`https://wa.me/${numberPhone}`);

    const copyPhoneNumber = () => {
        copyToClipboard('+52-81-1193-2475');
        setShowAlert(true);
    }

    const closeAlert = () => setShowAlert(false);

    const closeContact = () => {
        setShowContact(false);
        soundCloseFolder();
        setShowAlert(false);
    }



    return {
        copyEmail,
        copyGithubProfile,
        copyPhoneNumber,
        openGithubProfile,
        openWhatsapp,
        closeContact,
        showAlert,
        closeAlert,
        setShowAlert,
        sendEmailProg51
    }
}