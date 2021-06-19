import React from "react"
import { render, fireEvent } from "@testing-library/react"
const jsdom = require("jsdom");
import '@testing-library/jest-dom/extend-expect';
import Modal from "../Modal";

global.window = new jsdom.JSDOM().window;
global.document = window.document;

test('modal shows the children and a close button', () => {
    const handleClose = jest.fn()
    const { getByText } = render(<Modal onClose={handleClose}><div>test</div></Modal>)

    expect(getByText('test')).toBeTruthy()
    fireEvent.click(getByText(/Close/i))
    expect(handleClose).toHaveBeenCalledTimes(1)
})
