import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <BrowserRouter>
      <header>Header</header>
      <main className='container'>
        <Route exact path='/' component={HomeScreen} />
      </main>
      <footer>Footer</footer>
    </BrowserRouter>
  )
}

export default App
