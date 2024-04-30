import { ENV, authFetch } from "@/utils";

export class Appointment {
  async create(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.APPOINTMENT}`;

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getByUser(params) {
    const { userId } = params;
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.APPOINTMENT}/?user=${userId}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
