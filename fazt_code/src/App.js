import React from 'react';
import './styles.css'

// COMPONENT
import { Profile } from './components/Profile';
import { UserList } from './components/UserList';

// CONTEXT
import { UserState } from './context/User/UserState';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return(
    <UserState>
    <Profile/>
    <UserList/>
    </UserState>
  )
}
