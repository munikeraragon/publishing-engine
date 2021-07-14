import { ActionCard } from '../../ui/ActionCard';

export const LandingPostsPage: React.FC = () => {
    return (
        <div
            id='posts'
            className='min-h-full pt-8 pb-8 mx-2'
            style={{ background: 'rgb(43 49 77)' }}>
            <div className='text-center pb-8'>
                <h1 className='text-2xl md:text-3xl tracking-tight font-semibold text-white'>
                    Top Posts
                </h1>
            </div>

            <div className='max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <ActionCard
                    src='https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/4581872065576960/4866501796429824/image/6233768386887680'
                    title='Https security with
                         Docker+LetsEncript+Nginx+React+ bExpress'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />

                <ActionCard
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdfqrJ9u1tl2XxjuuA74mJ1tLLqtRzSrfG89MG-kTxSGkORbGm-F_fOf4EJLrO6XbR-M&usqp=CAU'
                    title='Testing React Componnets with Jest and React Testing Library'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />
                <ActionCard
                    src='https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6445473125629952/image/5769023684870144'
                    title='React Profiling'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />

                <ActionCard
                    src='https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6518081205567488/image/4996186449641472'
                    title='React tailwind components'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />
                <ActionCard
                    src='https://dist.neo4j.com/wp-content/uploads/20210423062553/neo4j-social-share-21.png'
                    title='Golang and Neo4j example'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />
                <ActionCard
                    src='https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/07/22150609/golang-tutorial.png'
                    title='Golang Profiling'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />
                <ActionCard
                    src='https://i.ytimg.com/vi/o9e3ex-axzA/maxresdefault.jpg'
                    title='Google, Facebook, and Linkedin Authentication with React+Oauth+Express+Passport'
                    description='Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds.'
                    className='mx-2'
                />
            </div>
        </div>
    );
};
