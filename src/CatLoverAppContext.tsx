import React, { useState,useEffect } from 'react';
import catApis from "./helpers/apicalls";
import {removeDublicates}from "./helpers/general";


// initilize
const CatLoverAppContext=React.createContext([{}, () => {}]);
const CatLoverAppProvider =(props:any)=>{

  
  const [state, setState] = useState({
      catlist: [],
      pageNumber: 0,
      selectedCat: [],
      selectedBreed: "no",
      favoriteList:[],
      dataLoaded:false,
      catIdLoaded:"",
      breedsList:[],
      
    })

    useEffect(() => {
      catApis.getTenRandomCats().then((response: any) => {
       setCatBreedList(response.data);
      });
      catApis.getFavouritesList().then((response: any) => {
        setCatFavouriteList(response.data);
       });
    }, []);

    const setCatFavouriteList = (list:any) => {

      let catlist:any=list
      let previousCatlist: any = state.favoriteList;
      previousCatlist.push(...catlist);
      setState((state: any) => ({ ...state, favoriteList: previousCatlist }));
    };
    const setCatBreedList = (list:any) => {

      let breedList: any = [];
      let catlist:any=list
      list.map((listitem: any) => {
        if (listitem.breeds[0]) {
          let breedItem = listitem.breeds[0];
          if (breedItem !== [])
            breedList.push(breedItem);
        }
      });
      let previousCatlist: any = state.catlist;
      let previousCatBreedlist: any = state.breedsList;
      previousCatlist.push(...catlist);
      previousCatBreedlist.push(...breedList);
      console.log("No FILTERD CaTS BREED", previousCatlist);
      console.log("No FILTERD BREED", previousCatBreedlist);
      const filteredCatsList = removeDublicates(previousCatlist)
      const filteredBreedList = removeDublicates(previousCatBreedlist)
      // Logs ["Fashion Designer", "Web Developer", "Web Designer"]
      console.log("FILTERD CATS BREED", filteredCatsList);
      console.log("FILTERD BREED", filteredBreedList);
      setState((state: any) => ({ ...state, breedsList: filteredBreedList,catlist: filteredCatsList, dataLoaded: true, }));
    };


    return (
        <CatLoverAppContext.Provider value={[state, setState]}>
          {console.log('APP STATE',state)}
          {props.children}
        </CatLoverAppContext.Provider>
      );
}
export {CatLoverAppContext,CatLoverAppProvider}