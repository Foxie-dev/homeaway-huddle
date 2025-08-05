import { Search, Globe, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">airbnb</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-background border border-border rounded-full px-6 py-2 shadow-card hover:shadow-card-hover transition-all duration-300">
            <button className="text-sm font-medium pr-4 border-r border-border">
              Anywhere
            </button>
            <button className="text-sm font-medium px-4 border-r border-border">
              Any week
            </button>
            <button className="text-sm text-muted-foreground px-4">
              Add guests
            </button>
            <div className="ml-2 bg-primary text-primary-foreground p-2 rounded-full">
              <Search className="h-4 w-4" />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Airbnb your home
            </Button>
            <Button variant="ghost" size="sm">
              <Globe className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2 border border-border rounded-full p-2 hover:shadow-card transition-all duration-300">
              <Menu className="h-4 w-4" />
              <div className="bg-muted rounded-full p-1">
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;