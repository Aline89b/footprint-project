import Image from "next/image";
import bgWorldUrl from "../public/images/bgWorld.svg?url"

export default function Header() {
  return (
    <Image
      src={bgWorldUrl}
      alt="Flight footprint calculator"
      fill
      style={{ objectFit: "cover" }}
  />
  );
}
