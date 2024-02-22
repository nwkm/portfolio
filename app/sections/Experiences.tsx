import data from '@/app/constants/data';

const { experiences } = data;

type TExperience = {
    title: string;
    date: string;
    place: string;
    bullets: string[];
};

const Experience = ({ exp }: { exp: TExperience }) => {
    const { title, date, place, bullets } = exp;
    return (
        <div className="relative text-left pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                {title}
            </div>

            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-zinc-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-zinc-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    {date}
                </time>
                <div className="text-zinc-500">{place}</div>
            </div>
            <div className="text-zinc-100">
                <ul>
                    {bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Experiences() {
    return (
        <section
            className="bg-transparent w-full md:min-h-screen mb-16"
            id="experiences"
        >
            <div className="text-center pt-[4rem]">
                <h2>Experiences</h2>
                <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />

                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-[2rem]">
                    <div className="flex flex-col justify-center divide-y divide-zinc-50 [&>*]:py-16">
                        <div className="w-full max-w-3xl mx-auto">
                            <div className="-my-6">
                                {experiences.map((exp) => (
                                    <Experience key={exp.title} exp={exp} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
