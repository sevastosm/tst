import React from "react";
import useCatLoverApp from "../../hooks/useCatLoverApp"
import { makeStyles } from "@material-ui/core/styles";
import {Link } from "@reach/router";
import Avatar from "@material-ui/core/Avatar";
import { ReactComponent as DefaultImage} from "../../assets/img/default_cat.svg";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    border: "5px solid pink",
    width: 100,
    height: 100,
    cursor:"pointer",
    margin:'5px'
  }
});

const FavouriteCatitem= (data:any)=> {
  const {getCatDetails}=useCatLoverApp()

  const classes = useStyles(makeStyles);

  let item = data.data
  let {url,id}=data.data.image

  return (
    <Link onClick={()=>getCatDetails(id)} state={{ catitem: item }} draggable to={`/cat/${id}`}>

{url?(<Avatar
  alt="Remy Sharp"
  src={url}
  className={classes.bigAvatar}
/>):<DefaultImage/>}
      
      
    
    </Link>
  );
}
export default FavouriteCatitem