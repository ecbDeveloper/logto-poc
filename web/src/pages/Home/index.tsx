import { useLogto } from "@logto/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export function Home() {
	const { signIn, signOut, isAuthenticated } = useLogto();
	const navigate = useNavigate()


	useEffect(() => {
		if (!isAuthenticated) {
			signIn(`${import.meta.env.VITE_REDIRECT_URL}/callback`);
		}
	}, [isAuthenticated, signIn])

	if (!isAuthenticated) {
		return <h1>Carregando...</h1>
	}

	function RedirectToUserAuthorization() {
		navigate("/user")
	}

	return (
		<div id="homeContainer">
			<button onClick={() => signOut(`${import.meta.env.VITE_REDIRECT_URL}/`)}>Singout</button >
			<button onClick={RedirectToUserAuthorization}>Ir para autorização do usuário</button >
		</div>
	);
}
