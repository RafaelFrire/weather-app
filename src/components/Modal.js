import { useState } from "react";
import "./Modal.css"

const Modal = ({isOpen, setModalOpen}) =>
    {
        if (isOpen){
            return (
                <div className="Container-Modal" onClick={setModalOpen} >
                    <div className="Modal-item">
                        <h1>CIDADE INVALIDA, TENTE NOVAMENTE</h1>
                        
                    </div>
                </div>
            )
        }
        return null;



    
    }

export default Modal;