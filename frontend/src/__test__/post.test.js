import React from "react"
import {render as rtl, fireEvent, screen} from "@testing-library/react"
// import {Provider} from "react-redux"
import Post from "../Post/Post"
// import { Component } from "react"

// const render = component=>{
//  <Provider store={store}>
//     {component}
// </Provider>
   
// }


test('handle Like', () => {
    render(<Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Provider>)

    const counter = screen.getByTestId("counter")
    const incrementBtn =screen.getByTestId("increment")

    fireEvent.click(incrementBtn)

    expect(counter).toHaveTextContent(true)
})