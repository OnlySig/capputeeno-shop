import Navbar from "@/components/Navbar";
import Tags from "@/components/Tags";
import { ReactNode } from "react";

const LayoutCatalogo = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <section className="bg-[#F0F0F5] h-screen">
        <div className="max-w-[1100px] px-5 mx-auto">
          <Tags />
          {children}
        </div>
      </section>
    </>
  );
};

export default LayoutCatalogo;
