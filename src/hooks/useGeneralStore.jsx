import create from 'zustand';

export const useGeneralStore = create((set,get) => ({
    formStatus: undefined,
    setFormStatus: (status) => set({formStatus: status}),

}))

export default useGeneralStore;