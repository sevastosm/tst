import React from "react";
import { ReactComponent as FavoriteCatsBasket } from "../../assets/img/favoriteCatsBasket.svg";
import CatItem from "./CatItem";
import FavouriteCatitem from "./FavouriteCatitem";

import useCatLoverApp from "../../hooks/useCatLoverApp";
import Catbreedlist from "../Carbreed/Catbreedlist";
import Slide from "@material-ui/core/Slide";

const Grid: React.FC = (...props) => {
  const {
    catlist,
    favoriteList,
    handleLoadMore,
    selectedBreed
  } = useCatLoverApp();
  {
    console.log("datat:", props);
  }

  return (
    <div>
      <div>
        <div></div>
        <div className={"favouriteslist d-flex fl-wrap"}>
          {favoriteList.map((cat: any) => {
            return (
              <Slide
                key={cat.id}
                direction="down"
                timeout={{ enter: 1000 }}
                in={true}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {" "}
                  <FavouriteCatitem key={cat.id} data={cat} />
                </div>
              </Slide>
            );
          })}
          <FavoriteCatsBasket />
        </div>
      </div>

      <Catbreedlist />
      <button onClick={() => handleLoadMore()}>Load more cats</button>
      <div className={"d-flex fl-wrap catgrid"}>
        <div onDragEnter={() => alert("fsdfsdfsdfsd")}></div>
        {console.log("datat:", catlist)}
        {catlist.map((cat: any) => {
          if (selectedBreed !== "no") {
            if (cat.breeds.length > 0 && cat.breeds[0].id === selectedBreed) {
              return (
                <Slide
                  key={cat.id}
                  direction="down"
                  timeout={{ enter: 1000 }}
                  in={true}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>
                    {" "}
                    <CatItem key={cat.id} data={cat} />
                  </div>
                </Slide>
              );
            }
          } else {
            return (
              <Slide
                key={cat.id}
                direction="down"
                timeout={{ enter: 1000 }}
                in={true}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {" "}
                  <CatItem key={cat.id} data={cat} />
                </div>
              </Slide>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Grid;
