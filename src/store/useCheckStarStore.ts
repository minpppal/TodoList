import { create } from "zustand";
import { persist } from "zustand/middleware";
import { checkStarTypes } from "@/types/checkStarTypes";

export const useCheckStarStore = create<checkStarTypes>()(
  persist(
    (set) => ({
      checkStar: {},
      setCheckStar: (id: string) =>
        set((state) => ({
          checkStar: {
            ...state.checkStar,
            [id]: !state.checkStar[id],
          },
        })),
    }),
    {
      name: "checkStar-storage", // 로컬 스토리지에 저장될 때 사용될 키
      getStorage: () => localStorage, // 로컬 스토리지 사용
    }
  )
);
