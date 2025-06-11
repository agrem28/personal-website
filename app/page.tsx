import { GoDotFill } from "react-icons/go";

export default function Page() {
  return (
    <main>
      <h1 className="">Andrew Gremillion</h1>
      <div>
        <p className="md:max-w-[756px] lg:max-w-[1024px] text-justify">
          I am a software engineer interested in creating and maintaining useful
          and powerful websites and apps. I am new in the tech industry, but I
          am eager to join and excited to continue learning and growing my
          skills. I am especially interested in backend implementation and
          database design. Thank you for checking out my site!
        </p>
      </div>
      <div className="py-4">
        <div className="md:w-1/2 h-10 border rounded-t-2xl border-border">
          <div className="flex relative top-2.5 left-2.5 text-border">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </div>
        </div>
        <div className="md:w-1/2 h-10 border rounded-b-2xl border-border relative -top-[1px]"></div>
      </div>
      <div>
        <h2>My Projects</h2>
      </div>
    </main>
  );
}
