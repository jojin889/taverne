import blockContent from "./schemas/blockContent";
import dessert from "./schemas/dessert";
import viande from "./schemas/viande";
import entree from "./schemas/entree";
import poisson from "./schemas/poisson";
import sauce from "./schemas/sauce";
import images from "./schemas/images";

export const schema = {
  types: [viande, entree, dessert, poisson, sauce, images, blockContent],
};