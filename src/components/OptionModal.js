import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props)=>
    <Modal
        isOpen = {!!props.selectedOption}                                   //converts into a boolean value when the string value is double flipped
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMS = {200}                                              //time in ms React would wait before cutting off the div. 
        className = "modal"                                                 //uses the custom made class then and not the predefined class of react.
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick = {props.handleClearSelectedOption}>Okay</button>
    </Modal>

export default OptionModal;