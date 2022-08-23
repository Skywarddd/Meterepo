import { City } from "./city.model";
import { Forecast } from "./forecast.model";

export interface Meteo {
    city: City,
    update: string,
    forecast: Forecast[]
}
