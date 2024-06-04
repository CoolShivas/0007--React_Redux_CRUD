import {
  configureStore,
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

// Creation of post action for reducer functions;
export const getActions = createAsyncThunk(
  "getUserData",
  async (getDataFromReadDispatch, { isRejectedWithValue }) => {
    const response = await fetch(
      `https://665e08e5e88051d604093478.mockapi.io/studentData`
    );

    try {
      const result = await response.json();
      console.log("GetingData", result); // Getting data;
      return result;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

// Creation of post action for reducer functions;
export const postActions = createAsyncThunk(
  "postUserData",
  async (getDataFromCreateDispatch, { isRejectedWithValue }) => {
    const response = await fetch(
      `https://665e08e5e88051d604093478.mockapi.io/studentData`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getDataFromCreateDispatch),
      }
    );

    try {
      const result = await response.json();
      console.log("PostingData", result); // Posting data;
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
    [postActions.pending]: (state, action) => {
      state.loading = true;
    },
    [postActions.fulfilled]: (state, action) => {
      state.loading = false;
      state.userArray.push(action.payload);
    },
    [postActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getActions.pending]: (state, action) => {
      state.loading = true;
    },
    [getActions.fulfilled]: (state, action) => {
      state.loading = false;
      state.userArray = action.payload;
    },
    [getActions.rejected]: (state, action) => {
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
