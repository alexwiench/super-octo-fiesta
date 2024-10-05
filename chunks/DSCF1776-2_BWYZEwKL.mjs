const DSCF17762 = new Proxy({"src":"/_astro/DSCF1776-2.DhvvgATM.jpg","width":3596,"height":5394,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/assets/images/DSCF1776-2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/assets/images/DSCF1776-2.jpg");
							return target[name];
						}
					});

export { DSCF17762 as default };
