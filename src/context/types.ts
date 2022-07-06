export interface IEventProviderProps {
  children: React.ReactNode;
}

export interface IEventList {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface IEventContext {
  eventsList: IEventList[];
  getEventList: () => Promise<void>;
}
