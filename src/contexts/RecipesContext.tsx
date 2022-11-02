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
}

export const RecipeContext = createContext<iRecipeContext>(
  {} as iRecipeContext
);

export const RecipeProvider = ({ children }: iRecipeProviderProps) => {
  const [recipes, setRecipes] = useState<iRecipe[]>([]);

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
    <RecipeContext.Provider value={{ recipes, getFilteredRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export function useRecipeContext(): iRecipeContext {
  const context = useContext(RecipeContext);

  return context;
}

export default RecipeProvider;
