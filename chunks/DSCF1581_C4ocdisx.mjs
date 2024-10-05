const DSCF1581 = new Proxy({"src":"/_astro/DSCF1581.CAYlU6fT.jpg","width":7700,"height":5133,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/assets/images/DSCF1581.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/assets/images/DSCF1581.jpg");
							return target[name];
						}
					});

export { DSCF1581 as default };
