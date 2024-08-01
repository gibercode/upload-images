import { create } from "zustand";

const initialState = {
  loading: false,
};

export const useUiStore: any = create()((set) => ({
  ...initialState,
  setLoading: (state: boolean) => set(() => ({ loading: state })),
}));
