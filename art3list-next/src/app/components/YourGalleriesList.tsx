import {GalleryI, GalleriesSelectedI} from "../types/types";

export const YourGalleriesList = ({allGalleries, selectedGalleries}:{ allGalleries: GalleryI[], selectedGalleries: GalleryI[] }) => {
    allGalleries.forEach((g: GalleriesSelectedI) => {
        const foundSelectedGalleries = selectedGalleries.some(sg => sg.id === g.id);
        return g.selected = foundSelectedGalleries;
    });

    return <div className='container mt-5 border-b-2 border-b-blue-400'>
        <h2 className='text-3xl font-bold mb-4'>Galleries List</h2>
        {allGalleries?.map((g:any, i) => <div key={i} className='flex flex-row border-b-2 border-b-blue-300 py-3 max-w-fit'>
            <input type="checkbox" className='m-3'/>
            <div className='mb-2 mr-5'>
                <p className='font-bold'>{g.name}</p>
                <p>{g.address}</p>
                <p>{g.schedule}</p>
                <p>{g.expos}</p>
            </div>
        </div>)}
    </div>
}