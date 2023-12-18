import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import AllTodos from './Components/AllTodos';
import { ChakraProvider, Input } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
     <View/>
      </ChakraProvider>
  );
}

export default App;
