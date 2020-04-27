type ListItem = {
  id: string;
  number: number;
  selected: boolean;
}

type ToggleSelection = (toggleSelection: ListItem) => void;

type AddNumber = (newNumber: number) => void;

type RemoveSelected = (numbers: array) => void;
