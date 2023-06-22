import { ReactNode } from "react";
import AuthContextProvider from "./AuthContext";
import RecipeProvider from "./RecipesContext";
import { CommentProvider } from "./CommentContext";

interface iProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
    return (
        <AuthContextProvider>
            <RecipeProvider>
                <CommentProvider>{children}</CommentProvider>
            </RecipeProvider>
        </AuthContextProvider>
    );
};

export default Providers;
