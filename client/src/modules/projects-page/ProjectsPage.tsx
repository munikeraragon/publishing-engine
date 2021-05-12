import { ActionCard } from "../../ui/ActionCard";

export const ProjectsPage = () => {
    return (
        <div id="projects" className="min-h-full bg-gray-100 pt-8 pb-8">
            <div className="text-center pb-8">
                <h1 className="text-3xl tracking-tight font-medium text-gray-800">Projects</h1>
            </div>

            <div className="max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
                <ActionCard 
                    src="json-compare1.PNG"
                    title="JSON Compare"
                    description="Efficiently compares the content of large JSON payloads."
                    className="mx-2" 
                />
                <ActionCard 
                    src="json-compare2.png"
                    title="JSON Compare"
                    description="Efficiently compares the content of large JSON payloads."
                    className="mx-2" 
                />
                <ActionCard 
                    src="json-compare3.PNG"
                    title="JSON Compare"
                    description="Efficiently compares the content of large JSON payloads."
                    className="mx-2" 
                />
                <ActionCard 
                    src="https://ethereum.org/static/a44134e541c72364beb121234ab5864e/19ca5/infrastructure_transparent.png"
                    title="Title"
                    description="Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds."
                    className="mx-2" 
                />
                <ActionCard 
                    src="https://ethereum.org/static/a44134e541c72364beb121234ab5864e/19ca5/infrastructure_transparent.png"
                    title="Title"
                    description="Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds."
                    className="mx-2" 
                />
                <ActionCard 
                    src="https://ethereum.org/static/a44134e541c72364beb121234ab5864e/19ca5/infrastructure_transparent.png"
                    title="Title"
                    description="Space, the final frontier. These are the voyages of the Starship
                    Enterprise. Its five-year mission: to explore strange new worlds."
                    className="mx-2" 
                />
            </div>
        </div>
    );
};