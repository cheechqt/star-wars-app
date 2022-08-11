import routesConfig from "@routes/routesConfig";
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        < NavLink to="/">Home</NavLink >
        < NavLink to="/people">People</NavLink >
        <Routes>
          {routesConfig.map((route, index) => {
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;                                                            
