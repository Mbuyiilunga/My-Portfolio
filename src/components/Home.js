import React from "react"
import image from "../mbuyi2.jpg";

export default function Home(){
    return(
        <main>
            <img 
            src={image} 
            alt="Mbuyi Ilunga" 
            className=" absolute object-contain h-74 w-full "
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-black pr-20 font-bold cursive leading-none lg:leading-snug home-name ">
                    This is Mbuyi</h1>
            </section>
            
        </main>

    )
}