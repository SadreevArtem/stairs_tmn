import { NavigationItem } from "./components/NavigationItem/NavigationItem";
import { navigationItems } from "./static";

export const Navigation = () => {
  return (
    <div className="container mb-6 md:flex flex-row justify-center gap-8 grid grid-cols-2">
      {navigationItems.map((Item, ind) => {
        return <NavigationItem key={ind} Item={Item} />;
      })}
    </div>
  );
};
