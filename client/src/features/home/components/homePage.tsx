

import { Header } from "./header"
import { HeroSection } from "./heroSection"


export const HomePage = () => {
    return (
        
        <div className="container mx-auto px-4 py-8 min-h-screen w-full max-w-4xl">
            <div className='grid grid-cols-12 gap-2 md:gap-5 items-center'>
                <Header/>
            </div>

            <div className="grid grid-cols-12 gap-2 mt-5 items-stretch">
                <HeroSection/>
            </div>

            <div className="grid grid-cols-12 gap-2 mt-11">
                <div className="col-span-12 border-t border-gray-300">
                    <p className="text-center text-xs md:text-sm font-medium my-9">© 2026 Carlos Loyola. All rights reserved.</p>
                </div>
            </div>            
        </div>
    )
}

