"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Ghost, Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { Button } from '../ui/button'

const Mobileviewnavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='md:hidden' variant={"ghost"} size={"icon"}>
                <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default Mobileviewnavbar