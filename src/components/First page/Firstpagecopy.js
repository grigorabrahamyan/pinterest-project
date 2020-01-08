import React, {useEffect, useState} from 'react';
//import tileData from './tileData';\
import firebase from '../login/firebase/firebase';
import './FirstPage.css'
import './FirstPageTest.css'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
	  maxWidth: 345,
	  maxHeight: '100%'
	}
  });


const db = firebase.firestore();

async function getImages() {
	const userImages = await db.collection('images').doc('ZcJpWVTfU1VH14yMWFv2aNKZqgv1').get();
	return userImages;
}

getImages().then(data => {
             console.log(data.data())
           })



           ///

           async function getImages1() {
            const userImages = await db.collection('images').get();
            return userImages;
        }
        
        getImages1().then(data => {
                     console.log(data.data())
                   })




////////////////////////////////////////////------Prosto testa, verjum jnjel


// async function getImages() {
// 	const oneImage = await db.collection('images').doc("1215vtUrf8W4MRheOL4J").get();
// 	return oneImage;
// }

// getOneImages().then(data => {
//         console.log(data.data()

//         })

///////////////////////////////////////////-----------------------



export default function GetUserImages() {
	
  const [data, setData] = useState([]);
  const[randomData, setRandomData] = useState([])

  useEffect(() => {
	const arr = [];
	const randArr = [];
	getImages().then(doc => {
		doc.forEach(img => {
			arr.push(
				{
					imgUrl: img.data().imgUrl,
					nameOfCategory: img.data().topicId,
					id: img.data().userId,
				}
			)
		});
		
	

		// while(randArr.length < 24){
		// 	let r = Math.floor(Math.random() * 25) + 1;
		// 	if(randArr.indexOf(arr[r]) === -1) randArr.push(arr[r]);
		// }
		setData(arr);
	});
	
  }, []);
  
  console.log(data)



	const classes = useStyles();
  
	return (
		<div className={classes.root}>
			{data.map(tile => (
			  <Card className={classes.card}  style={{float: 'left', margin: '10px'}}>
			  <CardActionArea >
				<CardMedia
				style={{width: '100%', height: '30%', maxHeight: '30%'
			}}
				  component="img"
				  alt="Contemplative Reptile"
				  height="140"
				  image={tile.imgUrl}
				  title="Contemplative Reptile"
				/>
				<CardContent>
				  <Typography gutterBottom variant="h5" component="h2">
				  {tile.topicId}
				  </Typography>
				  <Typography variant="body2" color="textSecondary" component="p">
					Lizards are a widespread group of squamate reptiles
				  </Typography>
				</CardContent>
			  </CardActionArea>
			  </Card>
			))}
		</div>
	  );


	//   <Card className={classes.card}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt="Contemplative Reptile"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //         across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
	//   </Card>






	// return (
	//   <div className={classes.root} style={{height: '100vh'}} >
	// 	<GridList cellHeight={180} className={classes.gridList}>
	// 	  <GridListTile key="Subheader" cols={4} style={{ height: 'auto',  }}>
			
	// 	  </GridListTile>
	// 	  {data.map(tile => (
	// 		<GridListTile key={tile.imgUrl} style={{width: '20%', height: '100%'}} >
	// 		  <img src={tile.imgUrl} alt={tile.title} />
	// 		  <GridListTileBar
	// 			title={tile.title}
	// 			subtitle={<span>by: {tile.author}</span>}
	// 			actionIcon={
	// 			  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
	// 				<InfoIcon />
	// 			  </IconButton>
	// 			}
	// 		  />
	// 		</GridListTile>
	// 	  ))}
	// 	</GridList>
	//   </div>
	// );
  
}



















// import React, {useEffect, useState} from 'react';
// //import tileData from './tileData';\
// import firebase from '../login/firebase/firebase';
// import './FirstPage.css'

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// //import tileData from './tileData';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 	  display: 'flex',
// 	  flexWrap: 'wrap',
// 	  justifyContent: 'space-around',
// 	  overflow: 'hidden',
// 	  backgroundColor: theme.palette.background.paper,
// 	},
// 	gridList: {
// 	  width: '100%',
// 	  height: 400,
// 	  overflowX: 'hidden'
// 	},
// 	icon: {
// 	  color: 'rgba(255, 255, 255, 0.54)',
// 	},
// 	img:{
//   width:'20%'
// 	}
//   }));



// const db = firebase.firestore();

// async function getRandomImages() {
// 	const randomImagesData = await db.collection('images').get();
// 	return randomImagesData;
// }

// export default function GetArr() {
	
//   const [data, setData] = useState([]);
//   const[randomData, setRandomData] = useState([])

//   useEffect(() => {
// 	const arr = [];
// 	const randArr = []
// 	getRandomImages().then(doc => {
// 		doc.forEach(img => {
// 			arr.push(
// 				{
// 					imgUrl: img.data().imgUrl,
// 					nameOfCategory: img.data().topicId,
// 					id: img.data().userId,
// 				}
// 			)
// 		});

// 		while(randArr.length < 25){
// 			let r = Math.floor(Math.random() * 25) + 1;
// 			if(randArr.indexOf(arr[r]) === -1) randArr.push(arr[r]);
// 		}
// 		setData(randArr);
// 	});
	
//   }, []);
  
//   console.log(data)



// 	const classes = useStyles();
  
// 	return (
// 	  <div className={classes.root} style={{height: '100vh'}} >
// 		<GridList cellHeight={180} className={classes.gridList}>
// 		  <GridListTile key="Subheader" cols={4} style={{ height: 'auto',  }}>
			
// 		  </GridListTile>
// 		  {data.map(tile => (
// 			<GridListTile key={tile.imgUrl} style={{width: '20%', height: '100%'}} >
// 			  <img src={tile.imgUrl} alt={tile.title} />
// 			  <GridListTileBar
// 				title={tile.title}
// 				subtitle={<span>by: {tile.author}</span>}
// 				actionIcon={
// 				  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
// 					<InfoIcon />
// 				  </IconButton>
// 				}
// 			  />
// 			</GridListTile>
// 		  ))}
// 		</GridList>
// 	  </div>
// 	);
  
// }
