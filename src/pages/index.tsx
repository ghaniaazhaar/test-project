import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CustomButton from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Next.js App.</h1>
        <CustomButton label="Click Me" />
      </main>
      <Footer />
    </div>
  );
}
