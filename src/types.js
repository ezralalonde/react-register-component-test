// @flow

export type ButtonInfoType = {
  text: (aa: ClassInfoType) => string,
  index: string,
  onClick: Function,
}

export type CheckedStatus = {
  [key: string]: Array<string>,
}

export type ClassAddButtonComponentProps = {
  children?: Object,
  onClick: (aa: ClassInfoType) => void,
}

export type ClassInfoType = {
  day: string,
  level: string,
  team: string,
  time: string,
  number: string,
  cost: number,
  leads: number,
  follows: number,
  cap: number,
  location: string,
}

export type ClassInfoComponentProps = {
  day: string,
  level: string,
  team: string,
  time: string,
  number: string,
  cost: number,
  leads: number,
  follows: number,
  cap: number,
  location: string,
}

export type ClassFilterComponentProps = {
  classes: Array<ClassInfoType>,
  filters: Array<FilterOptions>,
  setStatus: Function,
  checkedBoxes: CheckedStatus,
}

export type ClassListComponentProps = {
  buttons?: Array<ButtonInfoType>,
  classes: Array<ClassInfoType>,
}

export type ClassPickerComponentProps = {
  classes: Array<ClassInfoType>,
  classButtons?: Array<ButtonInfoType>,
  classFilterOptions: Array<FilterOptions>,
  classSortMethod?: Function,
  classSortOptions: Array<SortOptions>,
  toggleIcon: string,
  toggleText: string,
}

export type FilterGroupComponentProps = {
  index: string,
  heading: string,
  options: Array<string>,
  setStatus: Function,
  checkedBoxes: Array<string>,
}

export type FilterOptionComponentProps = {
  index: string,
  group: string,
  value: string,
  setStatus: Function,
  checked?: boolean,
}

export type OrderComponentProps = {
  orders: Array<Orders>,
  removeFn: Function,
}

export type OrderItemComponentProps = {
  itemKey: string,
  role: string,
  number: string,
  fn: Function,
}

export type RemoveOrderButtonComponentProps = {
  fn: Function,
}

export type SortGroupComponentProps = {
  name: string,
  options: Array<SortOptions>,
  setSort: Function,
}

export type SortOptionComponentProps = {
  name: string,
  group: string,
  setSort: Function,
}

export type ToggleVisibleComponentProps = {
  children?: Object,
  icon: string,
  text: string,
  visible: boolean,
}

export type Orders = {
  itemKey: string,
  role: string,
  number: string,
}

export type SortOptions = {
  key: string,
  name: string,
  method: Function,
}

export type FilterOptions = {
  key: string,
  name: string,
}