import { createContext, useCallback, useContext, useState } from "react";
import EventsService from "services/EventsService";
import { IEventContext, IEventList, IEventProviderProps } from "./types";

export const EventContext = createContext<IEventContext>({} as IEventContext);
export function EventProvider({ children }: IEventProviderProps) {
  const [eventsList, setEventsList] = useState<IEventList[]>([]);

  const getEventList = useCallback(async () => {
    try {
      const response = await EventsService.getEventList();
      setEventsList(response);
    } catch {
      console.error("Error");
    }
  }, []);

  return (
    <EventContext.Provider value={{ eventsList, getEventList }}>
      {children}
    </EventContext.Provider>
  );
}

export const useEventContext = (): IEventContext => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within a EventProvider");
  }
  return context;
};
