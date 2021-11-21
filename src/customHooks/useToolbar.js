import { openPage } from "../helpers/links"

export default function useToolbar() {
    const openBlog = () => openPage('https://dev.to/programador51');

    return {
        openBlog
    }
}