import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { DashboardLayout } from "./layout/dashboard-layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <div>hello world</div>,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
          index: true,
        },
        {
          path: "settings",
          element: <div>settings</div>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
