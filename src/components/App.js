import { GlobalStyle, GameContainer, Title } from './App.styled';
import Map from './Map';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GameContainer>
        <Title>React Game</Title>
        <Map />
      </GameContainer>
    </>
  );
};

export default App;
