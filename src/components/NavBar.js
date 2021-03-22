import React from "react"
import {NavLink} from "react-router-dom";
import{SocialIcon} from "react-social-icons";



export default function NavBar(){
    return (
        <header className="bg-gray-300">
            <div className="container mx-auto flex justify-between font-bold">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-black" 
                    className="inflex-flex items-center py-11 px-3 mr-4 text-white-300 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Mbuyi
                    </NavLink>
                    <NavLink 
                    to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
                    activeClassName="text-black-100 bg-white"
                    >
                    Blogposts
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
                    activeClassName="text-black-100 bg-white"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
                    activeClassName="text-black-100 bg-white"
                    >
                        About Me!
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com"
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{heigh:35, width:35}}
                      />
                    <SocialIcon url="https://www.instagram.com"
                     className="mr-4"
                      target="_blank" 
                      fgColor="#fff" 
                      style={{heigh:35, width:35}} 
                      />
                    <SocialIcon url="https://twitter.com/?lang=sv" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{heigh:35, width:35}} />

                </div>
            </div>
        </header>

    )
}