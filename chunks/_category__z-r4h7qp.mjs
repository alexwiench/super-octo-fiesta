/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_ChepxZBk.mjs';
import { i as i18n, I as I18nKey, b as getCategoryList } from './content-utils_DlebLk1Z.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_BIZ6O6k8.mjs';
import $$ArchivePanel from './ArchivePanel_Cs7vJpPw.mjs';

const $$Astro = createAstro("https://localhost:4321");
async function getStaticPaths() {
  const categories = await getCategoryList();
  return categories.map((category) => {
    return {
      params: {
        category: category.name
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const category = Astro2.params.category;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive), "description": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "categories": [category] })} ` })}`;
}, "/home/alex/dev/playground/blog/blog/src/pages/archive/category/[category].astro", void 0);

const $$file = "/home/alex/dev/playground/blog/blog/src/pages/archive/category/[category].astro";
const $$url = "/archive/category/[category]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
