import data from '@/app/constants/data';

const { skills } = data;

const Icon = ({ text }: { text: string }) => {
    return (
        <>
            <div className="rounded-full p-2 fill-current text-green-700">
                <svg
                    className="w-6 h-6 align-middle"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <span className="text-lg ml-3">{text}</span>
        </>
    );
};
type TSkill = {
    title: string;
    details: string[];
};

const Skill = ({ skill }: { skill: TSkill }) => {
    const { title, details } = skill;
    return (
        <div className="w-full md:h-[350px] text-white overflow-hidden">
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    {title}
                </h1>
            </div>

            <div className="flex flex-wrap mt-3 px-6">
                <ul>
                    {details.map((d) => (
                        <li key={d} className="flex items-center">
                            <Icon text={d} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section
            className="bg-transparent w-full md:min-h-screen mb-16"
            id="skills"
        >
            <div className="text-center py-[8rem]">
                <h2>Skills</h2>
                <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />

                <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8 flex flex-col md:flex-row space-x-0">
                    {skills.map((skill) => (
                        <Skill key={skill.title} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
