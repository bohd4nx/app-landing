import { marked } from "marked";

const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

marked.use({
	gfm: true,
	breaks: false,
	renderer: {
		heading({ text, depth }: { text: string; depth: number }) {
			const plainText = text.replace(/<[^>]*>/g, "");
			const id = slugify(plainText);
			return `<h${depth} id="${id}">${text}</h${depth}>`;
		},
	},
});

export const parseMarkdown = (content: string) => marked.parse(content);
export { slugify };
