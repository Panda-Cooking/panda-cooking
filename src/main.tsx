import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from "./contexts/UserContext";
import AuthContext from './contexts/AuthContext';
import RecipeProvider from './contexts/RecipesContext';
import { GlobalStyle } from './styles/Global';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <RecipeProvider>
         <UserProvider>
          <GlobalStyle />
          <App />
         </UserProvider>
        </RecipeProvider>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
