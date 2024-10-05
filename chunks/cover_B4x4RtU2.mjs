const cover = new Proxy({"src":"/_astro/cover.B0NSXoRn.webp","width":4800,"height":3200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/content/posts/How to submit a podcast to Gaana Music/cover.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/content/posts/How to submit a podcast to Gaana Music/cover.webp");
							return target[name];
						}
					});

export { cover as default };
