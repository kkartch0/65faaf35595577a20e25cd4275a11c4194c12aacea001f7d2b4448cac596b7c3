import { Plugin } from "obsidian";

export default class GospelStudyPlugin extends Plugin {
	/**
	 * Called when the plugin is loaded.
	 */
	public async onload() {
		console.log("loading the plugin");
	}

	/**
	 * Called when the plugin is being unloaded.
	 */
	public onunload() {
		console.log("unloading plugin");
	}
}
