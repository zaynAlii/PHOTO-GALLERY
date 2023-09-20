"use client"
import { RiFilter3Line } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { singleimg } from "@/app/gallery/page"
import { useState } from "react"
import ImageDialog from "./ImageDailog"
import { Edit2Icon } from "lucide-react"

function ImageMenu({ img }: { img: singleimg }) {
    const [open, setopen] = useState(false);
    return (
        <DropdownMenu open={open} onOpenChange={setopen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent  outline-none focus-visible:ring-1 focus-visible:ring-transparent"><RiFilter3Line size={25} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                <DropdownMenuLabel className="w-full text-center">Add to Album</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <ImageDialog img={img} onClose={setopen} />
                    <DropdownMenuSeparator />
                    <Link href={`/edits?_id=${encodeURIComponent(img.public_id)}`} className="mt-4">
                        <div className="flex space-x-3">
                            <Edit2Icon className="" size={20} />
                            <h2>
                                Edit
                            </h2>
                        </div>

                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ImageMenu