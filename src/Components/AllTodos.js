import { Button, Card, HStack, Spacer, chakra, Input } from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../config/createClient";

function AllTodos({ todo,fetch}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const { data, error } = await supabase
      .from("todos")
      .update({ name: updatedTodo })
      .match({ id: todo.id });
      setIsEditing(false);
      fetch()
  };

  const handleDeleteClick = async () => {
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ id: todo.id });
      fetch()

    if (data) {
      console.log("Todo deleted successfully", data);

    }

    if (error) {
      console.error("Error deleting todo", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTodo(todo.name);
  };

  return (
    <Card width="80%" mt={"5px"}>
      <HStack>
        {isEditing ? (
          <Input value={updatedTodo} onChange={(e)=>{setUpdatedTodo(e.target.value)}} />
        ) : (
          <chakra.p pl={"5px"}>{todo.name}</chakra.p>
        )}
        <Spacer />
        {isEditing ? (
          <>
            <Button colorScheme="blue" onClick={handleSaveClick}>
              Save
            </Button>
            <Button colorScheme="red" onClick={handleCancelClick}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme="orange" onClick={handleEditClick}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={handleDeleteClick}>
              Delete
            </Button>
          </>
        )}
      </HStack>
    </Card>
  );
}

export default AllTodos;
