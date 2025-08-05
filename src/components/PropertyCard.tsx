import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  isFavorite?: boolean;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  rating, 
  price, 
  isFavorite = false 
}: PropertyCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </Button>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground truncate">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-foreground" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm">{location}</p>
        <p className="text-muted-foreground text-sm">5 nights · Dec 15-20</p>
        
        <div className="flex items-center space-x-1 pt-1">
          <span className="font-semibold text-foreground">${price}</span>
          <span className="text-muted-foreground text-sm">night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;