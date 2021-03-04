import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Row from '../../components/Row'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders command', () => {
  act(() => {
    render(<Row cmd="yarn start" />, container)
  })

  expect(container.textContent).toBe('yarn start')
})

it('renders note', () => {
  act(() => {
    render(<Row note="Run create react app" />, container)
  }),

  expect(container.textContent).toBe('Run create react app')
})
