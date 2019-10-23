import React, { useState } from 'react'
import useCatLoverApp from "../../hooks/useCatLoverApp"
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as DefaultImage } from "../../assets/img/default_cat.svg";

// const useStyles = [{
//   avatar: {
//     margin: 10
//   },
//   bigAvatar: {
//     border: "5px solid pink",
//     width: 100,
//     height: 100,
//     cursor: "pointer",
//     margin: '5px'
//   }
// }]

const CatItem = (data: any) => {
  const { getCatDetails } = useCatLoverApp()
  const [imageloaded, isLoaded] = useState(false);

  // const classes = useStyles(makeStyles);

  const handleImageLoaded = () => {
    console.log("sfddsfsdfsdf")
    isLoaded(true)
  }

  let item = data.data
  let { url, id } = data.data

  return (
    <Link onClick={() => getCatDetails(id)} state={{ catitem: item }} draggable to={`/cat/${id}`}>


      <div style={{ display: imageloaded ? 'block' : "none" }} className={"MuiAvatar-root makeStyles-bigAvatar"}><img alt="Remy Sharp" src={url ? url : ''} className="MuiAvatar-img" onLoad={handleImageLoaded} /></div>
      <DefaultImage style={{ display: !imageloaded ? 'block' : "none" }} />
    </Link>
  );
}
export default CatItem