import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import routes from './router/Routes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={true}
            path={route.path}
            name={route.name}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
