import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  // useState를 통해 posts이름의 state와 이를 변경하는 setPosts 함수 생성.
  // posts 에는 배열이 저장되므로 초기값으로 빈 배열 ([])을 주었다.
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((response) => console.log(response));  
  // 컴포넌트가 렌더링(화면에 그려지는 것)될 때마다 useEffect가 실행된다.
  // then()에서는 http 요청 통해 받아온 데이터 처리
  // 테스트 위해 받아온 데이터 console에 출력  
      .then(({ data }) => setPosts(data));
  }, []);   
  //axios를 통해 HTTP요청을 보내는 code
  // ({ data }) 는 es6의 destructing 문법
  // response 객체 안에 있는 data배열을 바로 참조 할 수 있다.
  // useEffect 내부에서 state를 변경시킨 결과로 인해 컴포넌트의 재렌더링이 일어난다. 렌더링시에는 다시 useEffect가 실행되어 
  // 렌더링 -> useEffect -> posts state 변화 -> 렌더링 -> useEffect -> posts state 변화 -> 렌더링 무한 반복

  return (
  // return 내부 코드 : react element : jsx
  // jsx 안에는 저렇게 ( { } ) 를 사용해 js 함수 사용 할 수 있다.
    <Container>
      <GlobalStyle />
      {posts.map((post, index) => (
  // 100개 요소를 모두 출력하기 위해 Array.ma() 메소드 사용 
      <Post key={index}>
  {/* key prop로 각각을 식별할 수 잇는 고유한 값 설정
      여기선 index = key prop */}
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </Post>      
      ))}
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

//styled-components로 최상위 div인 Container를 생성했다.
const Container = styled.div`
  min-height: 100vh;
  padding: 200px 0;
  display: grid;
  grid-template-columns: repeat(4,300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: #55efc4;
  box-sizing: border-box;
`;

const Post = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 600;
`;
const Body = styled.div`
  height: 80%;
  padding: 11px;
  border-radius: 20px;
`;


export default App;