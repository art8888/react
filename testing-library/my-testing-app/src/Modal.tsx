import React from "react"
import ReacDOM from "react-dom"
const jsdom = require("jsdom");
global.window = new jsdom.JSDOM().window;
global.document = window.document;



const modalRoot = global.document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
global.document.body.appendChild(modalRoot)

interface Props {
    onClose: any,
    children: any
}

const Modal: React.FC<Props> = ({ onClose, children, ...props }) => {
    const el = document.createElement('div')

    React.useEffect(() => {
        
        (async () => {
            modalRoot.appendChild(el)
    
            return async () => await modalRoot.removeChild(el)
          })()
    })

    return ReacDOM.createPortal(
        <div onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
                <hr />
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        el
    )
}

export default Modal;
