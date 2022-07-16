import { Logo } from "./Logo";
import { MenuLessons } from "./MenuLessons";

export function Header() {
  return (
    <header className="relative w-full py-5 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 sm:justify-center">
      <Logo/>
      <MenuLessons/>
    </header>
  );
}
