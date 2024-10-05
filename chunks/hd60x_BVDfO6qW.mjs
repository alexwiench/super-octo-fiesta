const hd60x = new Proxy({"src":"/_astro/hd60x.BIjJqqQ8.webp","width":1920,"height":1299,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/content/posts/Capture Card Temperature List/hd60x.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/content/posts/Capture Card Temperature List/hd60x.webp");
							return target[name];
						}
					});

export { hd60x as default };
