import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Common/Login/Login";
import Registration from "../Pages/Common/Registration/Registration";
import CreateStoryType from "../Pages/StoryPage/StoryPage/StoryPage/CreateStoryType/CreateStoryType";
import TextStory from "../Pages/StoryPage/TextStory/TextStory";
import SingleStory from "../Pages/StoryPage/SingleStory/SingleStory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/story-type',
        element:<CreateStoryType></CreateStoryType>
      },
      {
        path:'/story-type/:id',
        element:<SingleStory></SingleStory>
        
      },
      {
        path:'/story-type/text-story',
        element:<TextStory></TextStory>
      },

    ]
    
  },
  {path:'/login',element:<Login></Login>},
  {path:'/registration',element:<Registration></Registration>}
]);