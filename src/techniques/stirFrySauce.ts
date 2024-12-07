import { proteins, saltySpicySweetUmamiSauces, vegetables } from "src/ingredients";
import { Technique } from "./technique";

export const stirFrySauce: Technique = 
{
    name: "Stir Fry Sauce",
    formula: "Coat stir fried {{proteins or vegetables}} in a {{salty, spicy, sweet umami sauce}}",
    generateIdea: () => {
        const proteinsAndVegetables = [];
        proteinsAndVegetables.push(proteins[Math.floor(Math.random() * proteins.length)]);
        proteinsAndVegetables.push(vegetables[Math.floor(Math.random() * vegetables.length)]);

        const sauce = saltySpicySweetUmamiSauces[Math.floor(Math.random() * saltySpicySweetUmamiSauces.length)];

        return `Proteins and vegetables: ${proteinsAndVegetables.join(", ")}\nSauce: ${sauce}`;
    }
};
