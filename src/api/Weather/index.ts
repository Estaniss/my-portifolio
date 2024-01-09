import { ResponseError } from "../../utils/entities";
import { AxiosErrorResponse } from "../../utils/types";
import request from "../request";

export default class WeatherApi {
  static getWeather = async (city: string): Promise<WeatherType> => {
    try {
      const { data } = await request.get(
        `/weather?q=${city}&lang=pt&appid=9ab34c97e7eca54fe8d8bb9205a712ae`
      );
      return data;
    } catch (error) {
      throw new ResponseError(error as AxiosErrorResponse);
    }
  };
}
