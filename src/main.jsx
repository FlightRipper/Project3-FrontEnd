import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import News from "./News.jsx";
import Aboutus from "./AboutUs.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import Article from "./components/article.jsx";
import App from "./App.jsx";
import Lebnenele from "/src/Pages/Lebnene_Ele/Lebnene_Ele.jsx";
import AdminDashboard from "./admin-dashboard.jsx";
import AdminArticles from "./components/admin-article.jsx";
import AdminAboutUs from "./components/admin-about.jsx";
import AdminLebneneEle from "./components/admin-lebneneEle.jsx";
import ContactUs from "./components/contactUs.jsx";
import AdminMessages from "./components/admin-messages.jsx"
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "Home",
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            // const response = await axios.get("https://tpll-31oj.onrender.com/article");
            const response = await axios.get("http://localhost:4000/article/");
            return response.data;
          } catch (error) {
            console.error(error.message);
          }
        },
      },
      {
        path: "news",
        element: <News />,
        loader: async () => {
          // const response = await axios.get("https://tpll-31oj.onrender.com/article/");
          const response = await axios.get("http://localhost:4000/article/");
          return response.data;
        },
      },
      {
        path: "news/:id",
        element: <Article />,
        loader: async ({ params }) => {
          // const response =await axios.get(`https://tpll-31oj.onrender.com/article/${params.id}`);
          const response = await axios.get(
            `http://localhost:4000/article/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "aboutus",
        element: <Aboutus />,
        loader: async () => {
          const aboutus = await axios.get(`http://localhost:4000/aboutus/`);
          const teams = await axios.get("http://localhost:4000/team/");
          return { aboutusData: aboutus.data, teamsData: teams.data };
        },
      },
      {
        path: "lebnenele",
        element: <Lebnenele />,
        loader: async () => {
          // const lebneneEle = await axios.get('https://tpll-31oj.onrender.com/lebneneEle/')
          const lebneneEle = await axios.get(
            "http://localhost:4000/lebeneneEle"
          );
          console.log("Server response for lebneneEle:", lebneneEle.data);
          // const milestones = await axios.get('https://tpll-31oj.onrender.com/mileStone/')
          const milestones = await axios.get("http://localhost:4000/mileStone");
          return {
            lebneneleData: lebneneEle.data,
            milestonesData: milestones.data,
          };
        },
      },
      {
        path: "contactus",
        element: <ContactUs />,
        loader: async () => {
          try {
        
            const AddMessage = await axios.post("http://localhost:4000/contactUs");
            console.log("Server response for contactus:", AddMessage.data);
      
            return {
            
              AddMessageData: AddMessage.data,
            };
          } catch (error) {
            console.error("Error during data fetching:", error);
            return { error: "Failed to fetch data" };
          }
        },
      },
      
      
      {
        path: "subscribe",
        action: async ({ request }) => {
          const data = await request.formData();
          // const response= await axios.post('https://tpll-31oj.onrender.com/news/subscribe/',{
          const response = await axios.post(
            "http://localhost:4000/news/subscribe/",
            {
              body: data,
            }
          );
          if (!response) {
            throw response;
          }
          return { ok: true };
        },
      },
    ],
  },
  {
    path: "/admin/dashboard/",
    element: <AdminDashboard />,
    children: [
      {
        path: "News",
        element: <AdminArticles />,
        loader: async () => {
          // const response =await axios.get("https://tpll-31oj.onrender.com/article/");
          const response = await axios.get("http://localhost:4000/article/");
          return response.data;
        },
      },
      {
        path: "News/delete/:id",
        action: async ({ params }) => {
          // await axios.delete(`https://tpll-31oj.onrender.com/article/${params.id}`);
          await axios.delete(`http://localhost:4000/article/${params.id}`);
          return redirect("/admin/dashboard/News");
        },
      },
      {
        path: "News/edit/:id",
        action: async ({ params }) => {
          // await axios.delete(`https://tpll-31oj.onrender.com/article/${params.id}`);
          await axios.patch(`http://localhost:4000/article/${params.id}`);
          return redirect("/admin/dashboard/News");
        },
      },
      {
        path: "Aboutus",
        element: <AdminAboutUs />,
        loader: async () => {
          const aboutUsData = await axios.get("http://localhost:4000/aboutus/");
          return aboutUsData.data;
        },
      },
      {
        path: "Aboutus/edit/:id",
        element: <Article />,
        loader: async ({ params }) => {
          const response = await axios.patch(
            `http://localhost:4000/aboutus/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "LebneneEle",
        element: <AdminLebneneEle />,
        loader: async () => {
          const lebneneEleData = await axios.get(
            "http://localhost:4000/lebeneneEle"
          );
          const milestones = await axios.get("http://localhost:4000/mileStone");
          return {
            lebneneleData: lebneneEleData.data,
            milestonesData: milestones.data,
          };
        },
      },
      {
        path: "LebneneEle/edit/:id",
        element: <AdminLebneneEle />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `http://localhost:4000/lebeneneEle/${params.id}`
          );
          const milestones = await axios.get(
            `http://localhost:4000/mileStone/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "LebneneEle/delete/:id",
        action: async ({ params }) => {
          await axios.delete(`http://localhost:4000/lebeneneEle/${params.id}`);
          await axios.delete(`http://localhost:4000/mileStone/${params.id}`);
          return redirect("/admin/dashboard/LebneneEle");
        },
      },
      {
        path: "messages",
        element: <AdminMessages/>,
        loader: async () => {
         
        
            const Messages = await axios.get("http://localhost:4000/contactUs");
            console.log("Server response for contactus:",Messages.data);
      
            return {
            
              MessagesData: Messages.data,
            };
          }
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
