import Detail from "../components/pages/Detail";
import HomePage from "../components/pages/HomePage";

export const link = [
  {
    link: "/",
    title: "Продукты",
    element: <HomePage />,
  },
  {
    link: "/details/:id",
    element: <Detail />,
  },
];
