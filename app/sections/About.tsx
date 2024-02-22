import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '@/app/constants/data';

const { aboutMe, socialNetworks } = data;

const { title, texts } = aboutMe;

function About() {
    return (
        <section
            className="bg-transparent w-full md:min-h-screen mb-16"
            id="about"
        >
            <div className="text-center py-[8rem] px-10 md:px-12 lg:px-[16rem] xl:px-[20rem] relative">
                <h2>{title}</h2>

                <div className="md:text-lg 2xl:text-xl my-4 text-center">
                    {texts.map((text) => (
                        <p key={text}>{text}</p>
                    ))}
                </div>
                <p>
                    Find me on
                    {socialNetworks.map((s) => (
                        <a
                            key={s.link}
                            href={s.link}
                            className="ml-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={s.icon}
                                size="2x"
                                width="40"
                            />
                        </a>
                    ))}
                </p>
            </div>
        </section>
    );
}

export default About;
