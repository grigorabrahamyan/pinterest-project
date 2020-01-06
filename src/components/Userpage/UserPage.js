import React, {useEffect, useState} from 'react';
//import tileData from './tileData';\
import firebase from '../login/firebase/firebase';
import './FirstPage.css'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent: 'space-around',
	  overflow: 'hidden',
	  backgroundColor: theme.palette.background.paper,
	},
	gridList: {
	  width: '100%',
	  height: 400,
	  overflowX: 'hidden'
	},
	icon: {
	  color: 'rgba(255, 255, 255, 0.54)',
	},
	img:{
  width:'20%'
	}
  }));



const db = firebase.firestore();

async function getRandomImages() {
	const randomImagesData = await db.collection('images').get();
	return randomImagesData;
}

export default function GetArr() {
	
  const [data, setData] = useState([]);
  const[randomData, setRandomData] = useState([])

  useEffect(() => {
	const arr = [];
	const randArr = []
	getRandomImages().then(doc => {
		doc.forEach(img => {
			arr.push(
				{
					imgUrl: img.data().imgUrl,
					nameOfCategory: img.data().topicId,
					id: img.data().userId,
				}
			)
		});

		while(randArr.length < 25){
			let r = Math.floor(Math.random() * 25) + 1;
			if(randArr.indexOf(arr[r]) === -1) randArr.push(arr[r]);
		}
		setData(randArr);
	});
	
  }, []);
  
  console.log(data)



	const classes = useStyles();
  
	return (
	  <div className={classes.root} style={{height: '100vh', background: 'green'}} >
		<GridList cellHeight={180} className={classes.gridList}>
		  <GridListTile key="Subheader" cols={4} style={{ height: 'auto',  }}>
			
		  </GridListTile>
		  {data.map(tile => (
			<GridListTile key={tile.imgUrl} style={{width: '20%', height: '100%'}} >
			  <img src={tile.imgUrl} alt={tile.title} />
			  <GridListTileBar
				title={tile.title}
				subtitle={<span>by: {tile.author}</span>}
				actionIcon={
				  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
					<InfoIcon />
				  </IconButton>
				}
			  />
			</GridListTile>
		  ))}
		</GridList>
	  </div>
	);
  
}
