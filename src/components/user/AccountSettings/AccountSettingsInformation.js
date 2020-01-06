import React, {useCallback, useState} from "react";
import Grid from "@material-ui/core/Grid";
import UserInfoHeaderTitle from "../userInformation/UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "../userInformation/UserInfoHeaderSubTitle";
import UserInputForm from "../userInformation/userInputForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UserSubSectionTitle from "../userInformation/userSubSectionTitle";
import UserGenderSelect from "./userGenderSelect";
import Button from "@material-ui/core/Button";
import CustomSelect from "../userInformation/customSelect";
import {db} from "../EditProfile/editProfileFirebase";
import {Link} from "react-router-dom";
import UserDatePicker from "./userDatePicker";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        width: "100%",
        flexDirection: "row-reverse",
    },
    usernameInput: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "baseline",
    },
    usernameUrl: {
        padding: "0 .5rem"
    },
    userHeaderBtn: {
        margin: "0 1rem"
    },
    btnWrapper: {
        display: "flex",
        padding: "0 1rem",
        textAlign: "right",
    },
    cancelButton: {
        textDecoration: "none",
        color: "#000"
    },
    datePicker: {
        display: "flex",
        justifyContent: "end",
    }
}));

export default function AccountSettings(props) {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [userBirthDate, setUserBirthDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    let [userAge, setUserAge] = useState("");

    let userId = 'ZLrbfZSFQR4dAMRm8NAx';

    const onEmailChange = useCallback((e)=> {
        setEmail(e);
        console.log(e)
    }, []);

    const selectGender = useCallback((e) =>{
        setGender(e)
        console.log(e)
    },[]);

    const selectCountry = useCallback((e) =>{
        setCountry(e)
        console.log(e)
    },[]);

    const selectUserBirthDate = useCallback((e) =>{
        setUserBirthDate(e)
        setCurrentDate(new Date())
        userAge = currentDate.getFullYear() - e.getFullYear()
        setUserAge(userAge);


    },[]);

    function updateUserData() {
        let userDataInfo = db.collection("users").doc(userId);

        return userDataInfo.update({
            email: email,
            gender: gender,
            country: country,
            age: userAge,

        })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    }

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                alignItems="center">
                <Grid item xs={8}>
                    <UserInfoHeaderTitle title = "Account settings"/>
                    <UserInfoHeaderSubTitle
                        subTitle = "Set your login preferences, help us personalize your experience and make big account changes here" />
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.btnWrapper}>
                        <Button
                            className={classes.userHeaderBtn}
                            variant="contained">
                            <Link
                                className={classes.cancelButton}
                                to="/">
                                Cancel
                            </Link>
                        </Button>
                        <Button
                            onClick={updateUserData}
                            className={classes.userHeaderBtn}
                            variant="contained">
                            Done
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <UserSubSectionTitle subTitle = "Basic information"/>
                    <UserInputForm
                        value={email}
                        onInputChange = {onEmailChange}
                        label = "Email address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomSelect
                        onCountryChange={selectCountry}
                        countries = {["Armenia", "USA", "Russia", "Georgia"]}
                        selectId = "select_country"
                        label = "Country"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <UserDatePicker
                        className={classes.datePicker}
                        label = "Birth date"
                        datePicker="date_picker"
                        startDate={userBirthDate}
                        userDateChange={selectUserBirthDate}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <UserGenderSelect
                        onGenderChange={selectGender}
                    />
                </Grid>
            </Grid>
        </div>
    )
}