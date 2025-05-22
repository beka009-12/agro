import { Route, Routes } from "react-router-dom";
import { link } from "./constant/Link";
import ScrollToTop from "./avto/AvtoScroll";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {link.map((item, index) => (
          <Route path={item.link} element={item.element} key={index} />
        ))}
      </Routes>
    </>
  );
};

export default App;
