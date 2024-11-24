import './App.css'
import Header from './components/Header'
import Prompt from './components/Prompt'

function App() {
  
  return (
    <>
      <main>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <div className='app'>
          <Header/>
          <Prompt/>
        </div>
      </main>
     
    </>
  )
}

export default App
