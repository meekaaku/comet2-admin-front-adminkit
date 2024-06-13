export interface RPaginated<T> 
{
  page: number;
  page_size: number;
  page_count: number;
  item_count: number;
  items: T[];
}

export interface Editable<T> 
{
  original: T;
  edited: T;
}

export interface IToast 
{
  type: 'info' | 'error'
  message: string;
  heading: string;
}