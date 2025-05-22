import Detail from "../components/pages/Detail";
import HomePage from "../components/pages/HomePage";
import Log from "../components/pages/Log";

export const link = [
  {
    link: "/",
    title: "Продукты",
    element: <HomePage />,
  },
  {
    link: "/транспорт",
    title: "Транспорт",
    element: <Log />,
  },
  {
    link: "/details/:id",
    element: <Detail />,
  },
];
