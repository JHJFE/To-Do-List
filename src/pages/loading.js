import React from "react";
import styled from "styled-components";
import passion from '../assets/passion.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const LoadingImage = styled.div`
background: url(${passion});
background-size: contain;
background-position: center;
height: 200px;
width: 300px;
background-repeat: no-repeat; 
opacity: 0.3;

animation-duration: 3s;
animation-name: fadeout;

/* > .ending{
    
} */
@keyframes fadeout {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1.1;
  }
}
`
const Loading = () => {
  // let [wait, setWait] = useState(false)
  // useEffect(()=>{
  //     setWait(false)
  // },[])
  return (
    <Container>
      <LoadingImage />
      <p>오늘도 화이팅</p>
    </Container>
  )
}

export default Loading





