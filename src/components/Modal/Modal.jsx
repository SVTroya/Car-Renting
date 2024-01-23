import React, {useEffect} from 'react'
import {
  Backdrop,
  CloseBtn,
  CloseModalBtn,
  StyledModal
} from './Modal.styled.jsx'
import {useDispatch} from 'react-redux'

function Modal({isModalOpen, children}) {
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    function handleEscPress(ev) {
      if (ev.key === 'Escape') {
        dispatch(isModalOpen(false))
      }
    }

    document.addEventListener('keydown', handleEscPress)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscPress)
      document.body.style.overflow = 'visible'
    }
  }, [isModalOpen])

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(isModalOpen(false))
    }
  }

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        dispatch(isModalOpen(false))
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <Backdrop onClick={handleBackdropClick} data-backdrop>
      <StyledModal>
        <CloseModalBtn type='button' aria-label='Close Button' onClick={() => dispatch(isModalOpen(false))}>
          <CloseBtn/>
        </CloseModalBtn>
        {children}
      </StyledModal>
    </Backdrop>
  )
}

export default Modal



