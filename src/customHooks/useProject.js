import { useState } from "react"
import { openPage } from "../helpers/links"
import useStore from "../zustand";
import { soundCloseFolder, soundOpenFolder } from "../helpers/sounds";

export default function useProject() {

    const { setShowProjects } = useStore();

    const [projects, setProjects] = useState([
        {
            title: 'To Do 51',
            logo: 'img/todo51.png',
            description: 'Organiza tus tareas del dia, completadas y por hacer',
            frontTools: [
                "webpack",
                "bootstrap 5",
                "jsDoc"
            ],
            backTools: [
                "nestjs",
                "jsDoc"
            ],
            other: [
                "MySQL (sin ORM)",
                "clever-cloud",
                "netlify",
                "heroku"
            ],
            playDemo: () => openPage('https://xenodochial-curie-9f76f0.netlify.app/todo'),
            openGithub: () => openPage('https://github.com/programador51/todofront')
        },
        {
            title: 'js-smart-table',
            logo: 'img/js_smart_table.png',
            description: 'Tabula, ordena, pagina y selecciona los datos',
            frontTools: [
                "webpack",
                "typescript",
                "jsDoc"
            ],
            backTools: [],
            other: [
                "npm"
            ],
            playDemo: () => openPage('https://youthful-hopper-033b16.netlify.app/'),
            openGithub: () => openPage('https://www.npmjs.com/package/js-smart-table')
        }
    ]);

    const closeProject = () => {
        setShowProjects(false);
        soundCloseFolder();
    }

    const openProject = () => {
        setShowProjects(true);
        soundOpenFolder();
    }

    return {
        projects,
        closeProject,
        openProject
    }
}