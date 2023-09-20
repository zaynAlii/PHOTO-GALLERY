import React from 'react'
import cloudinary from "cloudinary"
import AddtoAlbum from './AddtoAlbum'

export interface folder {
    name: string, path: string
}
export interface folders {
    folders: folder[]
}
const page = async () => {
    const result = await cloudinary.v2.api.root_folders() as folders;
    // console.log(result)

    return (
        <div className='px-4'>
            <div className='flex justify-between mt-5 mx-8'>
                <div className=''>
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Albums</h1>
                </div>

            </div>
            <div className='grid  sm:grid-cols-2 md:grid-cols-3  gap-2 mt-7'>

                {result.folders.map((folder: folder, i) =>
                    <div key={i}>
                        <AddtoAlbum folder={folder} />
                    </div>
                )}
            </div>


        </div>

    )
}

export default page