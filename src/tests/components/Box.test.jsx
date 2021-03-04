import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Box from '../../components/Box'

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

it('renders title', () => {
  act(() => {
    render(<Box title="React" />, container)
  })

  expect(container.textContent).toBe('React')
})

it('renders children', () => {
  act(() => {
    render(
      <Box>
        <div>Box child</div>
      </Box>,
      container
    )
  })

  expect(container.textContent).toBe('Box child')
})
