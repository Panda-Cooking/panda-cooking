import { Dispatch, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { iAuthProviderProps } from "./AuthContext";
import { iRecipe } from "./RecipesContext";

export interface ICommentRequest {
    description: string;
}

export interface IComment {
    id: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: string;
        name: string;
        urlImg: string;
    };
}

interface ICommentContext {
    createComment: (formData: ICommentRequest) => void;
    commentId: string;
    setCommentId: Dispatch<string>;
    comment: string;
    setComment: Dispatch<string>;
    deleteComment: (deleteId: string) => void;
    patchComment: (formData: ICommentRequest) => void;
}
export const CommentContext = createContext<ICommentContext>(
    {} as ICommentContext
);

interface iRecipeById extends iRecipe {
    comments: {
        id: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        user: {
            id: string;
            name: string;
            email: string;
            imageProfile: string;
        };
    }[];
}

export const CommentProvider = ({ children }: iAuthProviderProps) => {
    const [commentId, setCommentId] = useState("");
    const [comment, setComment] = useState("");
    const [recipe, setRecipe] = useState<iRecipeById>();
    const [recipeId, setRecipeId] = useState("");

    const token = localStorage.getItem("@pandaToken");

    const loadReacipe = async () => {
        try {
            const { data } = await api.get<iRecipeById>(`/recipes/${recipeId}`);

            setRecipe(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createComment = async (formData: ICommentRequest) => {
        try {
            await api.post(`/comments/cars/id`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setComment("");
            toast.success("comentario criado com sucesso");
        } catch (error) {
            toast.error("ops, ocorreu um erro ");
        }
    };

    const patchComment = async (formData: ICommentRequest) => {
        try {
            await api.patch(`/comments/${commentId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("comentário atualizado com sucesso");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteComment = async (deleteId: string) => {
        try {
            await api.delete(`/comments/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("comentário deletado");
        } catch (error) {
            toast.error("algo deu errado");
        }
    };

    return (
        <CommentContext.Provider
            value={{
                createComment,
                commentId,
                setCommentId,
                comment,
                setComment,
                deleteComment,
                patchComment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = (): ICommentContext => {
    const context = useContext(CommentContext);

    return context;
};
