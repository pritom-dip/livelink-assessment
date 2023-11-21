'use client';

import { ICreator } from '@/types/creator';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICreator[] = [];

export const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {}
});

export const {} = creatorSlice.actions;

export default creatorSlice.reducer;
