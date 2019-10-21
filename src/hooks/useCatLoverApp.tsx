import { useContext, useEffect } from "react";
import { CatLoverAppContext } from "../CatLoverAppContext";
import catApis from "../helpers/apicalls";
import { Iappstate } from "../appstore/appState";

const useCatLoverApp = () => {
  const [state, setstate]: any = useContext(CatLoverAppContext);

  const getCatDetails = (id: String) => {
    let selectedCat = state.cats.filter((cat: any) => {
      return cat.id === id;
    });
    //  setSelectesCat(selectedCat)
    return selectedCat;
  };

  const handleLoadMore = () => {
    let num = state.pageNumber + 1;
    catApis.loadMoreCats(num).then((response: any) => {
      console.log(state);
      setCatBreedList(response.data);

      let newCatlist = [...state.catlist];
      newCatlist.push(...response.data);

      setstate((state: Iappstate) => ({
        ...state,
        catlist: newCatlist,
        pageNumber: num
      }));
    });
  };

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
        breedList.push(breedItem);
      }
      //}
    });
    let newCatBreedlist = [...state.breedsList];
    newCatBreedlist.push(...breedList);

    let prevlists = newCatBreedlist;
    console.log("No FILTERD BREED", newCatBreedlist);
    var jobsUnique = prevlists.filter(function(item, index) {
      return prevlists.indexOf(item) === index;
    });

    // Logs ["Fashion Designer", "Web Developer", "Web Designer"]
    console.log("FILTERD BREED", jobsUnique);

    //setstate((state: Iappstate) => ({ ...state, breedsList: jobsUnique }));
  };

  return {
    getCatDetails,
    handleLoadMore,
    catlist: state.catlist,
    selectedCat: state.selectedCat,
    favoriteList: state.favoriteList,
    dataLoaded: state.dataLoaded,
    breedsList: state.breedsList
  };
};

export default useCatLoverApp;
