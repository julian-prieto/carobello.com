import { fuego, useCollection } from "@nandorojo/swr-firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

const defaultContextData = {
  user: null,
  isAdmin: null,
  signin: () => Promise.resolve(null),
  signup: () => Promise.resolve(null),
  signout: () => Promise.resolve(void 0),
  googleSignIn: () => Promise.resolve(null),
};

const AuthContext = createContext(defaultContextData);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useUser = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    throw new Error("User is empty");
  }

  return user;
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const { data: admins = [] } = useCollection("allow-users", {
    listen: true,
  });

  const signin = (email, password) => {
    return fuego
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = (email, password) => {
    return fuego
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const googleSignIn = () => {
    const provider = new fuego.auth.GoogleAuthProvider();

    return fuego
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return fuego
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = fuego.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && admins.length) {
      if (admins.find((admin) => admin.id === user?.uid)) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user, admins]);

  return {
    user,
    isAdmin,
    signin,
    googleSignIn,
    signup,
    signout,
  };
}
