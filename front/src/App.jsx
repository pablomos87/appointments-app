import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/HomeView';
import MyAppointment from './views/MyAppointmentsView';
import Register from './views/RegisterView';
import Login from './views/LoginView';
import About from './views/AboutView';
import Contact from './views/ContactView';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ScheduleAppointment from './views/ScheduleAppointmentView';
import { useSelector } from 'react-redux'; 
import { REGISTER, LOGIN, HOME, MY_APPOINTMENTS, CONTACT, ABOUT, SCHEDULE_APPOINTMENT } from './helpers/pathsRoutes';
import './App.css';


function App() {
  const loggedUser = useSelector((state) => state.usersSlice.login);
console.log(loggedUser);

  const ProtectedRoute = ({ children }) => {
    if (!loggedUser) {
      return <Navigate to={HOME} replace />;
    }
  
  
    return children;
  };
  
  return (
   <div className="app-container">
      <Navbar />
      <main>
      <Routes>
      <Route path={HOME} element={<Home />}/> 
      <Route path={ABOUT} element={<About/>}/> 
      
      <Route path={MY_APPOINTMENTS} element={<ProtectedRoute> <MyAppointment/> </ProtectedRoute>}/> 
      
      <Route path={CONTACT} element={<Contact/>}/> 
      <Route path={REGISTER} element={<Register/>}/> 
      <Route path={LOGIN} element={<Login/>}/> 
      {  loggedUser ? (
          <Route path={SCHEDULE_APPOINTMENT} element={<ScheduleAppointment/>}
          />
        ) : (
          <Route path={SCHEDULE_APPOINTMENT} element={
          <div className='noUserAppointment'>
          <p>Debes <Link to={LOGIN} > iniciar sesión</Link> para crear un turno.</p>
         <p> Si no esta registrado, entre <Link to= {REGISTER} >aquí</Link>.</p>
          </div>
          } />
        )} 
      </Routes>
      </main>
      <Footer />
      </div>
  )
}

export default App
