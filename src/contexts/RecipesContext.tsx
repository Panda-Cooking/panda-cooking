import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { iUserInfo } from "./AuthContext";

interface iRecipeProviderProps {
    children: ReactNode;
}

export interface iRecipeIngredients {
    name: string;
    qtd: string;
}

export interface iRecipePreparation {
    description: string;
}

export interface iRecipeComment {
    description: string;
    user: iUserInfo;
    date: string;
}

export interface iRecipe {
    name: string;
    description: string;
    category: string;
    time: string;
    portions: string;
    images: {
        value: string;
    }[];
    ingredients: {
        qtd: string;
        name: string;
    }[];
    preparations: {
        description: string;
    }[];
    author: iUserInfo;
    comments: iRecipeComment[];
    userId: number;
    id: number;
}

interface iRecipeContext {
    recipes: iRecipe[];
    setRecipes: (value: iRecipe[]) => void;
    categoryEmpty: boolean;
    getFilteredRecipes(category: string): void;
    setSearchParam: (value: string) => void;
    canObserve: boolean;
    recipesPayload: number;
    setRecipesPayload: (value: number) => void;
    filteredRecipes: iRecipe[];
}

export const RecipeContext = createContext<iRecipeContext>(
    {} as iRecipeContext
);

export const RecipeProvider = ({ children }: iRecipeProviderProps) => {
    const [recipes, setRecipes] = useState<iRecipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<iRecipe[]>([]);
    const [categoryEmpty, setCategoryEmpty] = useState<boolean>(false);
    const [searchParam, setSearchParam] = useState<string>(" ");
    const [canObserve, setCanObserve] = useState(false);
    const [recipesPayload, setRecipesPayload] = useState(1);

    useEffect(() => {
        (async () => {
            if (searchParam === "") {
                try {
                    const request = await api.get(
                        "/recipes?_sort=id&_order=desc"
                    );
                    setFilteredRecipes([]);
                } catch (error) {
                    console.log(error);
                }
            } else {
                setFilteredRecipes(
                    recipes.filter((recipe) =>
                        recipe.name
                            .toLocaleLowerCase()
                            .includes(searchParam.toLocaleLowerCase())
                    )
                );
            }
        })();
    }, [searchParam]);

    useEffect(() => {
        (async () => {
            try {
                const request = await api.get(
                    "/recipes?_sort=id&_order=desc&_page=1&_limit=12"
                );
                setRecipes(request.data);
                setCanObserve(true);
            } catch (error) {
                toast.error("Erro ao listar receitas");
            }
        })();
    }, []);

    const getFilteredRecipes = async (category: string) => {
        try {
            if (category === "Todos") {
                const request = await api.get("/recipes");
                setCategoryEmpty(false);
                setRecipes(request.data);
                setFilteredRecipes([]);
            } else {
                const request = await api.get(`/recipes?category=${category}`);
                if (request.data[0] === undefined) {
                    setCategoryEmpty(true);
                } else {
                    setFilteredRecipes(request.data);
                    setCategoryEmpty(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                setRecipes,
                getFilteredRecipes,
                categoryEmpty,
                setSearchParam,
                canObserve,
                recipesPayload,
                setRecipesPayload,
                filteredRecipes,
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
};

export function useRecipeContext(): iRecipeContext {
    const context = useContext(RecipeContext);

    return context;
}

export default RecipeProvider;
