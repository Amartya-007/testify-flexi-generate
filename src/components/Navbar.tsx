import { Home, LayoutDashboard, Contact, Settings } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-2.5 fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-primary whitespace-nowrap">
            Examify
          </span>
        </Link>

        <div className="flex items-center lg:order-2">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="flex items-center text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/dashboard"
                  className="flex items-center text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="flex items-center text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  <Contact className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/settings"
                  className="flex items-center text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
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