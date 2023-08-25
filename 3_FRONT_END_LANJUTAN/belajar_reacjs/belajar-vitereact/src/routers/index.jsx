import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/index";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import About from "../pages/about";

import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loaders";

/* KOMPONEN UTAMA UNTUK MENGHUBUNGKAN DI ROUTERS */

export const router = createBrowserRouter([
      {
        path:'/',
        element: <RootLayout /> , 
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: posts
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: postById, 
            },            
            {
                path: "/about",
                element: <About />
            },
        ]   
     },
     /* {
        path: "/about", 
        element: <About />,
     } */
    ]);