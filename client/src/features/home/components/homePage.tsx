

import { Header } from "./header"
import { HeroSection } from "./heroSection"


export const HomePage = () => {
    return (
        
        <div className="container mx-auto px-4 py-8 min-h-screen w-full max-w-4xl">
            <div className='grid grid-cols-12 gap-7 items-center'>
                <Header/>
            </div>

            <div className="grid grid-cols-12 gap-2 mt-2">
                <HeroSection/>
            </div>
        </div>
    )
}

