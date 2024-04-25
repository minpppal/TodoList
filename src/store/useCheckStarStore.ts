import { create } from "zustand";
import { checkStarTypes } from "@/types/checkStarTypes";

export const useCheckStarStore = create<checkStarTypes>((set) => ({
  checkStar: {},
  setCheckStar: (id) =>
    set((state) => ({
      checkStar: {
        ...state.checkStar,
        [id]: !state.checkStar[id],
      },
    })),
}));
