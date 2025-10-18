import { Link } from 'react-router-dom'
import './App.css'
import Section from './components/section/section'

function App() {

  return (
    <Section 
      title='Welcome to React Hooks Tutorial'
      description='Learn & explore React Hooks with practical examples'>
      <div className='center-list'>
        <Link to={'/UseState'}>1. useState</Link>
        <Link to={'/UseEffect'}>2. useEffect</Link>
        <Link to={'/'}>3. useEffect</Link>
      </div>
    </Section>
  )
}

export default App
