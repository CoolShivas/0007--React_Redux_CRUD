import {
  configureStore,
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

// Creation of action for reducer functions;
export const userActions = createAsyncThunk(
  "createuser",
  async (getDataFromDispatch, { isRejectedWithValue }) => {
    const response = await fetch(
      `https://665e08e5e88051d604093478.mockapi.io/studentData`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getDataFromDispatch),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

// Creation of Slice for reducer functions;
export const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    userArray: [],
    loading: false,
    error: null,
  },
  reducers: {
    [userActions.pending]: (state, action) => {
      state.loading = true;
    },
    [userActions.fulfilled]: (state, action) => {
      state.loading = false;
      state.userArray.push(action.payload);
    },
    [userActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

const reduxStore = configureStore({
  reducer: {
    unique: userSlice.reducer,
  },
});

export default reduxStore;
