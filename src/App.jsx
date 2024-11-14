import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/login/login"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home/home"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
