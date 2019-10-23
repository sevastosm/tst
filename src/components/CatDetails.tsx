import React, { useEffect,useState } from "react";
import { ReactComponent as DefaultImage} from "../assets/img/default_cat.svg";
import useCatLoverApp from "../hooks/useCatLoverApp"

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 500,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const CatDetailsContainer =(props:any)=>{
  console.log("DAITAILS",props)
  const {selectedCat,setCatAsFavorite,getCatDetails,favoriteList,deleteFromFavorites}=useCatLoverApp()
  console.log("selectedCat",selectedCat)

  let isCatFavourite:any=[]
  
  const isFavorite = ()=>{
    let cat:any =[]
    if(favoriteList.length>0&&favoriteList&&selectedCat.length>0){
      cat = favoriteList.filter((cat:any)=>{
      return  cat.image_id===selectedCat[0].id
       })
       console.log("isfavorite",cat)}
       return cat
      }
  const [stateFavourite,setcatfavourite]= useState(false)

  const handleSetItemAsFaforite =()=>{
    setCatAsFavorite(selectedCat[0].id,selectedCat)

  }
  const handleDeletItemFromFavorites =()=>{
    deleteFromFavorites(isCatFavourite[0].id,selectedCat)
  }

  useEffect(() => {
   if(!props.data.location.state||favoriteList.length===0)
   {
    getCatDetails(props.data.catId)
     console.log("NOt HAS STATE")
   }
  
  }, []);
  useEffect(() => {

    isCatFavourite = isFavorite()
    if(isCatFavourite.length>0&& !stateFavourite){
      setcatfavourite(true)
    }
    if(isCatFavourite.length===0&& stateFavourite){
      setcatfavourite(false)
    }
   });
 

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
      {selectedCat.length==0?<DefaultImage/>:( <CardMedia
        className={classes.media}
        image={selectedCat[0].url}
        title="Paella dish"
        /> ) }
    
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{wordBreak:'break-all'}}>
        {JSON.stringify(props.data.location)} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {stateFavourite?<div onClick={handleDeletItemFromFavorites}>'X'</div>:<IconButton onClick={handleSetItemAsFaforite} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>}
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// const CatDetailsContainer = ({data,location}:any) => (
//   <AppContext.Consumer>
//     {context => <CatDetails context={[context, data,location]} />}
//   </AppContext.Consumer>
// );
export default CatDetailsContainer;
