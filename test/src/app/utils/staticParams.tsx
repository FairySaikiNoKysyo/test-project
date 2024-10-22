import { VehicleMake } from "./interfaces";
import { fetchVehicleMakes } from "./api";

export async function generateStaticParams(): Promise<{ makeId: string; year: string }[]> {
    const makes: VehicleMake[] = await fetchVehicleMakes(); 
    const years: string[] = Array.from({ length: new Date().getFullYear() - 2015 + 1 }, (_, i) => (2015 + i).toString());
    
    return makes.flatMap(make => 
        years.map(year => ({
            makeId: make.MakeId.toString(),
            year: year.toString(),
        }))
    );
}