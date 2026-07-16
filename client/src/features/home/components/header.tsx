
import profile from '@/assets/carlosprofile.png';
import { MapPin, MailIcon, Download} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/common/theme-provider';
import { Switch } from '@/components/ui/switch';





export const Header = () => {

    const { theme, setTheme } = useTheme();

    
    return (
        <>
            <div className='col-span-4 md:col-span-3 '>
                <div className="aspect-square w-full max-w-46 shadow-sm overflow-hidden rounded-full ">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className='col-span-8 md:col-span-9'>
                <div className='flex flex-col justify-center gap-2'>
                    
                    <div>
                        <div className='flex justify-between items-center'>

                            <p className='capitalize font-bold text-lg md:text-2xl'>Carlos Loyola</p>  

                            <Switch
                                
                                checked={theme === 'dark'}
                                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                className='cursor-pointer'
                            >
                            </Switch>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <MapPin size={14}/>
                            <p className='capitalize text-xs md:text-sm'>cavite, phillipines </p>
                        </div>
                    </div>


                    <div className='flex gap-2 text-xs md:text-lg '>
                        <p className='capitalize font-medium '>software engineer</p>
                        <span className='opacity-50 '>\</span>
                        <p className='capitalize font-medium ' >gamer</p>
                    </div>


                    <div className='flex flex-row gap-2'>
                        <Button className='cursor-pointer rounded-none shadow-sm '
                        size={'sm'}
                        > 
                            <a 
                                href="mailto:loyolacarlos162@gmail.com"
                                className='flex gap-1 items-center text-[10px] '
                            >
                                <MailIcon/>
                                Send Email
                            </a>
                        </Button>

                        <Button className='cursor-pointer rounded-none shadow-sm '
                        variant={'outline'}
                        size={'sm'}

                        > 
                            <a className='flex gap-1 items-center text-[10px] '
                                href='/resume.pdf'
                                download='carlos-resume.pdf'
                            >
                                <Download/>
                                Download Resume
                            </a>

                        </Button>
                    </div>
                </div>
        
            </div>
        </>


    )
}