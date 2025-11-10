import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
