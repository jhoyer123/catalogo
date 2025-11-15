import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <div className="relative w-full h-screen flex flex-col">
        <header>
          <Nav />
        </header>
        <main className="grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
