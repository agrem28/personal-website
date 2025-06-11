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
        <div className="md:w-1/2 h-10 border rounded-t-2xl border-border bg-[#181818]">
          <div className="flex p-2.5 text-border">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </div>
        </div>
        <div className="md:w-1/2 p-2.5 border rounded-b-2xl border-border bg-[#1f1f1f] relative -top-[1px] font-mono whitespace-pre-wrap">
          <p>
            <span className="text-[#689ad3]">function </span>
            <span className="text-[#dbdcae]">greet</span>
            <span className="text-[#ead933]">{`(`}</span>
            <span className="text-[#a9dafc]">name</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className="text-[#6ec6b1]">string</span>
            <span className="text-[#ead933]">{`)`}</span>
            <span className="text-[#ead933]">{` {`}</span>
          </p>
          <p>
            <span className="whitespace-pre-wrap">{"\t"}</span>
            <span className="text-[#b4899f]">return </span>
            <span className="text-[#c6947b]">{`"Hello "`}</span>
            <span className="text-[#d4d4d4]"> + </span>
            <span className="text-[#a9dafc]">name</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
          <p>
            <span className="text-[#ead933]">{`}`}</span>
          </p>
          <p className="whitespace-pre-line">{`\n`}</p>
          <p>
            <span className="text-[#689ad3]">const </span>
            <span className="text-[#6fbefb]">message </span>
            <span className="text-[#d4d4d4]"> = </span>
            <span className="text-[#dbdcae]">greet</span>
            <span className="text-[#ead933]">{`(`}</span>
            <span className="text-[#c6947b]">{`"Andrew"`}</span>
            <span className="text-[#ead933]">{`)`}</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
          <p className="whitespace-pre-line">{`\n`}</p>
          <p>
            <span className="text-[#a9dafc]">console</span>
            <span className="text-[#d4d4d4]">.</span>
            <span className="text-[#dbdcae]">log</span>
            <span className="text-[#ead933]">{`(`}</span>
            <span className="text-[#6fbefb]">message</span>
            <span className="text-[#ead933]">{`)`}</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
        </div>
      </div>
      <div>
        <h2>My Projects</h2>
      </div>
    </main>
  );
}

function greet(name: string) {
  return "Hello " + name;
}

const message = greet("Andrew");

console.log(message);
