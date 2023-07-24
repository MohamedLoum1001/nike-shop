import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

import React from 'react'

const Store = configureStore( {
 
    reducer:{
        cart:CartSlice
    }
} )


export default Store