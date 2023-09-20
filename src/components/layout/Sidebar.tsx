"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ImageIcon, AlbumIcon, Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from 'next/link'

const Sidebar = () => {
    let pathname = usePathname();
    // console.log(pathname)
    return (
        <div className={"pb-12  "}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1 ">
                        <Link href={"/gallery"}>
                            <Button variant={pathname === "/gallery" ? "secondary" : "ghost"} className=" w-full justify-start">
                                <ImageIcon className='' />
                                <h2 className='pl-3 text-lg'>Gallery</h2>
                            </Button>
                        </Link>
                        <Link href={"/album"}>
                            <Button variant={pathname === "/album" ? "secondary" : "ghost"} className="w-full justify-start">
                                <AlbumIcon />
                                <h2 className='pl-3 text-lg'>Album</h2>
                            </Button>
                        </Link>
                        <Link href={"/favrt"}>
                            <Button variant={pathname === "/favrt" ? "secondary" : "ghost"} className="w-full justify-start">
                                <Heart />
                                <h2 className='pl-3 text-lg'>Favourite</h2>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar