import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Menu, Navigation2Icon } from 'lucide-react'
import Mobileviewnavbar from './Mobile-view-navbar'


const Navbar = () => {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6 border-b">
            <div className="flex items-center justify-between space-y-2">
                <div className='flex space-x-4'>
                    {/* <Menu className='sm:block md:hidden' /> */}
                    <Mobileviewnavbar/>
                    <h2 className=" sm:2xl md:text-3xl font-bold tracking-tight">PHOTO GALLERY</h2>
                </div>
                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>

    )
}

export default Navbar