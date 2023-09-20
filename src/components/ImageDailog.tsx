"use client"
import { addToAlbum } from "@/app/Actions/FolderActions"
import { singleimg } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Album } from "lucide-react"
import { revalidatePath } from "next/cache"



import { useState } from "react"


function ImageDialog({ img, onClose }: { img: singleimg, onClose: any }) {
    const [open, setopen] = useState(false);
    const [albumNamw, setname] = useState("");
    return (
        <Dialog open={open} onOpenChange={(open: boolean) => {
            if (open) {
                setopen(open);
            }
            else {
                onClose(open);
            }
        }}>
            <DialogTrigger className="flex space-x-2">
                <Album />
                <span>Add to album</span>
                {/* </Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Folder Name
                        </Label>
                        <Input id="name" value={albumNamw} className="col-span-3" onChange={(e) => setname(e.target.value)} />
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div> */}
                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            setopen(false);
                            onClose(false)
                            setname("");
                            await addToAlbum(albumNamw, img);
                            // await new Promise((resolve) => setTimeout(resolve, 1));
                            //  revalidatePath("/album")
                        }}
                        type="submit">Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ImageDialog