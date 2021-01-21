import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ header, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(event) => {
          // stop the bubbling up to outer div
          event.stopPropagation()
        }}
        className="ui standard modal visible active"
      >
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
