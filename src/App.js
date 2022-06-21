
import './App.css';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Company from './components/Companies/Company';
import User from './components/Users/User';
function App() {
  return (
    <div className="app">
      
      {/* <Home/>
      <Login/> */}
      <BrowserRouter>
        
     
      <div className='app-body'>
          <Routes>
            <Route path='/' element={<Nav/>}>
            </Route>
          
            <Route path='/login' element={ <Login/>}>
            </Route>
             <Route path='/home' element={ <Home/>}>
            </Route>
            <Route path='/job' element={<Outlet/>}>
                <Route index element={<Jobs />} />
          
            </Route>
            <Route path='/users' element={<Outlet/>}>
                <Route index element={<User />} />
          
            </Route>
            <Route path='/company' element={<Outlet/>}>
                <Route index element={<Company />} />
          
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
