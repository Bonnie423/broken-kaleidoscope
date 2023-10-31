import Pixel from './Pixel'


function App() {
  const initialColors = Array.from({ length: 1000 }, getRandomColor)

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return (
    <div>
      {initialColors.map((color, index) => (
        <Pixel key={index} color={color} />
      ))}
    </div>
  )
}

export default App
