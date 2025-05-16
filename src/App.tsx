import { Route, Routes } from "react-router-dom";
import { link } from "./constant/Link";
const App = () => {
  return (
    <Routes>
      {link.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
    </Routes>
  );
};

export default App;
