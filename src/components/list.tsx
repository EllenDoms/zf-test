import React from 'react';
import { ListItem } from './listItem';

interface ListProps {
  numbers: Array<ListItem>,
  toggleSelection: ToggleSelection
}

export const List: React.FC<ListProps> = ({ numbers,toggleSelection }) => {
  return <div className='listWrapper'>
    {numbers.map((number, i) => {
      // i is not a good choice for keys,
      // but since we don't have an id or something else unique I'm using this for the exercise.
      return <ListItem key={i} listItem={number} toggleSelection={toggleSelection} />;
    })}
  </div>
}
