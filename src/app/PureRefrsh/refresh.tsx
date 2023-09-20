"use client"
import { useEffect } from "react"
import React from 'react'
import { useRouter } from "next/navigation"
const PureRefresh = () => {
    const { refresh } = useRouter();
    useEffect(() => {
        // console.log("hello form pure component");
        refresh();
    }, [])
    return (
        <>
        </>
    )
}

export default PureRefresh