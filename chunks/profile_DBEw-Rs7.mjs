const profile = new Proxy({"src":"/_astro/profile.Cyl4D5ac.jpg","width":1556,"height":1555,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/assets/images/profile.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/assets/images/profile.jpg");
							return target[name];
						}
					});

export { profile as default };
