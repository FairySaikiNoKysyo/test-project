import { VehicleMake, MakesResponse, VehicleModel, ModelsResponse } from "./interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
    const response = await fetch(`${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`);
    const data: MakesResponse = await response.json();
    return data.Results;
  }
  

  export async function fetchVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
    const response = await fetch(`${BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    const data: ModelsResponse = await response.json();
    return data.Results;
  }