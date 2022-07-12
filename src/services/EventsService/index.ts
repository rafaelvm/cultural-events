import { IEventList } from "context/types";
import { api } from "services/api";

class EventsService {
  static async getEventList(): Promise<IEventList[]> {
    const { data } = await api.get("/events");

    return data;
  }
}

export default EventsService;
