import React, { useState } from 'react';
import {Iappstate} from "./appstore/appState"

// initilize
const CatLoverAppContext=React.createContext([{}, () => {}]);

const CatLoverAppProvider =(props:any)=>{
    const [state, setState] = useState({
      catlist: [],
      pageNumber: 0,
      selectedCat: [],
      favoriteList:[],
      dataLoaded:false,
      breedsList:[]
    })
    return (
        <CatLoverAppContext.Provider value={[state, setState]}>
          {console.log('state',state)}
          {props.children}
        </CatLoverAppContext.Provider>
      );
}
export {CatLoverAppContext,CatLoverAppProvider}