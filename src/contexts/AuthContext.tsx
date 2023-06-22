import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iUserLogin } from "../pages/SignIn";
import { iUserRegister } from "../pages/SignUp";
import api from "../services/api";

export interface iAuthProviderProps {
    children: ReactNode;
}
export interface iUser {
    id: string;
    name: string;
    email: string;
    imageProfile: string;
    isAdm: boolean;
}

interface iAuthContext {
    loginFunction(formLogin: iUserLogin): Promise<void>;
    logoutFunction(): void;
    signUpFunction(data: iUserRegister): Promise<void>;
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}

export const authContext = createContext({} as iAuthContext);

const AuthContextProvider = ({ children }: iAuthProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const autoLogin = () => {
            const token = localStorage.getItem("@pandaToken");

            if (token) {
                api.get(`/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((res) => {
                        setUser(res.data);
                    })
                    .catch((error: Error) => {
                        console.log(error);
                        localStorage.clear();
                    });
            }
        };
        autoLogin();
    }, []);

    const loginFunction = async (formLogin: iUserLogin) => {
        try {
            const { data } = await api.post("/auth", formLogin);

            const { data: userProfile } = await api.get("/users/profile", {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            });

            localStorage.setItem("@pandaToken", data.token);

            setUser(userProfile);

            navigate("/dashboard", { replace: true });

            toast.success("Bem vindo ^^");
        } catch (error) {
            toast.error("email ou senha inválido");
        }
    };

    const signUpFunction = async (data: iUserRegister) => {
        try {
            console.log(data);

            await api.post("/users", data);

            toast.success("conta criada com sucesso!");

            navigate("/signIn", { replace: true });
        } catch (error) {
            toast.error("conta já existente!");
        }
    };

    const logoutFunction = () => {
        setUser(null);
        localStorage.clear();
        navigate("/");
    };

    return (
        <authContext.Provider
            value={{
                loginFunction,
                logoutFunction,
                user,
                signUpFunction,
                setUser,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export const useAuthContext = (): iAuthContext => {
    const context = useContext(authContext);

    return context;
};

export default AuthContextProvider;
