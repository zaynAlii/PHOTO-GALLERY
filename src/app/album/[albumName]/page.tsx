// "use client"
// import React, { useEffect } from 'react'
import Grid from '../AlbumGrid'
import cloudinary from "cloudinary"
import { ImgType } from '@/app/gallery/page'
import PureRefresh from '@/app/PureRefrsh/refresh'
const Page = async ({ params: { albumName } }: { params: { albumName: string } }) => {
    const result = await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .max_results(80)
        .with_field("tags")
        .execute() as ImgType
    // console.log(result)

    // useEffect(() => {
    //     console.log("hellodjdn");
    // }
    // ,[])

    return (
        <div>
            <PureRefresh />

            <div className='flex justify-between mt-5 mx-14'>
                <div className=''>
                    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Album {albumName}</h1>
                </div>
            </div>

            <div className='grid grid-cols-4 mt-6 gap-4'>

                <Grid resources={result.resources} />


            </div>
        </div>
    )
}

export default Page