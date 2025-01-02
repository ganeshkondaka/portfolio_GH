import Left_top from "./components/sections/Left_top";
import Left_bottom from "./components/sections/Left_bottom";
import Right_first from "./components/sections/Right_first";
import Right_second from "./components/sections/Right_second";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-screen bg-black">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-[450px] border-r border-zinc-700 lg:h-screen lg:sticky lg:top-0 px-6 py-12 bg-[#0D1117] order-2 lg:order-none">
        <div className="mb-8">
          <Left_top />
        </div>
        <div>
          <Left_bottom />
        </div>
      </div>
      
      {/* Second Container (Middle + Right Column) */}
      <div className="p-4 lg:p-10 w-full flex flex-col lg:flex-row text-black dark:text-white order-1 lg:order-none">
        {/* Middle Column */}
        <div className="flex-1 lg:w-4/6 overflow-y-auto lg:pr-6">
          <Right_first />
        </div>

        {/* Right Column (Hidden on small screens) */}
        <div className="lg:w-2/6 lg:p-2 lg:sticky hidden lg:block">
          <Right_second />
        </div>
      </div>

    </div>
  );
}
