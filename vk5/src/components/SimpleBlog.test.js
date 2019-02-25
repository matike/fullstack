import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'Testattava blogi',
    author: 'Testaaja',
    likes: 5
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Testattava blogi'
  )

  expect(component.container).toHaveTextContent(
    'Testaaja'
  )

  expect(component.container).toHaveTextContent(
    '5'
  )

})

test('like button pressed two times', async () => {
  const blog = {
    title: 'Testattava blogi',
    author: 'Testaaja',
    likes: 5
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)

})