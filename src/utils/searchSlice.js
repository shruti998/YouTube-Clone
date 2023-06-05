import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        cacheResult:(state,action)=>{
            //{"ip":["iphone","iphone11"]}
         state=Object.assign(state,action.payload);
        }
    }
});

export const {cacheResult}= searchSlice.actions;
export default searchSlice.reducer;


/**
 * Cache:
 * time complexity to search in array= O(n)
 * time complexity to search in object= O(1)
 * [i,ip,iph,iphone]
 * {i:
 * ip:
 * iph:
 * iphone
 * }
 */