import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//css
import './App.css';
import HomePage from './components/HomePage';

//pages
import ResumeForm from './components/ResumeForm';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path='resumeform' element={<ResumeForm />} />
      </Route>
    )
  )
  

  return ( 
    <>
    <RouterProvider router={router}/>
    </>    
  );
}

export default App;
