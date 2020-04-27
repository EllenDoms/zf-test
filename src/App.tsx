import React, {useState, useEffect} from 'react';
import './style/style.css';
import { UUID } from './util/util';

import { List } from './components/list';
import { AddNumberForm } from './components/addNumberForm';

// I start with initial numbers but can be empty as well of course
const initialNumbers: Array<ListItem> = [
  { id: UUID(), number: 3, selected: false },
  { id: UUID(), number: 12, selected: false }
]

const App: React.FC = () => {
  const [ numbers, setNumbers ] = useState(initialNumbers);
  const [ total, setTotal ] = useState();

  useEffect(() => {
    let totalNumbers = 0;
    numbers.map(number => {
      totalNumbers += number.number
    }, [numbers])
    setTotal(totalNumbers);
  })

  const toggleSelection: ToggleSelection = selectedItem => {
    const newNumbers = numbers.map(number => {
      if(number === selectedItem) { return {...number, selected: !number.selected}}
      return number;
    })
    setNumbers(newNumbers)
  }

  const addNumber: AddNumber = newNumber => {
    setNumbers([...numbers, {number: newNumber, selected: false, id: UUID()}])
  }

  const removeSelected = () => {
    let newArray:any[] = [];
    numbers.map(number => !number.selected && newArray.push(number) );
    setNumbers(newArray)
  }

  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
    <h1>MY SUM</h1>
    <AddNumberForm addNumber={addNumber} />

    <h2>List of values</h2>
    <List numbers={numbers} toggleSelection={toggleSelection} />
    <button onClick={removeSelected} >Remove selected</button>

    <h2>Total value</h2>
    <p className='number'>{total}</p>
  </div>
}

export default App;
