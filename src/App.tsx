import React from "react";
import {CatLoverAppProvider} from "./CatLoverAppContext"
import { AppContext } from "./components/AppContext";
import { Router,RouteComponentProps } from "@reach/router";
import "./styles/app.scss";
import Grid from "./views/Catgrid/Grid";
// import appStore from "./appstore/appState";
import CatDetailsContainer from "./components/CatDetails"
import Catbreedlist from "./views/Carbreed/Catbreedlist"


const App: React.FC = () => {
  interface ICatDetailsProps extends RouteComponentProps
  {
    catId?: string;
  }
  let IGrid = (props: ICatDetailsProps) => <Grid />
  let ICatDetails = (props: ICatDetailsProps) => <CatDetailsContainer data={props} />
  let ICatBreeds = (props: ICatDetailsProps) => <Catbreedlist data={props} />


  
  
  return (
    <CatLoverAppProvider>
      <div>
      {/* <button onClick={handleLoadMore} >LOAD MORE</button>{num} */}
      <Router>
        <IGrid path="/"  />
        <ICatDetails path="/cat/:catId" />
        <ICatBreeds path="/breeds" />

      </Router>
      </div>
    </CatLoverAppProvider>
  );
};

export default App;
