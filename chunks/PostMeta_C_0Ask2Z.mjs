import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_ChepxZBk.mjs';
import { formatDateToYYYYMMDD } from './date-utils_OyTxlY41.mjs';
import { u as url, a as $$Icon } from './MainGridLayout_BIZ6O6k8.mjs';
import { i as i18n, I as I18nKey } from './content-utils_DlebLk1Z.mjs';
/* empty css                          */

const $$Astro = createAstro("https://localhost:4321");
const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const { published, tags, category, hideTagsForMobile = false } = Astro2.props;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-wrap text-neutral-500 dark:text-neutral-400 items-center gap-4 gap-x-4 gap-y-2", className], "class:list")} data-astro-cid-qtyrxm4s> <!-- publish date --> <div class="flex items-center" data-astro-cid-qtyrxm4s> <div class="meta-icon" data-astro-cid-qtyrxm4s> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-today-outline-rounded", "class": "text-xl", "data-astro-cid-qtyrxm4s": true })} </div> <span class="text-50 text-sm font-medium" data-astro-cid-qtyrxm4s>${formatDateToYYYYMMDD(published)}</span> </div> <!-- categories --> <div class="flex items-center" data-astro-cid-qtyrxm4s> <div class="meta-icon" data-astro-cid-qtyrxm4s> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:book-2-outline-rounded", "class": "text-xl", "data-astro-cid-qtyrxm4s": true })} </div> <div class="flex flex-row flex-nowrap items-center" data-astro-cid-qtyrxm4s> <a${addAttribute(url(`/archive/category/${category || "uncategorized"}/`), "href")}${addAttribute(`View all posts in the ${category} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                            hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap" data-astro-cid-qtyrxm4s> ${category || i18n(I18nKey.uncategorized)} </a> </div> </div> <!-- tags --> <div${addAttribute(["items-center", { "flex": !hideTagsForMobile, "hidden md:flex": hideTagsForMobile }], "class:list")} data-astro-cid-qtyrxm4s> <div class="meta-icon" data-astro-cid-qtyrxm4s> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "class": "text-xl", "data-astro-cid-qtyrxm4s": true })} </div> <div class="flex flex-row flex-nowrap items-center" data-astro-cid-qtyrxm4s> ${tags && tags.length > 0 && tags.map((tag, i) => renderTemplate`<div${addAttribute([{ "hidden": i == 0 }, "mx-1.5 text-[var(--meta-divider)] text-sm"], "class:list")} data-astro-cid-qtyrxm4s>/</div>
                <a${addAttribute(url(`/archive/tag/${tag}/`), "href")}${addAttribute(`View all posts with the ${tag} tag`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap" data-astro-cid-qtyrxm4s> ${tag} </a>`)} ${!(tags && tags.length > 0) && renderTemplate`<div class="transition text-50 text-sm font-medium" data-astro-cid-qtyrxm4s>${i18n(I18nKey.noTags)}</div>`} </div> </div> </div> `;
}, "/home/alex/dev/playground/blog/blog/src/components/PostMeta.astro", void 0);

const $$file = "/home/alex/dev/playground/blog/blog/src/components/PostMeta.astro";
const $$url = undefined;

export { $$PostMeta as default, $$file as file, $$url as url };
