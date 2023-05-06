/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Getting Started', header: false, slug: 'getting-started', key: 'getting-started' },

	{ text: 'Basis', header: true, type: 'learn', key: 'basis' },

	{
		text: 'Structure of this course',
		slug: 'basis/1-0_structure',
		key: 'basis/1-0_structure',
	},

	{
		text: 'How it started - Problem first',
		slug: 'basis/1-1_how_it_started',
		key: 'basis/1-1_how_it_started',
	},

	{
		text: 'Bitcoin - To the rescue',
		slug: 'basis/1-2_bitcoin',
		key: 'basis/1-2_bitcoin',
	},

	{
		text: 'Blockchain - the fundamental technology',
		slug: 'basis/1-3_blockchain',
		key: 'basis/1-3_blockchain',
	},
] as const;
