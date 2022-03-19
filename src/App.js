import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Modals from './components/Modals';
import UsersList from './components/UsersList';

function App() {
  const baseUrl = 'https://users-crud1.herokuapp.com/users/',
    [ isModalOpen, setIsModalOpen ] = useState( false ),
    [ usersData, setUsersData ] = useState([]),
    [ userToUpdate, setUserToUpdate ] = useState({}) 


  const reloadPage = () => {
    axios.get( baseUrl )
    .then( res => setUsersData( res?.data ) )
  }
  
  useEffect(() => {
    reloadPage()
  },[])


  const addUser =  data  => {
    axios.post( baseUrl, data )
      .then( () => reloadPage() )
  }

  const removeUser =  data  => {
    axios.delete( `${ baseUrl }${ data.id }`, data )
      .then(() => reloadPage() )
  }

  const update = data => {
    axios.put( `${ baseUrl }${ data.id }/`, data )
      .then( () => reloadPage() )
  }

  return (
    <>
      <UsersList 
        setIsModalOpen={ setIsModalOpen } 
        usersData={ usersData } 
        setUserToUpdate={ setUserToUpdate }
        remove={ removeUser }
      />
      <Modals 
        isModalOpen={ isModalOpen } 
        setIsModalOpen={ setIsModalOpen }
        userToUpdate={ userToUpdate }
        setUserToUpdate={ setUserToUpdate }
        addUser={ addUser }
        update={ update }  
      />
    </>

  );
}

export default App;
