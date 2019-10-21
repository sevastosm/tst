import React, { useEffect, useState } from "react";
import { ReactComponent as DefaultImage} from "../assets/img/default_cat.svg";
import Avatar from "@material-ui/core/Avatar";
import useCatLoverApp from "../hooks/useCatLoverApp";
import { RouteComponentProps } from "@reach/router";

// interface ICatDetailsProps extends RouteComponentProps {
//   catId?: string;
//   data?: any;
// }

// class CatDetails extends React.Component<any, any> {
//   public constructor(props: any) {
//     super(props);
//     this.state = {
//       selectedcat: []
//     };
//   }
//   public componentWillMount() {
//     console.log(this.props);

//     let cat = this.props.context[0].getCatDetails(
//       this.props.context[1].catId
//     );
//     this.setState({ selectedcat: cat });
//   }

//   // public componentDidUpdate(prevProps: any, prevState: any) {
//   //   if (prevProps[0].cat !== this.props[0].cat) {
//   //     this.props.context[0].getCatDetails(this.props[1].data.catId);
//   //   }
//   // }

//   render() {
//     return (
//       <div className={"d-flex fl-wrap catdetaisl"}>
//         <div onDragEnter={() => alert("fsdfsdfsdfsd")}></div>
//         {/* {appState.getCatDetails(props.data.catId)} */}
//         <div><img src={this.props.context[1].location.state.catitem.url}/></div>
//       </div>
//     );
//   }
// }

const CatDetailsContainer =(...props:any)=>{


  const [selectedCat,steCat]:any=useState({})
   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
     console.log('here')
    // Update the document title using the browser API
    const cat = setSelectedCat()
    steCat(cat)
  });

 

  const setSelectedCat =()=>{
    let catt
    if(props[0].data.location.state){
      catt=props[0].data.location.state.catitem
      }
      return catt
  }

    return (
      <div className={"d-flex fl-wrap catdetaisl"}>
        <div onDragEnter={() => alert("fsdfsdfsdfsd")}></div>
          <div>
          {selectedCat?(<img src={selectedCat.url}/>):<DefaultImage/>
            }
          </div>
      </div>
    );
  
}

// const CatDetailsContainer = ({data,location}:any) => (
//   <AppContext.Consumer>
//     {context => <CatDetails context={[context, data,location]} />}
//   </AppContext.Consumer>
// );
export default CatDetailsContainer;
