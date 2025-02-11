import { SearchIcon, ShoppingBag } from "lucide-react";
import { Saira_Stencil_One } from "next/font/google";
import Form from "next/form";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1120px] mx-auto h-20">
      <h1
        className={`font-saira-stencil-one text-4xl text-[#5D5D6D] ${sairaStencilOne.className}`}
      >
        capputeeno
      </h1>
      <div className="flex items-center">
        <Form
          action={""}
          className="flex items-center justify-between w-[352px] bg-primaryBg rounded-md px-4 mr-6"
        >
          <input
            type="text"
            id="icon"
            className={"bg-primaryBg w-full h-10 outline-none"}
          />
          <label htmlFor="icon">
            <SearchIcon style={{ cursor: "pointer" }} />
          </label>
        </Form>
        <ShoppingBag />
      </div>
    </nav>
  );
};

export default Navbar;
