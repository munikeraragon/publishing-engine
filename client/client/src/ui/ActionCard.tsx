
export interface ActionCardProps {
    src: string
    title: string
    description: string
    className?: string 
}

export const ActionCard: React.FC<ActionCardProps> = ({src, title, description, className=""}) => {
    return (
        <div className={`border-2 border-gray-400 rounded-lg ${className}`}>
            <div className="flex bg-blue-100 rounded-lg">
                <img
                    className="mx-auto object-cover rounded-lg"
                    src={src}
                />
            </div>

            <div className="m-3">
                <h2 className="text-lg mb-2">
                    {title}
                    <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
                        Tag
                    </span>
                </h2>
                <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                    {description}
                </p>
            </div>
        </div>
    );
};
