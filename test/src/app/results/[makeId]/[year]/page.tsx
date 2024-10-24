'use client';
import { useEffect, useState, Suspense } from 'react';
import { fetchVehicleModels } from '../../../utils/api'; 
import { VehicleModel } from '@/app/utils/interfaces';
import { generateStaticParams } from '@/app/utils/staticParams';
import { ResultPageProps } from '@/app/utils/interfaces';
import Loading from '@/components.tsx/Loader';
import ErrorMessage from '@/components.tsx/ErrorMessage';


generateStaticParams()

export default function ResultPage({ params }: ResultPageProps) {
    const [makeId, setMakeId] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [models, setModels] = useState<VehicleModel[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function getParams() {
            const resolvedParams = await params;
            setMakeId(resolvedParams.makeId);
            setYear(resolvedParams.year);
        }

        getParams();
    }, [params]);

   

    useEffect(() => {
        async function loadModels() {
            if (makeId && year) {
                try {
                    const vehicleModels = await fetchVehicleModels(makeId, year);
                    setModels(vehicleModels);
                } catch (error) {
                    setError(new Error(String(error)));
                }
            }
        }

        loadModels();
    }, [makeId, year]);

 

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
            <ErrorMessage error={error} />
            <Suspense fallback={<Loading />}>
                {models.length > 0 ? (
                    <ul className="space-y-4">
                        {models.map((model) => (
                            <li key={model.Model_ID} className="flex items-center p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-200">
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-gray-800">{model.Model_Name}</span>
                                    <span className="text-sm text-gray-500">{model.Make_Name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Loading />
                )}
            </Suspense>
        </div>
    );
}
