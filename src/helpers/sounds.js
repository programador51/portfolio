export const sounds = {
    utopia_menu_command: `${process.env.PUBLIC_URL}/sounds/utopia_menu_command.WAV`
}

export const soundOpenFolder = () => {
    const sound = new Audio(sounds['utopia_menu_command']);
    sound.play();
}

export const soundCloseFolder = () => {
    const sound = new Audio(sounds['utopia_menu_command']);
    sound.play();
}