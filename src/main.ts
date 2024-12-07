import { Plugin, Notice } from 'obsidian';
import { blackening } from './techniques/blackening';
import { marinateAfterCooking } from './techniques/marinateAfterCooking';
import { stirFrySauce } from './techniques/stirFrySauce';

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
		blackening,
		marinateAfterCooking,
		stirFrySauce
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
	const { seasoningTechniques, formFactors } = mealData;

	const seasoningTechnique = seasoningTechniques[Math.floor(Math.random() * seasoningTechniques.length)];
	const formFactor = formFactors[Math.floor(Math.random() * formFactors.length)];

	return `Technique: ${seasoningTechnique.name}
Formula: ${seasoningTechnique.formula}

${seasoningTechnique.generateIdea()}

Form Factor: ${formFactor}`;
}
