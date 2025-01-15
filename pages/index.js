import Navbar from "../components/Navbar";
    import HeroSection from "../components/HeroSection";
    import SearchBarber from "../components/SearchBarber";
    import TopBarbers from "../components/TopBarbers";
    import JoinSection from "../components/JoinSection";
    import Footer from "../components/Footer";

    export default function Home() {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <SearchBarber />
            <TopBarbers />
            <JoinSection />
          </main>
          <Footer />
        </div>
      );
    }
