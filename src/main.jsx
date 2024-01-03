import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import News from './News.jsx'
import Aboutus from './AboutUs.jsx'
import { createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/article.jsx'
import App from './App.jsx'
import Lebnenele from '/src/Pages/Lebnene_Ele/Lebnene_Ele.jsx'
import AdminDashboard from './admin-dashboard.jsx'
import AdminArticles from './components/admin-article.jsx'

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
          try{
          // const response = await axios.get("https://tpll-31oj.onrender.com/article");
          const response = await axios.get("http://localhost:4000/article/");
          return response.data;
        } catch (error) {
          console.error(error.message);
         }
         
      }
      },
      {
        path:'news',
        element:<News/>,
        loader: async ()=>{
          // const response = await axios.get("https://tpll-31oj.onrender.com/article/");
          const response = await axios.get("http://localhost:4000/article/");
          return response.data;
        },
      },
      {
        path:'news/:id',
        element:<Article/>,
        loader: async({params})=>{
          // const response =await axios.get(`https://tpll-31oj.onrender.com/article/${params.id}`);
          const response =await axios.get(`http://localhost:4000/article/${params.id}`);
          return response.data;
        }
      },
      
      {
        path:'aboutus',
        element: <Aboutus/>,
        loader: async()=>{
          // console.log('fetching about us')
          const aboutus=await axios.get("http://localhost:4000/aboutus/");
          // const aboutus=await axios.get('https://tpll-31oj.onrender.com/aboutus/')
          const teams=await axios.get("http://localhost:4000/team/");
          // const teams= await axios.get('https://tpll-31oj.onrender.com/team/')
          return {aboutusData: aboutus.data, teamsData: teams.data}
        }
      },
      {
        path:'lebnenele',
        element: <Lebnenele />,
        loader: async () => {
          // const lebneneEle = await axios.get('https://tpll-31oj.onrender.com/lebneneEle/')
          const lebneneEle = await axios.get('http://localhost:4000/lebneneEle/')
          // const milestones = await axios.get('https://tpll-31oj.onrender.com/mileStone/')
          const milestones = await axios.get('http://localhost:4000/mileStone/')
          return {lebneneleData: lebneneEle.data, milestonesData: milestones.data};
        }
      },
      {
        path:'subscribe',
        action:async ({request}) =>{
          const data= await request.formData();
          // const response= await axios.post('https://tpll-31oj.onrender.com/news/subscribe/',{
            const response= await axios.post('http://localhost:4000/news/subscribe/',{
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
            // const response =await axios.get("https://tpll-31oj.onrender.com/article/");
            const response = await axios.get("http://localhost:4000/article/");
            return response.data;
          } ,
          
        },
        {
          path:'News/delete/:id',
          action:async ({params})=>{
            // await axios.delete(`https://tpll-31oj.onrender.com/article/${params.id}`);
            await axios.delete(`http://localhost:4000/article/${params.id}`);
             return redirect("/admin/dashboard/News");
          }
        }  ,
        {
          path:'News/edit/:id',
          action:async ({params})=>{
            // await axios.delete(`https://tpll-31oj.onrender.com/article/${params.id}`);
            await axios.patch(`http://localhost:4000/article/${params.id}`);
          
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

