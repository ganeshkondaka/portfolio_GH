import Image from "next/image";
import Left_top from "./components/sections/Left_top";
import Left_bottom from "./components/sections/Left_bottom";
import Right_first from "./components/sections/Right_first";
import Right_second from "./components/sections/Right_second";

export default function Home() {
  return (
    <div className="grid grid-cols-3 min-h-screen w-screen pt-16">
      <div className="p-4 max-w-96 border-r border-zinc-700 h-screen sticky top-0 overflow-hidden">
        <div>
          <Left_top />
        </div>
        <div>
          <Left_bottom />
        </div>
      </div>

      <div className="col-span-2  overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <Right_first />
          </div>
          <div>
            <Right_second />
          </div>
        </div>
      </div>
    </div>
  );
}
