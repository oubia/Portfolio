import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null
    return ReactDOM.createPortal(
      <div className="modal">
        <div className='closeButtonModal'>
          <div className='closeDiv' onClick={onClose}>
            <FontAwesomeIcon className='fontawsome' icon={faClose} />
          </div>
        </div>
        <div>{children}</div>
      </div>,
      document.body
    )
  }
  export default Modal;