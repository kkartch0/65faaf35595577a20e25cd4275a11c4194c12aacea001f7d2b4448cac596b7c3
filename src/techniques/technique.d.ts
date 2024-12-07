export interface Technique {
    name: string;
    formula: string;
    generateIdea: () => string;
}