import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { iUserProviderProps, useUserContext } from "./AuthContext";
import { iRecipe } from "./RecipesContext";

interface iProfileContext {
  onSubmit: (data: iFormValues) => void;
  pageUser: iPageUser;
  recipeList: iRecipe[];
}

interface iFormValues {
  name?: string;
  img?: string;
  password?: string;
}

interface iEditInfo {
  name: string;
  img: string;
}

interface iPageUser {
  name: string | undefined;
  img: string | undefined;
}

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProviders = ({ children }: iUserProviderProps) => {
  const { user } = useUserContext();
  const [pageUser, setPageUser] = useState<iPageUser>({
    name: user?.name,
    img: user?.img,
  });

  const [recipeList, setRecipeList] = useState<iRecipe[]>([]);

  useEffect(() => {
    api
      .get(`/recipes?userId=${user?.id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@pandaToken")}`,
        },
      })
      .then((res) => setRecipeList(res.data));
    setPageUser({
      name: user?.name,
      img: user?.img,
    });
  }, [user]);

  const onSubmit = (data: iFormValues) => {
    if (data.img === "") {
      delete data.img;
    }
    if (data.name === "") {
      delete data.name;
    }
    if (data.password === "") {
      delete data.password;
    }

    console.log(data);
    api
      .patch(`/users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@pandaToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        const att: iEditInfo = {
          name: res.data.name,
          img: res.data.img,
        };
        setPageUser(att);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProfileContext.Provider value={{ onSubmit, pageUser, recipeList }}>
      {children}
    </ProfileContext.Provider>
  );
};
