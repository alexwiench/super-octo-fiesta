const banner = new Proxy({"src":"/_astro/banner.DOynUpGy.jpg","width":4899,"height":3266,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/assets/images/banner.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/assets/images/banner.jpg");
							return target[name];
						}
					});

export { banner as default };
