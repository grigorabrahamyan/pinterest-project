import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import "./home.css";
import HeaderBtn from "../HeaderBtn/headerBtn";

function HomeHeader() {
  return (
    <div className="home">
      <HeaderBtn btnText="Home"/>
    </div>
  );
}

export default HomeHeader;

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(0),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}