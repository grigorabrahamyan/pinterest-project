import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height:280,
        width:470,
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #666',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // borderRadius:30,
    },
    paper2:{
        height:570,
        width:700,
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #666',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    iconWrapper: {
        position: "relative",
        width: 200,
        height: 200,
    },
    boardIcon: {
        height:40,
        width:40,
        position: "absolute",
        top: "43%",
        left: "64%",
        background:"red",
        borderRadius:100,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default useStyles
