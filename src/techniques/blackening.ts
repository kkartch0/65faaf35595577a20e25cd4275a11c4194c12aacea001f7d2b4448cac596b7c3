import { proteins, spiceMixes } from "src/ingredients";
import { Technique } from "./technique";

export const blackening: Technique = 
{
    name: "Blackening",
    formula: "Create a seasoned crust on {{a protein}} with a {{spice mix}}",
    generateIdea: () => {
        const protein = proteins[Math.floor(Math.random() * proteins.length)];
        const spiceMix = spiceMixes[Math.floor(Math.random() * spiceMixes.length)];

        return `Protein: ${protein}\nSpice mix: ${spiceMix}`;
    }
};
