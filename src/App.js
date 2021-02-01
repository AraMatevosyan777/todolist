import React from 'react'
import { BrowserRouter,  Route } from 'react-router-dom'
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
      </div>
    </BrowserRouter>
  )
}

export default App