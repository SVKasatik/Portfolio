import styled, { keyframes } from "styled-components";

const blink = keyframes`
0% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
  }
  
  2% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
  }
  8% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
  }
  9% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
  }
  12% {
    opacity:0.1;
    text-shadow: 0px 0px rgba(82, 255, 0, 1);
  }
  20% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
  25% {
    opacity:0.3;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
  30% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
  
  70% {
    opacity:0.7;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
  
  72% {
    opacity:0.2;
    text-shadow:0px 0px 29px rgba(82, 255, 0, 1)
  }
  
  77% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(82, 255, 0, 1)
  }
}
`;

const blink2 = keyframes`
    0% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1);
    }
    
    2% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1);
    }
    8% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1);
    }
    9% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1);
    }
    12% {
      opacity:0.1;
      text-shadow: 0px 0px rgba(255, 95, 249, 1);
    }
    20% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
    25% {
      opacity:0.3;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
    30% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
    
    70% {
      opacity:0.7;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
    
    72% {
      opacity:0.2;
      text-shadow:0px 0px 29px rgba(255, 95, 249, 1)
    }
    
    77% {
      opacity:.9;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
    100% {
      opacity:.9;
      text-shadow: 0px 0px 29px rgba(255, 95, 249, 1)
    }
  }
  `;

const blink3 = keyframes`
    0% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    2% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    4% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    
    
    19% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    21% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    23% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    
    80% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    83% {
      opacity:0.4;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
    87% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(82, 255, 0, 1);
    }
  }
`;

export const GreetingFirst = styled.p`
  position: relative;
  right: 20rem;
  top: 14rem;
  font-size: 50px;
  color: #fff;
  font-family: "Meow Script", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  text-shadow: 0px 0px 27px #ffffff, 0px 4px 200px #ff5ff9, 0px 0px 76px #ff007a,
    0px 0px 74px #ff007a;
  transform: rotate(-5.37deg);
  padding-bottom: -150px;
`;

export const GreetingFirstBlink = styled.p`
  position: relative;
  right: 18rem;
  top: 12.7rem;
  font-size: 50px;
  color: #fff;
  font-family: "Meow Script", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  text-shadow: 0px 0px 27px #ffffff, 0px 4px 200px #ff5ff9, 0px 0px 76px #ff007a,
    0px 0px 74px #ff007a;
  transform: rotate(-5.37deg);
  padding-bottom: -150px;
  animation: ${blink2} 2s linear infinite;
`;

export const GreetingSecond = styled.p`
  font-size: 50px;
  color: #fff;
  font-family: "Text Me One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  text-transform: uppercase;
  text-shadow: 0px 0px 27px #ffffff, 0px 4px 200px #92ff5f, 0px 0px 76px #52ff00,
    0px 0px 74px #52ff00;
`;

export const GreetingMainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 80vh;
//   animation: ${blink3} 2s linear infinite;
  animation-duration: 8s;
`;

export const GreetingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  & :nth-of-type(6) {
    padding-right: 30px;
  }
`;

export const GreetingContainerSecond = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  & :nth-of-type(2) {
    animation: ${blink3} 2s linear infinite;
  }

  & :nth-of-type(6) {
    padding-right: 30px;
    // animation: ${blink3} 2s linear infinite;
  }

  & :nth-of-type(11) {
    animation: ${blink} 2s linear infinite;
  }
`;





