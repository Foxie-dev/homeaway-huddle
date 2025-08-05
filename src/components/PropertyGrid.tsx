import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Downtown Loft",
    location: "New York, NY",
    rating: 4.9,
    price: 189,
    isFavorite: false,
  },
  {
    id: 2,
    image: property2,
    title: "Luxury Villa with Pool",
    location: "Malibu, CA",
    rating: 4.8,
    price: 450,
    isFavorite: true,
  },
  {
    id: 3,
    image: property3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, CO",
    rating: 4.7,
    price: 220,
    isFavorite: false,
  },
  {
    id: 4,
    image: property4,
    title: "Beachfront Paradise",
    location: "Miami, FL",
    rating: 4.9,
    price: 320,
    isFavorite: false,
  },
  {
    id: 5,
    image: property5,
    title: "City Skyline Penthouse",
    location: "Seattle, WA",
    rating: 4.8,
    price: 280,
    isFavorite: true,
  },
  {
    id: 6,
    image: property6,
    title: "Charming Countryside Cottage",
    location: "Napa Valley, CA",
    rating: 4.6,
    price: 175,
    isFavorite: false,
  },
];

const PropertyGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              rating={property.rating}
              price={property.price}
              isFavorite={property.isFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;