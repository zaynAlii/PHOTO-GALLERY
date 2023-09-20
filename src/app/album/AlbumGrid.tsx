import React from 'react'
import { singleimg } from '../gallery/page'
import ShowImages from '../gallery/ShowImages'

const Grid = ({ resources }: { resources: singleimg[], }) => {

    const getCloumn = (colVal: number) => {
        return resources.filter((img: singleimg, i: number) => i % 5 === colVal)
    }

    return (

        <>
            {
                [
                    getCloumn(0),
                    getCloumn(1),
                    getCloumn(2),
                    getCloumn(3),
                ].map((column, idx) => <div key={idx} className='flex flex-col gap-y-3'>
                    {column.map((img, idx) =>
                        <div key={idx}>
                            <ShowImages img={img} />
                        </div>
                    )}
                </div>)
            }
        </>
    )
}

export default Grid