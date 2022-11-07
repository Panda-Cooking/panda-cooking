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
  images: string[];
  time: string;
  portions: string;
  category: string;
  Ingredients: iRecipeIngredients[];
  preparation: iRecipePreparation[];
  comment: iRecipeComment[];
  userId: number;
  id: number;
}

interface iRecipeContext {
  recipes: iRecipe[];
  setRecipes: (value: iRecipe[]) => void;
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
  const [searchParam, setSearchParam] = useState<string>(" ");
  const [canObserve, setCanObserve] = useState(false);
  const [recipesPayload, setRecipesPayload] = useState(1);

  useEffect(() => {
    (async () => {
      if (searchParam === "") {
        try {
          const request = await api.get("/recipes?_sort=id&_order=desc");
          //setRecipes(request.data);
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
        //setRecipes(request.data);
        setFilteredRecipes([]);
      } else {
        const request = await api.get(`/recipes?category=${category}`);
        //setRecipes(request.data);
        setFilteredRecipes(request.data);
      }
    } catch (error) {
      toast.error("Erro ao listar receitas");
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        getFilteredRecipes,
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
