import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { folder } from './page'

const AddtoAlbum = ({ folder }: { folder: folder }) => {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription className='text-muted-foreground'>Open your new Album in one-click. see Photos</CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between">
                {/* <Button variant="outline">Cancel</Button> */}
                <Link href={`/album/${folder.path}`}> <Button className=''>View Album</Button> </Link>
            </CardFooter>
        </Card>
    )

}

export default AddtoAlbum