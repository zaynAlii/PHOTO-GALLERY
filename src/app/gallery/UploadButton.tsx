"use client"
import React from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { UploadIcon } from "lucide-react"
import { useRouter } from 'next/navigation';
const UploadButton = () => {
    const { refresh } = useRouter();
    return (
        <div className='flex items-center my-button bg-white text-black  py-2 px-4 rounded-lg gap-x-3'>
            <UploadIcon />
            <CldUploadButton className=' ' uploadPreset="fcthgv6r" onUpload={(result) => {
                // console.log(result)
                setTimeout(() => {
                    refresh()
                }, 2);
            }} />



        </div>
    )
}

export default UploadButton