export interface FilterOption {
    value: string
    label: string
  }
  
  export interface FilterCategory {
    id: string
    label: string
    options: FilterOption[]
  }
  
  