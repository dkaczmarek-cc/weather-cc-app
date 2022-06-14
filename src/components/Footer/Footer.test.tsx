import { render, screen } from '@testing-library/react'
import React from 'react'
import { Footer } from './Footer'

test('Footer renders', () => {
  render(<Footer />)

  const footer = screen.getByTestId('Footer')
  expect(footer).toBeInTheDocument()
})

test('Footer not empty', () => {
  render(<Footer />)

  const footer = screen.getByTestId('Footer')

  expect(footer).not.toBeEmptyDOMElement()
})

test('Footer displays date corectly', () => {
  render(<Footer />)

  const currentYear = new Date().getFullYear()
  const footer = screen.getByTestId('Footer')

  expect(footer).toHaveTextContent('WEATHERLY - ' + currentYear)
})
