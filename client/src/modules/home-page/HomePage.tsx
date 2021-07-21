import { DashboardLayout } from '../../layouts/dash-auth';
import { ProfileCard } from '../../ui/LightProfileCard';
import { NotificationCard } from '../../ui/notification-card/NotificationCard';

export const HomePage: React.FC = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-8'>
                <NotificationCard
                    title='Smart Pointers in Rust: What, why and how?'
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--HS25Apz5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7tnxcv653muejd3hz8k.png'
                    userIcon={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    showCoverImage={true}
                    readingTime={4}
                    creationDate={'jul 19'}
                    userName={'Muniker Aragon'}
                />
                <NotificationCard
                    title='Smart Pointers in Rust: What, why and how?'
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--HS25Apz5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7tnxcv653muejd3hz8k.png'
                    userIcon={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    readingTime={4}
                    creationDate={'jul 19'}
                    userName={'Muniker Aragon'}
                />
                <NotificationCard
                    title='Smart Pointers in Rust: What, why and how?'
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--HS25Apz5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7tnxcv653muejd3hz8k.png'
                    userIcon={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    readingTime={4}
                    creationDate={'jul 19'}
                    userName={'Muniker Aragon'}
                />
                <NotificationCard
                    title='Smart Pointers in Rust: What, why and how?'
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--HS25Apz5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7tnxcv653muejd3hz8k.png'
                    userIcon={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    readingTime={4}
                    creationDate={'jul 19'}
                    userName={'Muniker Aragon'}
                />
            </div>
            <div className='col-span-4 invisible lg:visible mx-2'>
                <ProfileCard
                    userName={'Muniker Aragon'}
                    userIcon={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    className='col-span-4 w-80 mx-auto mt-8'
                />
            </div>
        </div>
    );
};

(HomePage as any).layout = DashboardLayout;
