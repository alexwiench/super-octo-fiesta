function check(Component) {
	return Component['render'] && Component['$$render'];
}

function needsHydration(metadata) {
	// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
	return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}

async function renderToStaticMarkup(Component, props, slotted, metadata) {
	const tagName = needsHydration(metadata) ? 'astro-slot' : 'astro-static-slot';
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<${tagName}${key === 'default' ? '' : ` name="${key}"`}>${value}</${tagName}>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer0 = {
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer0 }),];

const env_d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const global_d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

export { env_d as e, global_d as g, renderers as r };
