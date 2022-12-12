import { useState, useEffect } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(getAuth(), email, password);
  };

  const logout = async () => {
    await signOut(getAuth());
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return { user, login, logout };
}
