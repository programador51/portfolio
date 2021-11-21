import useStore from "../zustand";
import { soundCloseFolder, soundOpenFolder } from "../helpers/sounds";

export default function useDesktop() {
    const { setShowContact, setShowProjects } = useStore();

    const openContact = () => {
        setShowContact(true);
        soundOpenFolder();
    }

    const showProjects = () => {
        setShowProjects(true);
        soundOpenFolder();
    }

    return {
        openContact,
        showProjects
    }
}