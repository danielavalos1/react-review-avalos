import { Layout } from "./components/Layout"
import { Screen } from "./components/Screen"
import { SearchPage } from "./pages/SearchPage"

export const AuthenticatedApp = () => {
  return (
    <Layout>
      <Screen>
        <SearchPage />
      </Screen>
    </Layout>
  )
}
