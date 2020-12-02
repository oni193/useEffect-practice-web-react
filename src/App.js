import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [posts, setPosts] = useState([]);
  // useState를 통해 posts이름의 state와 이를 변경하는 setPosts 함수 생성.
  // posts 에는 배열이 저장되므로 초기값으로 빈 배열 ([])을 주었다.
  return <Container>App</Container>;
}

//styled-components로 최상위 div인 Container를 생성했다.
const Container = styled.div``;

export default App;