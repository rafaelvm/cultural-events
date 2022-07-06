import { api } from "services/api";

class EventsService {
  static async getEventList(): Promise<any> {
    const { data } = await api.get("/events");

    return data;
  }


}

export default EventsService;
