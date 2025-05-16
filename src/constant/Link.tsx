import HomePage from "../components/pages/HomePage";
import DetailPage from "../detail/DetailPage";

export const link = [
  {
    link: "/",
    title: "Продукты",
    element: <HomePage />,
  },
  {
    link: "/details/:id",
    element: <DetailPage />,
  },
];
