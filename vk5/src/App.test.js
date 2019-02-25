import React from 'react'
import 'jest-dom/extend-expect'
import { render, waitForElement, cleanup } from 'react-testing-library'
jest.mock('./services/blogs')
import App from './App'

afterEach(cleanup)

describe('<App />', () => {
  it('if no user logged in, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('Log in to application')
    )

    expect(component.container).toHaveTextContent(
      'Kirjaudu'
    )
    expect(component.container).not.toHaveTextContent(
      'Ensimmäinen testiblogi'
    )
  })
})