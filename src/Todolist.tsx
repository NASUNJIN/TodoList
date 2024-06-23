import React, { useState } from "react";
import { Button } from 'react-bootstrap';

// interface말고 type 사용 하는 이유 : 기존의 타입을 사용해서 새로운 타입을 만들때 사용
// interface : 새로운 객체 구조를 정의할때 (구조를 잡을 떄)
type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

// React.FC : FC = Function Component 약자
// probs의 타입을 명시해줌
const TodoList : React.FC= () => {
    const title : string = "오늘 할일";

    // 구조분해할당
    // [todos = state 데이터 저장, setTodos = 변경 함수], setTodos 함수 이용해서 todos 값 변경 가능
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text :'공부하기', isChecked : false}, 
        {id : 2, text :'잠자기', isChecked : false}, 
        {id : 3, text :'미팅하기', isChecked : false},  
    ]);  

    // 할일 입력 관리 해주는 state
    const [newTodo, setNewTodo] = useState<string>('');
    // 클릭했을 때 보여줄껀지 말껀지 관리해주는 state
    const [showDetail, setShowDetail] = useState<boolean>(false);
    // 선택한 것을 관리하는 state
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    

    const handleChekedChange = (itemId : number) => {
        setTodos((prevItems) => 
            prevItems.map((item) => 
                // 체크 박스를 클릭하면 true일 경우 false, false일 경우 true
                item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
            )
        )  // preveItems == todos
    }

    // 클릭했을 경우 모달로 상세정보 보이기
    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true); 
        setSelectedTodo(todo);
    }

    // 모달 창 없애기
    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    // 입력받은 값 추가
    const addTodo = () => {
        if (newTodo.trim() !== '') {  // 빈값일 경우 (아무것도 안쓰고 추가 눌렀을 경우) 변화가 안일어났을 경우
            setTodos([...todos, { id : Date.now(), text : newTodo, isChecked : false }]);
            setNewTodo('');
        }
    }

    // 삭제
    const removeTodo = (id : number) => {
        // todos 전체 리스트의 데이터에서 filter의 함수로 특정 조건을 만족시키는애를 골라서 새로운 배열로 만들어줌
        setTodos(todos.filter((todo) => todo.id !== id)) // todo.id와 id와 일치하지 않는 항목들로 배열을 만들어 줌
    }

    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div>
                    <input type= "text"
                        placeholder = '할일 입력'   
                        style={{marginRight : '10px', writingMode : 'horizontal-tb'}}
                        onChange={(e) => setNewTodo(e.target.value)}  // 입력받는 이벤트의 데이터를 setNewTodo함수를 통해 newTodo에 담김
                    />
                    <Button variant = "warning" onClick={addTodo}>추가</Button>
                </div>
                <p></p>
                <div className="board">
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li key={todo.id}>
                                    <input type = "checkbox"
                                    onChange={() => {
                                        handleChekedChange(todo.id);
                                    }}></input>
                                    {/* 상세정보 나오기 */}
                                    <span onClick={() => handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ? 
                                            <del>{todo.text}</del>  // true일 경우 취소선
                                            : <span>{todo.text}</span>  // false일 경우 취소선 없이
                                        }
                                    </span>
                                    <button
                                        onClick={() => removeTodo(todo.id)}
                                        className="delbutton"
                                    >삭제</button>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;