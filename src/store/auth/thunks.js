import {
  loginWithEmailPassword,
  logoutFirebase,
  regsiterUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWhitEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await regsiterUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  console.log({ email, password });
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({
      email,
      password,
    });
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  console.log("startLogout");
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};
