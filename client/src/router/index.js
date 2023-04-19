import { createBrowserRouter } from "react-router-dom";
import { AnimePage, LayoutPage, MainLanding } from "../views";
import { Anistream } from "../components";

const router = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <MainLanding />,
      },
      {
        path: "anime/:animeId",
        element: <AnimePage />,
        children: [
          {
            path: ":episodeId",
            element: <Anistream />,
          },
        ],
      },
    ],
  },
];

export default createBrowserRouter(router);
