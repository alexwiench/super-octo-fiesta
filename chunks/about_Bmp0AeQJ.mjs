import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ChepxZBk.mjs';

const html = "<h1 id=\"about\">About<a class=\"anchor\" href=\"#about\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h1>\n<p>Video editor by day, hobbyist developer by night. I lead post-production at <a href=\"https://intercutproductions.com\">Intercut Productions</a>, crafting stories for commercials, corporate videos, and original series like <a href=\"https://www.feargenics.com/\">Feargenics</a> and <a href=\"https://www.youtube.com/c/DozenDuzit\">Dozen Duzit</a>.</p>\n<p>At <a href=\"https://pixelandwave.io\">Pixel &#x26; Wave</a>, my small marketing agency, I help businesses and nonprofits elevate their brand, create impactful advertising campaigns, and develop effective online strategies.</p>\n<p>When I’m not whipping up content, you can find me hacking away at side projects like <a href=\"https://alexwiench.github.io/json-canvas-to-mermaid-demo/\">JSON Canvas to Mermaid</a> and others on my <a href=\"https://github.com/alexwiench\">GitHub</a>.</p>\n<h2 id=\"lets-work-together\">Let’s work together<a class=\"anchor\" href=\"#lets-work-together\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2>\n<p>Got a project in mind? Shoot me a message on <a href=\"https://twitter.com/AlexWiench\">Twitter</a> or <a href=\"https://www.linkedin.com/in/alexwiench/\">LinkedIn</a>.</p>\n<p>Let’s create something awesome together.</p>";

				const frontmatter = {"minutes":1,"words":94,"excerpt":"Video editor by day, hobbyist developer by night. I lead post-production at Intercut Productions, crafting stories for commercials, corporate videos, and original series like Feargenics and Dozen Duzit."};
				const file = "/home/alex/dev/playground/blog/blog/src/content/spec/about.md";
				const url = undefined;
				function rawContent() {
					return "# About\n\nVideo editor by day, hobbyist developer by night. I lead post-production at [Intercut Productions](https://intercutproductions.com), crafting stories for commercials, corporate videos, and original series like [Feargenics](https://www.feargenics.com/) and [Dozen Duzit](https://www.youtube.com/c/DozenDuzit).\n\nAt [Pixel & Wave](https://pixelandwave.io), my small marketing agency, I help businesses and nonprofits elevate their brand, create impactful advertising campaigns, and develop effective online strategies.\n\nWhen I'm not whipping up content, you can find me hacking away at side projects like [JSON Canvas to Mermaid](https://alexwiench.github.io/json-canvas-to-mermaid-demo/) and others on my [GitHub](https://github.com/alexwiench).\n\n## Let's work together\n\nGot a project in mind? Shoot me a message on [Twitter](https://twitter.com/AlexWiench) or [LinkedIn](https://www.linkedin.com/in/alexwiench/).\n\nLet's create something awesome together.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"about","text":"About#"},{"depth":2,"slug":"lets-work-together","text":"Let’s work together#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
