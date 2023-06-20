import './App.css';
import Body from './Components/Body';
import Head from './Components/Head'
import { Provider } from 'react-redux';
import store from './utils/store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

function App() {
  return (
    <Provider store={store}>
     <Head/>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
       {
        path:'/',
        element:<MainContainer/>
       },
       {
        path:'/watch',
        element:<WatchPage />
       }
    ]
  }
])

export default App;
