"use client"
import { CldImage } from 'next-cloudinary';
import React from 'react'
import { usePathname } from "next/navigation"
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Page = ({ searchParams: { _id } }: { searchParams: { _id: string } }) => {
    const [filters, setfilters] = useState<"generative-fill" | "grayscale" | "removeBackground" | "blur" | "">("");
    const [prompt, setPropmt] = useState<string>("");
    const [pending, setpendingPropmt] = useState<string>("");



    const pathname = usePathname();
    let parts = pathname.split("?");
    // console.log(parts)
    let Edits: string = parts[0].toUpperCase().slice(1, 7);


    return (

        <div>
            <div className='flex justify-between mt-5 mx-8'>
                <div className=''>
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">{Edits}</h1>
                </div>
                {/* <h2>{_id}</h2> */}
            </div>

            <div className='mt-5'>
                <div className='grid  md:grid-cols-3 lg:grid-cols-5  mx-8  space-x-6'>
                    <Button className="py-2 px-4 mt-3 md:mt-0  bg-gray-700 hover:bg-gray/10 text-white " onClick={() => setfilters("")} >Clear ALL</Button>
                    <div className='space-y-2 mb-3 mt-3 md:mt-0'>
                        <Button className=" " onClick={() => { setfilters("generative-fill"); setPropmt(pending) }} >Apply generative fill</Button>
                        <Label htmlFor="name" className="  text-muted-foreground mt-3 block">
                            Prompt
                        </Label>
                        <Input className='' value={pending} onChange={(e) => { setpendingPropmt(e.target.value) }} />
                    </div>

                    <Button className=" mt-3 md:mt-0" onClick={() => setfilters("grayscale")} >convert to grayscale</Button>
                    <Button className=" mt-3 md:mt-0" onClick={() => setfilters("removeBackground")} >Remove Background</Button>
                    <Button className="mt-3 md:mt-0 mr-0  " onClick={() => setfilters("blur")} >blur</Button>
                </div>


            </div>

            <div className='mt-5  grid pl-8 md:pl-0 md:grid-cols-2 md:gap-x-10 gap-3'>
                <div>


                    <CldImage
                        width="300"
                        height="200"

                        src={_id}
                        sizes="100vw"
                        alt="Description of my image"
                    />


                </div>
                {filters === "" &&
                    null
                    // <CldImage
                    //     width="300"
                    //     height="200"
                    //     src={_id}
                    //     sizes="100vw"
                    //     alt="Description of my image"
                    // />
                }
                <div>

                    {filters === "blur" ?
                        <CldImage
                            width="300"
                            height="200"
                            effects={[{ blur: "800" }]}
                            src={_id}
                            sizes="100vw"
                            alt="Description of my image"
                        />
                        :
                        null
                    }
                    {filters === "grayscale" &&
                        <CldImage
                            width="300"
                            height="200"
                            effects={[{ grayscale: true }]}
                            src={_id}
                            sizes="100vw"
                            alt="Description of my image"
                        />

                    }
                    {filters === "generative-fill" &&
                        <CldImage
                            width="300"
                            height="200"
                            // effects={[{generative-fill:50 }]}
                            src={_id}
                            // sizes="100vw"
                            alt="Description of my image"
                            crop='pad'
                            fillBackground={{
                                prompt,
                            }}
                        />

                    }
                    {filters === "removeBackground" &&
                        <CldImage
                            width="300"
                            height="200"
                            // effects={[{ blur: true }]}
                            removeBackground
                            src={_id}
                            sizes="100vw"
                            alt="Description of my image"
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Page