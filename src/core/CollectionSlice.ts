import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ICollection } from '../model/Collection';
import NasaService, { INasaService } from '../service/NasaService';

const initialState: ICollection = {version: "", href: "", items: [], metadata: "", links: ""};
const nasaService: INasaService = NasaService();

export const fetchCollection = createAsyncThunk('fetchCollection', async (params: any) => {
    const response = await nasaService.search(params.query, params.yearStart, params.yearEnd, params.page);
    return response;
})

const CollectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchCollection.fulfilled, (state, action) => {
            const collection = action.payload;
            let existingCollection: ICollection = state;
            existingCollection = collection;
            return existingCollection; 
        })
    }
})

export default CollectionSlice.reducer;