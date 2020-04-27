import React from 'react';

interface ListItemProps {
  listItem: ListItem,
  toggleSelection: ToggleSelection
}

export const ListItem: React.FC<ListItemProps> = ({ listItem,toggleSelection }) => {
  return <label className={listItem.selected ? 'number selected' : 'number notSelected'}>
      <input type="checkbox" checked={listItem.selected} onChange={() => toggleSelection(listItem)} className="visually-hidden" />
      {listItem.number}
    </label>
}
