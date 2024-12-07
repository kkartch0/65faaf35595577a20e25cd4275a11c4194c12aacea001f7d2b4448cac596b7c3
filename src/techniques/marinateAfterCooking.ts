import { marinades, proteins } from "src/ingredients";
import { Technique } from "./technique";

export const marinateAfterCooking: Technique =
{
    name: "Marinade (after cooking)",
    formula: "Flavor {{cooked protein}} in a {{fatty, acidic liquid with herbs or spices}}",
    generateIdea: () => {
        const protein = proteins[Math.floor(Math.random() * proteins.length)];
        const marinade = marinades[Math.floor(Math.random() * marinades.length)];

        return `Protein: ${protein}\nMarinade: ${marinade}`;
    }
}

