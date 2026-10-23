import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "../services/jobApi";

export const DEFAULT_FILTERS = {
  search: "",
  location: "India",
  workMode: "All",
  category: "",
  sort: "latest",
};

const initialState = {
  jobs: [],
  filters: DEFAULT_FILTERS,
  status: "idle",
  error: null,
  currentRequestId: null,
};

export const loadOpportunities = createAsyncThunk(
  "opportunities/load",
  async ({ keyword, location }, { rejectWithValue }) => {
    try {
      return await fetchJobs({ keyword, location });
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to load opportunities.");
    }
  },
);

const opportunitySlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    setOpportunityFilter(state, action) {
      const { key, value } = action.payload;
      if (Object.hasOwn(state.filters, key)) {
        state.filters[key] = value;
      }
    },
    clearOpportunityFilters(state) {
      state.filters = { ...DEFAULT_FILTERS };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOpportunities.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(loadOpportunities.fulfilled, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        state.jobs = action.payload.jobs;
        state.status = "succeeded";
        state.currentRequestId = null;
      })
      .addCase(loadOpportunities.rejected, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        state.status = "failed";
        state.error = action.payload || action.error.message || "Unable to load opportunities.";
        state.currentRequestId = null;
      });
  },
});

export const { setOpportunityFilter, clearOpportunityFilters } = opportunitySlice.actions;
export default opportunitySlice.reducer;