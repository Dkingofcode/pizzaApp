import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';




//import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}


export const fetchAddress = createAsyncThunk( 'user/fetchAddress', { 


     async funtion () {

         // 1) We get the user's geolocation position
         const positionObj = await getPosition();
         const position = {
             latitude: positionObj.coords.latitude,
             longitude: positionObj.coords.longitude,
            };
            
    // 2) The we use a reverse geocoding API to get a description of the User's address, so that we csan display it in the form, so that the user can correct it
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode} ${addressObj?.countryName} `; 

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
})


const initialState = {
    username: '',
    status: 'idle',
    position: {},
    address: '',
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchAddress.pending, (state) => {
                state.status = 'loading';  // Removed `action` since it’s unused
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status = 'idle';
            })
            .addCase(fetchAddress.rejected, (state) => {
                state.status = 'error';  // Removed `action` since it’s unused
                state.error = 'There was a problem getting your address. Make sure to fill this field!';
            }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
