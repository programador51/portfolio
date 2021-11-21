/**
 * Open a url on a new tab
 * @param {string} url - Url to open
 */
export const openPage = url => {
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.click();
}

/**
 * Send a email with the software provider of the current computer
 * @param {string} email - Email 
 */
export const sendEmail = email => {
    const aTag = document.createElement("a");
    aTag.setAttribute("href", `mailto: ${email}`);
    aTag.setAttribute("target", "_blank");
    aTag.click();
}