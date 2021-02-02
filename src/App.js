import React from 'react'
import { BrowserRouter,  Redirect,  Route } from 'react-router-dom'
import { FormPage } from './components/FormPage/FormPage'
import { Header } from './components/Header/Header'
import ListPage from './components/ListPage/ListPage'

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <div className='main'>
        <Route exact path='/home' render={() => <ListPage/>}/>
        <Route exact path='/create-to-do' render={() => <FormPage/>}/>
        <Redirect to='/home'/>
      </div>
    </BrowserRouter>
  )
}

export default App