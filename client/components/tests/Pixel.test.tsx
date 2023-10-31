//@vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// https://testing-library.com/docs/user-event/intro

import '../../test/setup.tsx'
import Pixel from '../Pixel.tsx'

describe('<Pixel />', () => {
  it('should buttons', () => {
    render(<Pixel />)
    const buttonEle = screen.getByTestId('button')
    expect(buttonEle).toBeInTheDocument()

    const computedColor = window.getComputedStyle(buttonEle).backgroundColor
    expect(computedColor).not.toBe(null)
  })

  it('should change color to white when double click', async()=>{
    render(<Pixel />)
    const user = userEvent.setup()
    const buttonEle = screen.getByTestId('button')
    await user.dblClick(buttonEle)
    // fireEvent.doubleClick(buttonEle)
    const computedColor = window.getComputedStyle(buttonEle).backgroundColor
    expect(computedColor).toBe(`rgb(255, 255, 255)`)
  })

  
})
