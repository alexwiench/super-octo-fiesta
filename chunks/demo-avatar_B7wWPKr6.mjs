const demoAvatar = new Proxy({"src":"/_astro/demo-avatar.CxcI0ivM.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/dev/playground/blog/blog/src/assets/images/demo-avatar.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/alex/dev/playground/blog/blog/src/assets/images/demo-avatar.png");
							return target[name];
						}
					});

export { demoAvatar as default };
