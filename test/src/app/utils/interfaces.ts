export interface VehicleMake {
    MakeId: string;
    MakeName: string;
  }
  
  export interface VehicleModel {
    Make_ID: number; // або можете змінити на MakeId, якщо використовуєте camelCase
    Make_Name: string; // або MakeName
    Model_ID: number; // або ModelId
    Model_Name: string; // або ModelName
}
  
 export interface MakesResponse {
    Results: VehicleMake[];
  }
  
 export  interface ModelsResponse {
    Results: VehicleModel[];
  }

  export interface ResultPageProps {
    params: Promise<{
        makeId: string;
        year: string;
    }>;
}

export interface ErrorMessageProps {
    error: Error | null;
  }
  