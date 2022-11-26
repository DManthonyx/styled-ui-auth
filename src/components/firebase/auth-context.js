import React, { useState, useEffect, useContext, createContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);

	const createUser = async (email, password) => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			setUser(user);
			return true;
		} catch (err) {
			setError("Error from Firebase");
			console.log(err, "Error from firebase create user");
			return false;
		}
	};

	const signOut = async () => {
		try {
			await signOut(auth);
			return true;
		} catch (err) {
			console.log(err, "Error from firebase signOut");
			return false;
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser, "<--- auth context useEffect");
			if (currentUser) {
				setUser(currentUser);
				setError(null);
			}
		});
	}, []);
	console.log(user, "user from state");
	return (
		<UserContext.Provider value={{ createUser, user, signOut, error }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
