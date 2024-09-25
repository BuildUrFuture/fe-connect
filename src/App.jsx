import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
function App() {
  return (
    <>
      <Header />

      { /* Separação entre header e conteúdo */ }
      <div className="mt-24"></div>

      <Outlet/>

      { /* Footer */}
    </>
  )
}

export default App
