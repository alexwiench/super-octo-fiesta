import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ChepxZBk.mjs';

const html = "<p>Visit <a href=\"https://podcasts.gaana.com/\">https://podcasts.gaana.com/</a> and sign up. Be wary of the “Host your podcast on Gaana CDN” option. You may not want it enabled.</p>\n<p>If you’re submitting to Gaana, you probably want to submit to JioSaavn too. Here is that link: <a href=\"https://yourcast.jiosaavn.com/\">https://yourcast.jiosaavn.com/</a></p>\n<p>I felt compelled to post this because it took me some digging and several emails to find this link. Hopefully, this saved you some time.</p>";

				const frontmatter = {"title":"How to submit a podcast to Gaana Music","published":"2020-08-04T00:00:00.000Z","description":"Gaana Music is one of the largest streaming providers in India. This is how to get your podcast on it.","image":"./cover.webp","tags":["podcasting"],"category":"Indexed","draft":false,"language":"","minutes":1,"words":63,"excerpt":"Visit https://podcasts.gaana.com/ and sign up. Be wary of the “Host your podcast on Gaana CDN” option. You may not want it enabled."};
				const file = "/home/alex/dev/playground/blog/blog/src/content/posts/How to submit a podcast to Gaana Music/index.md";
				const url = undefined;
				function rawContent() {
					return "\nVisit <https://podcasts.gaana.com/> and sign up. Be wary of the “Host your podcast on Gaana CDN” option. You may not want it enabled.\n\nIf you’re submitting to Gaana, you probably want to submit to JioSaavn too. Here is that link: <https://yourcast.jiosaavn.com/>\n\nI felt compelled to post this because it took me some digging and several emails to find this link. Hopefully, this saved you some time.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
