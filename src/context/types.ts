export interface IEventProviderProps {
  children: React.ReactNode;
}

export interface IEventList {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: IEventDetails;
}

export interface IEventDetails {
  location: string;
  temperature: string;
  entry: string;
  ageGroup: string;
  date: string;
}

export interface IEventContext {
  eventsList: IEventList[];
  getEventList: () => Promise<void>;
}
