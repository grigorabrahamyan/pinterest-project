import React from "react";
import CustomSelect from "../userInformation/customSelect";

export default function UserLocationSelect() {
    return(
        <div>
            <CustomSelect
                countries = {["Armenia", "USA", "Russia", "Georgia"]}
                selectId = "select_country"
                label = "Country"
            />
        </div>
    )
}