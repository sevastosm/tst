import React, { useState, useEffect } from "react";
import { Iappstate } from "./appstore/appState";
import catApis from "./helpers/apicalls";

// initilize
const CatLoverAppContext = React.createContext([{}, () => { }]);

const CatLoverAppProvider = (props: any) => {
  const [state, setState] = useState({
    catlist: [],
    pageNumber: 0,
    selectedCat: [],
    favoriteList: [],
    dataLoaded: false,
    breedsList: []
  });
  useEffect(() => {
    catApis.getTenRandomCats().then((response: any) => {
      // console.log("1 BREED");
      setState((state: any) => ({
        ...state,
        dataLoaded: true,
        catlist: response.data
      }));

      const setCatBreedList = (list: any) => {
        let breedList: any = [];
        let prevlist = state.breedsList;
        list.map((listitem: any) => {
          if (listitem.breeds[0]) {
            let breedItem = listitem.breeds[0];

            //     if(prevlist.length>0){
            //     let existitem = prevlist.filter((item: any) => {
            //         return item.id=== listitem.breeds[0].id;
            //     });

            //     console.log("exist", existitem);
            //     if (existitem.length ===1) {
            //         return
            //     }
            // }
            // else{
            if (breedItem !== [])
              breedList.push(breedItem);
          }
          //}
        });
        let newCatBreedlist: any = state.breedsList;
        newCatBreedlist.push(...breedList);
        let prevlists = new Array();
        prevlists = newCatBreedlist;
        console.log("No FILTERD BREED", prevlists);
        // const removeDuplicates = (originalArray: any, prop: any) => {
        //   var newArray = [];
        //   var lookupObject: any = {};

        //   for (var i in originalArray) {
        //     lookupObject[originalArray[i][prop]] = originalArray[i];
        //   }

        //   for (i in lookupObject) {
        //     newArray.push(lookupObject[i]);
        //   }
        //   return newArray;
        // }

        // var uniqueArray = removeDuplicates(prevlists, "id")




        const uniqueArray = prevlists.filter((thing: any, index: any) => {
          return index === prevlists.findIndex((obj: any) => {
            return JSON.stringify(obj) === JSON.stringify(thing);
          });
        });

        // Logs ["Fashion Designer", "Web Developer", "Web Designer"]
        console.log("FILTERD BREED", uniqueArray);

        setState((state: any) => ({ ...state, breedsList: uniqueArray }));
      };

      setCatBreedList(response.data);
    });
  }, []);
  return (
    <CatLoverAppContext.Provider value={[state, setState]}>
      {console.log("BREED state", state)}
      {props.children}
    </CatLoverAppContext.Provider>
  );
};
export { CatLoverAppContext, CatLoverAppProvider };
