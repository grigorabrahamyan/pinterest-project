import React, {Fragment} from 'react';
import './App.css';
import UserLayout from "./hoc/Layout/userLayout";
import DefaultLayout from "./hoc/Layout/defaultLayout";
import User from "./components/user";

function App() {
    return (
        <Fragment>
            {
                (User.isAuthorised) ?
                    (
                        <UserLayout>

                        </UserLayout>
                    )
                    : (
                        <DefaultLayout>

                        </DefaultLayout>
                    )
            }
        </Fragment>
    );
}

export default App;
