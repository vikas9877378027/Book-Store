import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import CreateAcc from './Login/CreateAcc';
import AllBooks from './Books/AllBooks';
// import Routing from './Routes/Routing';
import Home from './Components/Home';
import './App.css'
import UserLogin from './Login/UserLogin';
import UserAcc from './Login/UserAcc';
import Singlepage from './Pages/Singlepage';
import CurdMian from './CRUD/CrudMain';
import Error from './Pages/Error';
import AddBook from './CRUD/AddBook';
import EditBook from './CRUD/EditBook';
import FavoritePage from './Books/Favorite';
import CartPage from './Books/CartPage';
import BuyBooks from './PurchaseBooks/BuyBooks';
import BuyPage from './PurchaseBooks/BuyPage';
import AboutUs from './Pages/AboutUs';
import AddNewBook from './CRUD/AddNewBook';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>

          <Route path='/' element={<UserLogin/>}/>

          <Route path='/Home' element={<Home/>}/> 

          <Route path='/create_user_acc' element={<UserAcc/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/single-page/:bookId' element={<Singlepage/>}/>

          <Route path='/create_account' element={<CreateAcc/>}/>

          <Route path='/Books' element={<AllBooks/>}/>

          <Route path='/Edit_Add_delete' element={<AddBook/>}/>

          <Route path='/books/:bookId/edit' element={<EditBook/>}/>

          <Route path='/favorites' element={<FavoritePage/>}/>

          <Route path='/buybooks' element={<BuyBooks/>}/>
          
          <Route path='/books/new' element={<AddNewBook/>}/>

          <Route path='/buy' element={<BuyPage/>}/>

          <Route path='/aboutus' element={<AboutUs/>}/>

         
          <Route path='*' element={<Error/>}/>


      </Routes>
    </BrowserRouter>
    {/* <Navbar/> */}
   </div>
  );
}

export default App;
