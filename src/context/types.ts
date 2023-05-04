export interface RequestData {
  status: number;
  date: Date;
  url: string;
}

export interface RequestsContext {
  requestsList: RequestData[];
  addRequest: (request: RequestData) => unknown;
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
