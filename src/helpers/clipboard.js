
/**
 * Copy some text on the clipboard of the user
 * @param {string} text - Text to copy
 * @returns {void}
 */
export const copyToClipboard = (text) => navigator.clipboard.writeText(text).then(text => console.log(text));