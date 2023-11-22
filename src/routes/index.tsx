import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import CounterPage from "../pages/counter/CounterPage";
import { HomePage } from "../pages/HomePage";
import { UploadNewVideoPage } from "../pages/upload-video/UploadNewVideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [

      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/upload-new-video",
        element: <UploadNewVideoPage />,
      },
    ],
  },
  {
    path: "/counter",
    element: <CounterPage />
  }
]);

export default router;