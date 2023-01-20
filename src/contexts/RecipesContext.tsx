import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface iRecipeProviderProps {
    children: ReactNode;
}

export interface iRecipe {
    id: string;
    name: string;
    description: string;
    user: {
        id: string;
        name: string;
        email: string;
        imageProfile: string;
    };
    category: {
        id: string;
        name: string;
    };
    time: string;
    portions: number;
    imagesRecipes: {
        id: string;
        url: string;
    }[];
    ingredientsRecipes: {
        amount: string;
        id: string;
        ingredients: {
            id: string;
            name: string;
        };
    }[];
    preparations: {
        id: string;
        description: string;
    }[];
}

interface iCategories {
    id: string;
    name: string;
}

interface iRecipeContext {
    recipes: iRecipe[];
    setRecipes: (value: iRecipe[]) => void;
    getRecipesByCategory(category: string): void;
    loadingRecipes: boolean;
    categories: iCategories[];
}

export const recipeContext = createContext({} as iRecipeContext);

export const RecipeProvider = ({ children }: iRecipeProviderProps) => {
    const [recipes, setRecipes] = useState<iRecipe[]>([]);
    const [categories, setCategories] = useState<iCategories[]>([]);
    const [loadingRecipes, setLoadingRecipes] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setLoadingRecipes(true);

                const { data: categories } = await api.get("/categories");

                setCategories([
                    {
                        id: "4009406e-c309-4b2b-b356-ccadc6d3a5dd",
                        name: "todos",
                    },
                    ...categories,
                ]);

                const { data } = await api.get("/recipes");

                setRecipes(data);

                // setCanObserve(true);
            } catch (error) {
                toast.error("Erro ao listar receitas");
            } finally {
                setLoadingRecipes(false);
            }
        })();
    }, []);

    const getRecipesByCategory = async (category: string) => {};

    return (
        <recipeContext.Provider
            value={{
                recipes,
                setRecipes,
                getRecipesByCategory,
                loadingRecipes,
                categories,
            }}
        >
            {children}
        </recipeContext.Provider>
    );
};

export const useRecipeContext = (): iRecipeContext => {
    const context = useContext(recipeContext);

    return context;
};

export default RecipeProvider;
