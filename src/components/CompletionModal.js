import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { restartGame, newGame } from '../actions/gameActions'

const CompletionModalBase = ({ foundAll, restartGame, newGame }) => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)
  const handleNew = () => {
    setShow(true)
    newGame()
  }
  const handleRetry = () => {
    setShow(true)
    restartGame()
  }

  return (
    <Modal show={show && foundAll} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you found all the matches!</Modal.Body>
      <Modal.Footer>
        <Button variant='light' onClick={handleRetry}>
          Retry
        </Button>
        <Button variant='primary' onClick={handleNew}>
          New Game
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

CompletionModalBase.propTypes = {
  foundAll: PropTypes.bool.isRequired,
  restartGame: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  foundAll: state.game.foundAll
})

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame()),
  newGame: () => dispatch(newGame(8))
})

const CompletionModal = connect(mapStateToProps, mapDispatchToProps)(CompletionModalBase)
export { CompletionModal }
