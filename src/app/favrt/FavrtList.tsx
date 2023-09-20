"use client"

import React, { useState } from 'react'
import { ImgType, singleimg } from '../gallery/page'
import Grid from '../Grid/grid'

const FavrtList = ({ result }: { result: ImgType }) => {
    const [initial, setresources] = useState(result.resources)
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4'>
                {/* <Grid resources={initial} onHeart={(public_id: string) => setresources(currResouces => currResouces.filter((img: singleimg, i) => img.public_id !== public_id))} /> */}
                <Grid resources={initial} onHeart={(public_id: string) => setresources(initial.filter((img: singleimg, i) => img.public_id !== public_id))} />
            </div>
        </div>
    )
}

export default FavrtList