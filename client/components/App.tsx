import Pixel from './Pixel'

function App() {
  return Array.from({ length: 10000 }, (_, i) => <Pixel key={i} />)
}

export default App
