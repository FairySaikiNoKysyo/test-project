export interface VehicleMake {
    MakeId: string;
    MakeName: string;
  }
  
  export interface VehicleModel {
    Make_ID: number; 
    Make_Name: string;
    Model_ID: number;
    Model_Name: string; 
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
  