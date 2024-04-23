import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { langReducer } from "@/store/slices/langSlice";
import { createWrapper } from "next-redux-wrapper";
// Redux Toolkit을 사용하여 스토어 생성
export const makeStore = () =>
  configureStore({
    reducer: {
      lang: langReducer, // 수정된 부분
    },
    devTools: true,
  });

// 스토어와 상태에 대한 타입 선언
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// Next.js와 연결을 위한 wrapper 생성
export const wrapper = createWrapper<AppStore>(makeStore);
