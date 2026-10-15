import type { ImageMetadata } from 'astro';
import dotnetConfigDark from '../assets/screenshots/dotnetconfig-dark.png';
import dotnetConfigLight from '../assets/screenshots/dotnetconfig-light.png';
import wingspanDark from '../assets/screenshots/projected-balances-dark.png';
import wingspanLight from '../assets/screenshots/projected-balances-light.png';

/** One tool on the homepage. Adding a tool means adding an entry here. */
export type Tool = {
	/** Unique slug, used for anchors. */
	id: string;
	name: string;
	/** What kind of tool it is and where it runs. */
	kind: string;
	description: string;
	url: string;
	action: string;
	screenshot: { light: ImageMetadata; dark: ImageMetadata; alt: string };
};

export const TOOLS: readonly Tool[] = [
	{
		id: 'wingspan',
		name: 'Wingspan',
		kind: 'Browser extension for Monarch Money',
		description: 'Adds what Monarch Money doesn’t do yet, inside Monarch. See when every bill is due, which card payments checking can cover, and how much is safe to spend today.',
		url: 'https://wingspan.axerie.com',
		action: 'Get Wingspan',
		screenshot: { light: wingspanLight, dark: wingspanDark, alt: 'Projected balances on Monarch’s Cash Flow page, with checking day by day, free cash and what the cards owe.' }
	},
	{
		id: 'dotnet-config-wizard',
		name: '.NET Config Wizard',
		kind: 'Web app for .NET 10 and later',
		description:
			'Picks the analyzers, code style and build settings for a .NET repo, then writes the .editorconfig, props and global.json for you. Start from a preset and change what you want. It runs in your browser, so nothing is uploaded.',
		url: 'https://dotnetconfig.axerie.com',
		action: 'Open the wizard',
		screenshot: { light: dotnetConfigLight, dark: dotnetConfigDark, alt: 'The wizard’s Analyzers step, with the generated .editorconfig beside it.' }
	}
];
