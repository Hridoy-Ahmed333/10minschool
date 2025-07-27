import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  lan: "en" | "bn";
}

const initialState: LanguageState = {
  lan: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<"en" | "bn">) {
      state.lan = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
