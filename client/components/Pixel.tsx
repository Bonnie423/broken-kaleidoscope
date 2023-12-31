import { useEffect, useState } from 'react'
import { MouseEvent } from 'react'

const Pixel = () => {
  const [colors, setColors] = useState(getRandomColor())

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  function handleClick() {
    setColors(getRandomColor())
  }

  function handleMouseEnter() {
    setColors('orange')
  }
  function changeColorToWhite() {
    setColors('white')
  }
  function handleDragEnter() {
    setColors('yellow')
  }

  function handleRightClick(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    event.preventDefault()
    setColors('black')
  }

  useEffect(() => {
    const timer = setInterval(() => setColors(getRandomColor()), 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <button
       data-testid="button"
        style={{ height: '20px', width: '20px', backgroundColor: colors }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onDoubleClick={changeColorToWhite}
        onDragEnter={handleDragEnter}
        onContextMenu={(event) => handleRightClick(event)}
      ></button>
    </>
  )
}

export default Pixel
