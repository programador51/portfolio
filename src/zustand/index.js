import create from "zustand";

const useStore = create(set => ({
    showContact: false,
    showProjects: false,
    setShowContact: mustShow => set(state => ({
        showContact: mustShow
    })),
    setShowProjects: mustShow => set(state => ({
        showProjects: mustShow
    }))
}));

export default useStore;