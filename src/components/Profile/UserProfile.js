import { useContext, useState } from "react";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import AuthContext from "../store/auth-context";

const UserProfile = () => {
  const authCtx = useContext(AuthContext);
  // const [loggedIn,setLoggedIn]=useState(false);
  const isLoggedIn = authCtx.isLoggedin;

  return (
    <section className={classes.profile}>
      <h1>Your User Profile </h1>
      {!isLoggedIn && <h3> you are not logged in</h3>}
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
