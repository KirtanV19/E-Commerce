// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../API/auth";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await auth.get("/users");
      const user = res.data.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        return thunkAPI.rejectWithValue("Invalid username or password");
      }

      const userInfo = {
        username: user.username,
        password: user.password,
      };

      localStorage.setItem("user", JSON.stringify(userInfo));
      return userInfo;
    } catch (err) {
      return thunkAPI.rejectWithValue("Login failed. Please try again.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
