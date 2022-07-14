import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    height: auto;
  }
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: #444444;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: #FFFFFF;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background: #D1D3D7;
    border-radius: 8px;
  }
  
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

 .react-modal-content {
   width: 100%;
   max-width: 576px;
   background:#FFFFFF;
   padding: 2rem;
   position: relative;
   border-radius: 0.25rem;
   border: 2px solid #008c9e;
 }

 .react-modal-close {
   position: absolute;
   right: 1.5rem;
   top: 26px;
   border: 0;
   background: transparent;
   transition: filter 0.2s;
   &:hover {
    filter: brightness(0.8);
   }
 }

 .mainContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem;
  line-height: 32px;
  min-height: 77vh;
 }

 .swiper {
  width: 100%;
  height: 369px;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 341px;
    }
 }

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
[data-tooltip] {
  position: relative;
}
[data-tooltip]:before {
  content: attr(data-tooltip);
  display: none;
  position: absolute;
  top: -45px;
  z-index: 100;
  padding: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  background: black;
  color: white;
  border-radius: 5px;
}
[data-tooltip]:hover:before {
  display: inline-block;
}
`;
