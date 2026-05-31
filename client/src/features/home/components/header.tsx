
import profile from '@/assets/carlosprofile.png';
import { MapPin, MailIcon, Download} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/common/theme-provider';
import { Switch } from '@/components/ui/switch';





export const Header = () => {

    const { theme, setTheme } = useTheme();

    
    return (
        <>
            <div className='col-span-12 md:col-span-3 flex items-start justify-center'>
                <div className="aspect-square w-full max-w-44 shadow-sm overflow-hidden rounded-full">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className='col-span-12 md:col-span-9'>
                <div className='flex flex-col justify-center gap-3'>
                    
                    <div>
                        <div className='flex justify-between items-center'>

                            <p className='capitalize font-bold text-2xl md:text-3xl'>Carlos Loyola</p>  

                            <Switch
                                
                                checked={theme === 'dark'}
                                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                className='cursor-pointer'
                            >
                            </Switch>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <MapPin size={14}/>
                            <p className='capitalize text-sm'>cavite, phillipines </p>
                        </div>
                    </div>


                    <div className='flex gap-2 text-lg'>
                        <p className='capitalize font-medium '>software engineer</p>
                        <span className='opacity-50 '>\</span>
                        <p className='capitalize font-medium ' >gamer</p>
                    </div>


                    <div className='flex flex-row gap-2'>
                        <Button className='cursor-pointer rounded-none shadow-sm'
                        size={'sm'}
                        > 
                            <a 
                                href="mailto:loyolacarlos162@gmail.com"
                                className='flex gap-1 items-center'
                            >
                                <MailIcon/>
                                Send Email
                            </a>
                        </Button>

                        <Button className='cursor-pointer rounded-none shadow-sm'
                        size={'sm'}
                        variant={'outline'}
                        > 
                            <Download/>
                            Download Resume
                        </Button>
                    </div>
                </div>
        
            </div>
        </>


    )
}