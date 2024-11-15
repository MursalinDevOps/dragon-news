import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/layout-components/LeftAside";
import RightAside from "../components/layout-components/RightAside";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 my-5">
                <aside className="col-span-3"><LeftAside></LeftAside></aside>
                <section className="col-span-6">Main</section>
                <aside className="col-span-3"><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default Home;