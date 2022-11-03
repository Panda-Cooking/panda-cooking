import AuthContext, { iUserProviderProps } from './AuthContext'
import RecipeProvider from './RecipesContext'

function Providers({ children }: iUserProviderProps) {
  return (
    <AuthContext>
      <RecipeProvider>{children}</RecipeProvider>
    </AuthContext>
  )
}

export default Providers
