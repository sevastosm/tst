import React from "react";
import { ReactComponent as FavoriteCatsBasket } from "../../assets/img/favoriteCatsBasket.svg";
import CatItem from "./CatItem";
import FavouriteCatitem from "./FavouriteCatitem";
import useCatLoverApp from "../../hooks/useCatLoverApp";
import Catbreedlist from "../Catbreed/Catbreedlist";
import Button from "@material-ui/core/Button";

const Grid = (props: any) => {
  const {
    catlist,
    favoriteList,
    handleLoadMore,
    selectedBreed
  } = useCatLoverApp();
  {
    console.log("datat:", props);
  }

  const FavoriteList = () => {
    return (
      <div className="d-flex fl-wrap ">
        {favoriteList.map((cat: any) => {
          return (
         
              <div>
                {" "}
                <FavouriteCatitem key={cat.id} data={cat} />
              </div>
          );
        })}
        {/* <FavoriteCatsBasket /> */}
      </div>
    );
  };
  const RandomCatsList = () => {
    return (
      <div className="d-flex fl-wrap ">
        {catlist.map((cat: any) => {
          if (selectedBreed !== "no") {
            if (cat.breeds.length > 0 && cat.breeds[0].id === selectedBreed) {
              return <CatItem key={cat.id} data={cat} />;
            }
          } else {
            return <CatItem key={cat.id} data={cat} />;
          }
        })}
      </div>
    );
  };

  return (
    <div>
      {props.data.path === "/breeds"?
      <Catbreedlist />:null}
      <div className={"catgrid"}>
        {props.data.path === "/favourites" ? (
          <FavoriteList />
        ) : (
          <RandomCatsList />
        )}
      </div>
      {props.data.path === "/" ? (
      <Button
        onClick={() => handleLoadMore()}
        variant="contained"
        color="primary"
      >
        Load More Cats !!!
      </Button>):null}
    </div>
  );
};

export default Grid;
