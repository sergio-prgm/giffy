import './Modal.css'

export default function Modal ({ children, onClose }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='btn' onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  )
}
