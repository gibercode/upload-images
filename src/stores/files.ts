import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  files: Array<any>;
  setData: (data: any) => any;
};

const initialState = {
  files: [],
};

export const useFileStore = create<UserState>()((set) => ({
  ...initialState,
  setData: (data: Array<any>) =>
    set((state: UserState) => ({ ...state, files: data })),
}));
