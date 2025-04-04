import { useLogto } from "@logto/react";
import axios from "axios";
import { useEffect, useState } from "react";
import './UserAuthorization.css'
import { useNavigate } from "react-router-dom";

interface ResponseData {
    message: string
}

export function UserAuthorization() {
    const { getAccessToken, isAuthenticated, isLoading } = useLogto()
    const [data, setData] = useState<ResponseData>()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            async function getUserData() {
                try {
                    const token = await getAccessToken(import.meta.env.VITE_API_URL);

                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/protected`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })

                    setData(response.data);
                } catch (err) {
                    if (axios.isAxiosError(err)) {
                        if (err.response) {
                            if (err.response.status === 403) {
                                setError("Unathorized!");
                            } else {
                                setError(`Erro: ${err.response.data.message || err} `);
                            }
                        } else {
                            setError(`Erro ${err} `);
                        }
                    } else {
                        setError(`Erro ${err} `);
                    }
                }
            }
            getUserData()
        }
    }, [getAccessToken, isAuthenticated])

    if (!isAuthenticated) {
        return null
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    function RedirectToHome() {
        navigate("/")
    }

    return (
        <div id="userContainer">
            <h1>{error ? `${error}` : `Autorizado: ${JSON.stringify(data?.message)}`}</h1>
            <button onClick={RedirectToHome}>Ir para a Home</button >
        </div>
    )
}