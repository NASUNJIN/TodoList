import React from "react";
import { Component } from "react";

interface MyProps {
    weather : string;
    children : React.ReactNode;  // 컴포넌트의 자식 요소
}

// const MyWeather : React.FC<MyProps> = ({ children, weather }) => {

//     return (
//         <div>
//             {children}<p></p>
//             오늘의 날씨는 {weather} 입니다.
//         </div>
//     )
// }

class MyWeather extends Component<MyProps>{
    render() {
        const { children, weather } = this.props;   // this : 컴포넌트를 호출한 대상 객체
        return(
            <div>
                {children}<p></p>
                오늘의 날씨는 {weather} 입니다.
            </div>
        )
    }
}

export default MyWeather;