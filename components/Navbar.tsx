import { FloatingDock } from "@/components/ui/floating-dock";
import { NavBarData } from "@/asset/Data";

export default function Home() {
  const links = NavBarData;
  return (
    <div className="flex sm:justify-center justify-end pb-5 h-full w-full">
      <FloatingDock
        desktopClassName=" rounded-full"
        mobileClassName=" pr-3"
        items={links}
      />
    </div>
  );
}
