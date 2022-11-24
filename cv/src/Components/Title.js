import "../App.css";
import {
  GreetingContainer,
  GreetingMainContainer,
  GreetingFirst,
  GreetingSecond,
  GreetingFirstBlink,
  GreetingContainerSecond,
} from "../Styles";

function Title() {
  return (
    <GreetingMainContainer>

      <GreetingContainer>
        <GreetingFirst>Welcome</GreetingFirst>
        <GreetingFirstBlink>to</GreetingFirstBlink>
      </GreetingContainer>

      <GreetingContainerSecond>
        <GreetingSecond>d</GreetingSecond>
        <GreetingSecond>e</GreetingSecond>
        <GreetingSecond>s</GreetingSecond>
        <GreetingSecond>i</GreetingSecond>
        <GreetingSecond>g</GreetingSecond>
        <GreetingSecond>n</GreetingSecond>
        <GreetingSecond>s</GreetingSecond>
        <GreetingSecond>p</GreetingSecond>
        <GreetingSecond>a</GreetingSecond>
        <GreetingSecond>c</GreetingSecond>
        <GreetingSecond>e</GreetingSecond>
      </GreetingContainerSecond>

    </GreetingMainContainer>
  );
}

export default Title;
