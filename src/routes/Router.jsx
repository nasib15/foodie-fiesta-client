import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import AllFoods from "./../pages/AllFoods";
import AddFood from "./../pages/AddFood";
import ManageMyFoods from "./../pages/ManageMyFoods";
import PrivateRoute from "./PrivateRoute";
import MyFoodReq from "./../pages/MyFoodReq";
import ViewDetails from "../pages/ViewDetails";
import UpdateFoodInfo from "../pages/UpdateFoodInfo";
import Payment from "../pages/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food-info/:id",
        element: <UpdateFoodInfo />,
      },
      {
        path: "/my-food-req",
        element: (
          <PrivateRoute>
            <MyFoodReq></MyFoodReq>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-info",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
