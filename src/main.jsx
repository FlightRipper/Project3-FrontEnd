import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/home.jsx'
import News from './Pages/News/news.jsx'
import Aboutus from './Pages/AboutUs/aboutUs.jsx'
import { createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/Article/article.jsx'
import App from './App.jsx'
import Lebnenele from './Pages/Lebnene_Ele/lebnene_Ele.jsx'
import AdminDashboard from './Pages/AdminDashboard/admin-dashboard.jsx'
import AdminArticles from './components/AdminArticle/admin-article.jsx'


const router = createBrowserRouter([
  {
    path:'*',
    element:<App/>,
    children:[
      {
        path:'Home',
        index:true,
        element:<Home/>,
        loader: async ()=>{
          const response = await axios.get("https://tpll-31oj.onrender.com/api/article/");
          return response.data;
        }
      },
      {
        path:'news',
        element:<News/>,
        loader: async ()=>{
          const response = await axios.get("https://tpll-31oj.onrender.com/api/article/");
          return response.data;
        },
      },
      {
        path:'news/:postId',
        element:<Article/>,
        loader: async({params})=>{
          const response =await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.postId}`);
          return response.data;
        }
      },
      
      {
        path:'aboutus',
        element: <Aboutus/>,
        loader: async()=>{
          // console.log('fetching about us')
          const aboutus=await axios.get('https://tpll-31oj.onrender.com/api/about-us/')
          const teams= await axios.get('https://tpll-31oj.onrender.com/api/team/')
          return {aboutusData: aboutus.data, teamsData: teams.data}
        }
      },
      {
        path:'lebnenele',
        element: <Lebnenele />,
        loader: async () => {
          const lebneneEle = await axios.get('https://tpll-31oj.onrender.com/api/lebneneEle/')
          const milestones = await axios.get('https://tpll-31oj.onrender.com/api/milestone/')
          return {lebneneleData: lebneneEle.data, milestonesData: milestones.data};
        }
      },
      {
        path:'subscribe',
        action:async ({request}) =>{
          const data= await request.formData();
          const response= await axios.post('https://tpll-31oj.onrender.com/api/news/subscribe/',{
            body:data,
          })
          if(!response){
            throw response;
          }
          return {ok:true}
        }
      }
    ]
    },
    {
      path:'/admin/dashboard/',
      element:<AdminDashboard/>,
      children:[
        {
          path:'News',
          element:<AdminArticles/>,
          loader: async ()=>{
            const response =await axios.get("https://tpll-31oj.onrender.com/api/article/");
            return response.data;
          } ,
          
        },
        {
          path:'News/delete/:id',
          action:async ({params})=>{
            await axios.delete(`https://tpll-31oj.onrender.com/api/article/${params.id}`);
             return redirect("/admin/dashboard/News");
          }
        }  
      ]

    },
   
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);


