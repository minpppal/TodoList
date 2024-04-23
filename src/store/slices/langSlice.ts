import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 슬라이스의 이름을 상수로 정의
const langSliceType = "slice/lang";

// 초기 언어 상태를 인터페이스로 정의
export interface ILangState {
  lang: string;
}

// 초기 상태 정의
const initialState: ILangState = {
  lang: "en", // 기본 언어는 "en"으로 설정
};

// 슬라이스 생성
const langSlice = createSlice({
  name: langSliceType, // 슬라이스의 이름 설정
  initialState, // 초기 상태 설정
  reducers: {
    // 언어 변경 액션 및 리듀서
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload; // 새로운 언어 값으로 상태 업데이트
    },
  },
});

// 액션과 리듀서 내보내기
export const { changeLang } = langSlice.actions;
export const langReducer = langSlice.reducer;
