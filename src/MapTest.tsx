import React from "react";

const MapTest = () => {
    const fruits = ['apple', 'banana', 'orange'];

    return (
        <div>
            <h2>과일</h2>
            <ul>
                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>  // key값에 index를 넣어줘야함 : 엘리먼트를 효율적으로 관리하기 위해서 (랜더링하기 위해서)
                    )) 
                }
            </ul>
        </div>
    )
}

export default MapTest;