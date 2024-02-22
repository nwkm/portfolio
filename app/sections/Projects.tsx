import Image from 'next/image';
import data from '@/app/constants/data';

const { projects } = data;

export default function Projects() {
    return (
        <section
            className="bg-transparent w-full md:min-h-screen mb-16"
            id="projects"
        >
            <div className="text-center py-[8rem] px-10 md:px-12 lg:px-[16rem] xl:px-[20rem] relative">
                <h2>Projects</h2>
                <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-5">
                    {projects.map((item, index) => {
                        return (
                            <div className="border p-5 rounded-sm" key={index}>
                                <div className="flex">
                                    <div className="p-2 w-12 h-12 border rounded">
                                        <Image
                                            src={item.icon}
                                            alt="item-icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                                <div className="text-lg font-semibold mt-2">
                                    {item.title}
                                </div>
                                <div className="text-sm mt-2">
                                    {item.description}
                                </div>
                                <div className="text-sm mt-2 font-semibold">
                                    {item.development}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
