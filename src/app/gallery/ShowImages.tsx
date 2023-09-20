"use client"
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { singleimg } from './page';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { setTags } from '../Actions/setTag';
import { Album } from 'lucide-react';
import ImageMenu from '@/components/ImageMenu';
// import { HeartIcon ,HeartCrackIcon, HeartOff} from 'lucide-react';
const ShowImages = ({ img, onHeart }: { img: singleimg, onHeart?: (val: string) => void }) => {
    const [Heart, setHeart] = useState(img.tags.includes("favrt"));

    return (
        <div className='overflow-hidden relative'>
            <CldImage
                width="960"
                height="600"
                src={img.public_id}
                sizes="100vw"
                className='hover:scale-110 duration-300 '
                alt="Description of my image"
            />
            <div onClick={() => {
                setHeart(!Heart)
                if (onHeart == undefined) {

                }
                else {
                    onHeart(img.public_id);
                }
                setTags(img.public_id, Heart);

            }} className='absolute top-4 left-4'>
                {Heart ? <AiFillHeart size={25} className={"text-lime-500 cursor-pointer"} /> : <AiOutlineHeart size={25} className={"text-lime-500 cursor-pointer"} />}
            </div>
            <div className='absolute top-4 right-4'>
                <ImageMenu img={img} />
            </div>
        </div >
    )
}

export default ShowImages