import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../store/auth-context";
import axios from "axios";
const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDcUGh5Plnw7moYpg7pC7l5Qg_J4pFcWMU",
        {
          // body: JSON.stringify({

          // }),
          // headers: {
          //   "Context-Type": "application/json",
          // },
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }
      );
      alert("password changed");
      newPasswordInputRef.current.value = null;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="5"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
