export interface IProductsContext {
  response?: RequestResponse;
  loading?: boolean;
  isError?: boolean;
  filters?: Filters;
  setFilters?: React.Dispatch<React.SetStateAction<Filters>>;
}

export interface RequestResponse {
  items: Item[];
  meta: Meta;
  links: Links;
}

interface Filters {
  search?: string;
  active?: boolean;
  promo?: boolean;
  page?: number;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
