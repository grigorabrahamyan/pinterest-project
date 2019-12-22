import React from 'react';
import './App.css';
import UserLayout from "./hoc/Layout/userLayout";
import DefaultLayout from "./hoc/Layout/defaultLayout";
import User from "./components/user";

function App() {
<<<<<<< HEAD
  return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
  );
};
=======
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
>>>>>>> f4b7e715e410c2884789418638289a45581fed9f

export default App;
