import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sections from './sections';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-navy">
            <Navbar />
            <Sections />
            <Footer />
        </main>
    );
}
