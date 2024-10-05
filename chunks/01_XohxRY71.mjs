const _01 = new Proxy({"src":"/_astro/01.BfDA8_br.jpg","width":800,"height":534,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/content/posts/Studying Simple Pooled Storage and Striped Sets/01.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/content/posts/Studying Simple Pooled Storage and Striped Sets/01.jpg");
							return target[name];
						}
					});

export { _01 as default };
