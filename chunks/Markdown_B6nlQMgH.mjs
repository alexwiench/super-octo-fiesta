import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_ChepxZBk.mjs';
/* empty css                         */

const $$Astro = createAstro("https://localhost:4321");
const $$Markdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Markdown;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div data-pagefind-body${addAttribute(`prose dark:prose-invert prose-base max-w-none custom-md ${className}`, "class")}> <!--<div class="prose dark:prose-invert max-w-none custom-md">--> <!--<div class="max-w-none custom-md">--> ${renderSlot($$result, $$slots["default"])} </div>  <!-- Styles for copy-code-button -->   `;
}, "/home/alex/dev/playground/blog/blog/src/components/misc/Markdown.astro", void 0);

const $$file = "/home/alex/dev/playground/blog/blog/src/components/misc/Markdown.astro";
const $$url = undefined;

export { $$Markdown as default, $$file as file, $$url as url };
