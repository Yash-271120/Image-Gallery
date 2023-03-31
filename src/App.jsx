import Jumbotron from "./utils/Jumbotron"
import SearchField from "./utils/SearchField"


function App() {

  return (
    <>
      <h1 className=' text-cyan-300 text-4xl'>React App</h1>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
    </>
  )
}

export default App
