import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { Movie } from "../types/Types";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/movie/popular"

export const getAllMovies = createAsyncThunk<Movie[]>(
    "films/getAllMovies",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-EN'
                }
            });
            return response.data.results;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || "Filmler yüklenemedi.");
        }
    }
);


interface MovieState {
    movies: Movie[];
    favorites: Movie[];
    loading: boolean;
    error: string | null;
}
const initialState: MovieState = {
    movies: [],
    favorites: [],
    loading: false,
    error: null,
};
export const movieSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addMovieToFavorite: (state, action) => {
            const newid = action.payload
            const movie = state.movies.find(m => m.id === newid);
            if (!movie) return

            const isExist = state.favorites.some(f => f.id === newid)
            if (isExist) return;

            state.favorites.push(movie)
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
            console.log(localStorage.getItem("favorites"))

        }


    }, extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state) => {
            console.log("PENDING ÇALIŞTI !!!");

            state.loading = true
            state.error = null
        }).addCase(getAllMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload
            state.loading = false
        }).addCase(getAllMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export const { addMovieToFavorite } = movieSlice.actions

export default movieSlice.reducer