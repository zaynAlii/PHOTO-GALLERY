import React from 'react'
import cloudinary from "cloudinary"
import { Button } from '@/components/ui/button'
import ShowImages from './ShowImages'
import UploadButton from './UploadButton'
import Grid from '@/app/Grid/grid'
import SearchFrom from './SearchFrom'
// import dynamic from 'next/dynamic'
export interface singleimg {
    public_id: string,
    tags: string[]
}
export interface ImgType {
    resources: singleimg[]
}

const page = async ({ searchParams: { _search } }: { searchParams: { _search: string } }) => {
    const result: ImgType = await cloudinary.v2.search
        .expression(`resource_type:image ${_search ? `AND tags = ${_search}` : ""}`)
        // .sort_by('created_at', 'desc')
        .max_results(80)
        .with_field("tags")
        .execute()
    // console.log(result);
    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center px-10'>
                <h2 className='text-xl md:text-4xl font-bold  '>
                    Gallery
                </h2>
                <Button asChild className='bg-white '><UploadButton /></Button>
            </div>

            <SearchFrom initialProp={_search} />

            <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-4 mt-6 p-4'>
                <Grid resources={result.resources} />
            </div>
        </div>
    )
}

// export const dynamic = 'force-dynamic'
export default page
