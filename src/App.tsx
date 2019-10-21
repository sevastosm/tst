import React from "react";
import {CatLoverAppProvider} from "./CatLoverAppContext"
import { AppContext } from "./components/AppContext";
import { Router,RouteComponentProps } from "@reach/router";
import "./styles/app.scss";
// import catApis from "./helpers/apicalls";
import Grid from "./views/Catgrid/Grid";
// import appStore from "./appstore/appState";
import CatDetailsContainer from "./components/CatDetails"


const App: React.FC = () => {
  //  // Similar to componentDidMount and componentDidUpdate:
  //  useEffect(() => {
  //   getTenRandomCats()
  // });
  



  // const [cats, setData] = useState<any>(appStore.catlist);
  // const [num, setPageNumber] = useState<any>(appStore.pageNumer);
  // const [cat, setSelectesCat] = useState<any>(appStore.selectedCat);

  // const getCatDetails=(id:String)=>{

  //  let selectedCat = cats.filter((cat:any)=>{
  //  return cat.id===id
  //  })
  // //  setSelectesCat(selectedCat)
  //  return selectedCat
  // }

  // const handleLoadMore=()=>{
  //   setPageNumber(num+1)
  //   if(num<2)
  //   catApis.loadMoreCats().then((response:any) => {
  //     return setData([...cats,...response.data]);
  //    });
  // }

  // useEffect(() => {
  //   catApis.getTenRandomCats().then((response:any)=>{
  //    return setData(response.data);
  //   });

  // }, []);



  interface ICatDetailsProps extends RouteComponentProps
  {
    catId?: string;
  }
  let IGrid = (props: ICatDetailsProps) => <Grid />
  let ICatDetails = (props: ICatDetailsProps) => <CatDetailsContainer data={props} />

  
  
  return (
    <CatLoverAppProvider>
      <div>
      {/* <button onClick={handleLoadMore} >LOAD MORE</button>{num} */}
      <Router>
        <IGrid path="/"  />
        <ICatDetails path="/cat/:catId" />
      </Router>
      </div>
    </CatLoverAppProvider>
  );
};

export default App;
