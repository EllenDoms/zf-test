import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddFormProps {
  addNumber: AddNumber;
}

export const AddNumberForm: React.FC<AddFormProps> = ({addNumber}) => {
  const [ newNumber, setNewNumber ] = useState("");
  const [ error, setError ] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewNumber(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newNumberInt = parseInt(newNumber)
    if(newNumberInt) {
      addNumber(newNumberInt);
      setNewNumber("");
      setError("")
    } else {
      setError("Must be a number!");
    }
  }
  return (
    <form>
      <input type='text' value={newNumber} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Add</button>
      {error && <p className='warning'>{error}</p>}
    </form>
  )
}
