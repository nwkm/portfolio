import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Projects from './Projects';
import Hero from './Hero';

export default function Sections() {
    return (
        <section className={'bg-transparent w-full'}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experiences />
        </section>
    );
}
