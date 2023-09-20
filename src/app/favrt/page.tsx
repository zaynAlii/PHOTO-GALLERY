import React from 'react'
import cloudinary from "cloudinary"
import { singleimg } from '../gallery/page'
import Grid from "@/app/Grid/grid"
import { ImgType } from '../gallery/page'
import FavrtList from './FavrtList'
const Page = async () => {
    const result = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favrt')
        // .sort_by('created_at', 'desc')
        .max_results(80)
        .with_field("tags")
        .execute() as ImgType
    // console.log(result)
    return (
        <div className='mt-10 '>
            <div className='flex justify-between items-center px-10'>
                <h2 className='text-xl md:text-4xl font-bold  '>
                    Favourite
                </h2>
                {/* <Button asChild className='bg-white '><UploadButton /></Button> */}
            </div>
            
                <FavrtList result={result} />

            {/* <Grid resources={result.resources} /> */}


        </div>
    )
}

export default Page