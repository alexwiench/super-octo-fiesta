/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_ChepxZBk.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_BIZ6O6k8.mjs';
import $$ArchivePanel from './ArchivePanel_Cs7vJpPw.mjs';
import { i as i18n, I as I18nKey } from './content-utils_DlebLk1Z.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, {})} ` })}`;
}, "/home/alex/dev/playground/blog/blog/src/pages/archive/index.astro", void 0);

const $$file = "/home/alex/dev/playground/blog/blog/src/pages/archive/index.astro";
const $$url = "/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
