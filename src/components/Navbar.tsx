
import { Home, LayoutDashboard, Contact, Settings } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-transparent backdrop-blur-sm border-b border-gray-200/10 px-4 py-2.5 fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
            Examify
          </span>
        </Link>

        <div className="flex items-center lg:order-2">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === "/"
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span className="relative">
                    Home
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#D6BCFA] transform transition-transform duration-300 ${
                        location.pathname === "/"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/dashboard"
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === "/dashboard"
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  <span className="relative">
                    Dashboard
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#D6BCFA] transform transition-transform duration-300 ${
                        location.pathname === "/dashboard"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === "/contact"
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Contact className="w-4 h-4 mr-2" />
                  <span className="relative">
                    Contact
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#D6BCFA] transform transition-transform duration-300 ${
                        location.pathname === "/contact"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/settings"
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === "/settings"
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  <span className="relative">
                    Settings
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#D6BCFA] transform transition-transform duration-300 ${
                        location.pathname === "/settings"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
