import React from "react";
import { Modal } from 'react-bootstrap';

// 넘어가야할 정보
type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

type TodoModalProps = {
    show : boolean;
    todo : Todo | null;
    handleClose : () => void;  // 함수도 넘길 수 있음!!
}


const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Todo 상세 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo ? todo.text : null}</Modal.Body>
            </Modal>
        </div>
    )
}

export default TodoModal;