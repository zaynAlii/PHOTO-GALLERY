"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


const SearchFrom = ({ initialProp }: { initialProp: string }) => {
    const router = useRouter();
    const [searchtag, setTags] = useState(initialProp ?? "")

    useEffect(() => {
        setTags(initialProp ?? "")
    }, [initialProp])

    console.log(initialProp)
    // console.log(searchtag)
    return (
        <form className='grid grid-cols-12 gap-x-2 px-10' onSubmit={(e) => {
            e.preventDefault()
            router.replace(`/gallery?_search=${searchtag}`)
        }}
        >

            <div className=" col-span-12 md:col-span-10  mt-3 text-muted-foreground items-center">
                <Label htmlFor="name" className="text-right">
                    Search by Tags
                </Label>
                <Input autoComplete='of' id="name" value={searchtag} className="outline-none focus-visible:ring-0 focus-visible:ring-transparent " onChange={(e) => setTags(e.target.value)} />
            </div>
            <Button className='md:mt-9 col-span-12 md:col-span-2 '> Search </Button>
        </form>
    )
}

export default SearchFrom