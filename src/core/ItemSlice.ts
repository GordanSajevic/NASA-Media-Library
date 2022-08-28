import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IItem } from '../model/Item';
import NasaService, { INasaService } from '../service/NasaService';

const initialState: IItem = {href: "", data: [], links: [], images: []};
const nasaService: INasaService = NasaService();

export const fetchImages = createAsyncThunk('fetchImages', async (params: any) => {
    const response = await nasaService.getJsonImages(params);
    return response;
})

const ItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        itemSelected(state, action){
            const item = action.payload;
            let existingItem = state;
            existingItem = item;
            return existingItem;
          }
    },
    extraReducers(builder) {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IItem = state;
            existingItem = item;
            return existingItem; 
        })
    }
})
export const { itemSelected } = ItemSlice.actions

export default ItemSlice.reducer;