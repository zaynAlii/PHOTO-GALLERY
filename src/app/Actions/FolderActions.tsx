"use server"
import { singleimg } from "../gallery/page";
import cloudinary from "cloudinary"
export const addToAlbum = async (folder: string, image: singleimg) => {
    const _existingFolder = await cloudinary.v2.api.create_folder(folder);

    console.log(image.public_id);
    let parts = image.public_id.split("/");
    console.log(parts);
    if (parts.length > 1) {
        parts = parts.slice(1);
        console.log(parts);
    }
    const publicid = parts.join("/")
    console.log(publicid);

    await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicid}`)
}