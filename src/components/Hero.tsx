import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-hero-gradient py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Find your next stay
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover unique places to stay around the world
        </p>
        
        {/* Enhanced Search Bar */}
        <div className="max-w-4xl mx-auto bg-background rounded-full shadow-card-hover p-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="p-4 text-left">
              <label className="text-xs font-semibold text-foreground">Where</label>
              <input 
                placeholder="Search destinations" 
                className="w-full bg-transparent border-none outline-none text-sm mt-1"
              />
            </div>
            <div className="p-4 text-left border-l border-border">
              <label className="text-xs font-semibold text-foreground">Check in</label>
              <input 
                placeholder="Add dates" 
                className="w-full bg-transparent border-none outline-none text-sm mt-1"
              />
            </div>
            <div className="p-4 text-left border-l border-border">
              <label className="text-xs font-semibold text-foreground">Check out</label>
              <input 
                placeholder="Add dates" 
                className="w-full bg-transparent border-none outline-none text-sm mt-1"
              />
            </div>
            <div className="p-4 text-left border-l border-border relative">
              <label className="text-xs font-semibold text-foreground">Who</label>
              <input 
                placeholder="Add guests" 
                className="w-full bg-transparent border-none outline-none text-sm mt-1 pr-12"
              />
              <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;