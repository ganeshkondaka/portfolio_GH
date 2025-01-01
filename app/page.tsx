import Image from "next/image";
import Left_top from "./components/sections/Left_top";
import Left_bottom from "./components/sections/Left_bottom";
import Right_first from "./components/sections/Right_first";
import Right_second from "./components/sections/Right_second";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen  ">
      {/* Left Column */}
      <div className="flex flex-col w-[450px] border-r border-zinc-700 h-screen sticky top-0 px-6 py-12 bg-[#0D1117]">
        <div className="mb-8">
          <Left_top />
        </div>
        <div>
          <Left_bottom />
        </div>
      </div>

      <div className="p-10 w-full flex">
        {/* Middle Column */}
        <div className="flex-1 w-4/6 overflow-y-auto pr-6 ">
          <Right_first />
        </div>

        {/* Right Column */}
        <div className="w-2/6 p-2 sticky">
          <Right_second />
        </div>
      </div>
    </div>
  );
}
