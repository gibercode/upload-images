import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  files: [],
};

export const useFileStore: any = create()(
  persist(
    (set) => ({
      ...initialState,
      setData: (data: any[]) => set(() => ({ files: data })),
    }),
    {
      name: "file",
    }
  )
);
