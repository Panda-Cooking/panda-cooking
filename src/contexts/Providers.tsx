import { ReactNode } from "react";
import AuthContextProvider from "./AuthContext";
import RecipeProvider from "./RecipesContext";

interface iProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
    return (
        <AuthContextProvider>
            <RecipeProvider>{children}</RecipeProvider>
        </AuthContextProvider>
    );
};

export default Providers;
