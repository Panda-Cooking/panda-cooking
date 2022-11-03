import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface iRecipeProviderProps {
  children: ReactNode;
}

interface iRecipeIngredients {
  name: string;
  qtd: string;
}

interface iRecipePreparation {
  description: string;
}

interface iRecipeComment {
  tittle: string;
  description: string;
}

interface iRecipe {
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
  getFilteredRecipes(category: string): void;
  setSearchParam: (value: string) => void;
}

export const RecipeContext = createContext<iRecipeContext>(
  {} as iRecipeContext
);

export const RecipeProvider = ({ children }: iRecipeProviderProps) => {
  const [recipes, setRecipes] = useState<iRecipe[]>([]);
  const [searchParam, setSearchParam] = useState<string>(' ');

  useEffect(() => {
    (async () => {
      if (searchParam === '') {
        try {
          const request = await api.get('/recipes');
          setRecipes(request.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        setRecipes(
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
        const request = await api.get('/recipes');
        setRecipes(request.data);
      } catch (error) {
        toast.error('Erro ao listar receitas');
      }
    })();
  }, []);

  const getFilteredRecipes = async (category: string) => {
    try {
      if (category === 'Todos') {
        const request = await api.get('/recipes');
        setRecipes(request.data);
      } else {
        const request = await api.get(`/recipes?category=${category}`);
        setRecipes(request.data);
      }
    } catch (error) {
      toast.error('Erro ao listar receitas');
    }
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, getFilteredRecipes, setSearchParam }}
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
