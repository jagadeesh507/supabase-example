import {
  Button,
  Center,
  HStack,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import supabase from "../config/createClient";
import AllTodos from "./AllTodos";

function View() {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState(null);

  const addNewTodo = async () => {
    try {
      const data = await supabase.from("todos").insert([{ name: todo }]);
      setTodo("");
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
    // if(data){
    //     console.log("newtodo",data)
    // }
    // if(error){
    //     console.log("error",error)
    // }
  };

  const fetchData = async () => {
    const { data, error } = await supabase.from("todos").select();
    if (data) {
      setTodos(data);
    }
    if (error) {
      setError(error);
      setTodos(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Center>
      {console.log("todos", todos)}
      <VStack mt="50px">
        <Heading>TODO USING SUPABASE</Heading>
        <HStack mt="20px">
          <Input
            type="text"
            placeholder="enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button colorScheme="green" onClick={addNewTodo}>
            Add Todo
          </Button>
        </HStack>
        {todos && todos.map((todo) => <AllTodos key={todo.id} todo={todo} fetch={fetchData}/>)}
      </VStack>
    </Center>
  );
}
export default View;
