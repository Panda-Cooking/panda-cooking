import AuthContext, { iUserProviderProps } from "./AuthContext";
import { ProfileProviders } from "./ProfileContext";
import RecipeProvider from "./RecipesContext";

function Providers({ children }: iUserProviderProps) {
    return (
        <AuthContext>
            <ProfileProviders>
                <RecipeProvider>{children}</RecipeProvider>
            </ProfileProviders>
        </AuthContext>
    );
}

export default Providers;
