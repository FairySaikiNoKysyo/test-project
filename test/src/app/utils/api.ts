import { VehicleMake, MakesResponse, VehicleModel, ModelsResponse } from "./interfaces";
  
  export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
    const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
    const data: MakesResponse = await response.json();
    return data.Results;
  }
  

  export async function fetchVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    const data: ModelsResponse = await response.json();
    return data.Results;
  }