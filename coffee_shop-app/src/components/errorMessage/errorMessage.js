import React from 'react';
// import './errorMessage.css'
import img from './error.jpg';

// import styled from 'styled-components';

// const DivStyled = styled.div`
//   img {
//     width: 100%;
//   }
// `


const ErrorMessage = () => {
  return (
    <>
    {/* <img src={process.env.PUBLIC_URL + `/img/error.jpg`} alt='error'></img> */}
    <img src={img} alt='error'></img>
    <span>Something goes wrong</span>
    </>
  )
}

export default ErrorMessage;