"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache";
export const setTags = async (public_id: string, bool: boolean) => {

    if (!bool) {
        await cloudinary.v2.uploader.add_tag("favrt", [public_id])
    }
    else {
        await cloudinary.v2.uploader.remove_tag("favrt", [public_id])
    }
    await new Promise((resolve) => setTimeout(resolve, 1));
    revalidatePath("/gallery")

}