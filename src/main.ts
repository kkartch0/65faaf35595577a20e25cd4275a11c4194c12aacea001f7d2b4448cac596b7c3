import { Plugin, Notice } from 'obsidian';

export default class MealIdeaPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'generate-meal-idea',
            name: 'Generate Meal Idea',
            callback: () => this.generateAndInsertMealIdea(),
        });
    }

    generateAndInsertMealIdea() {
        const mealIdea = generateMealIdea();
		const mealIdeaWithHeader = `### Meal Idea\n${mealIdea}`
        // Notify the user with the generated meal idea
        new Notice(mealIdeaWithHeader);

        // Append the meal idea to the active note
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
            this.app.vault.append(activeFile, `\n\n${mealIdeaWithHeader}`);
        }
    }
}

// Meal Data
const mealData = {
    seasoningTechniques: [
        "Dry Rub",
        "Marinade",
        "Blackening",
        "Glazing",
        "Herb Infusion"
    ],
    leanProteins: [
        "Chicken",
        "Salmon",
        "Tofu",
		"Beef",
        "Pork"
    ],
    formFactors: [
        "Sandwich",
        "Salad",
		"Over Rice",
		"Taco",
		"Pasta",
        "Wrap",
    ]
};

function generateMealIdea() {
    const { seasoningTechniques, leanProteins, formFactors } = mealData;

    const seasoningTechnique = seasoningTechniques[Math.floor(Math.random() * seasoningTechniques.length)];
    const leanProtein = leanProteins[Math.floor(Math.random() * leanProteins.length)];
    const formFactor = formFactors[Math.floor(Math.random() * formFactors.length)];

    return `Technique: ${seasoningTechnique}\nLean protein: ${leanProtein}\nForm factor: ${formFactor}`;
}
