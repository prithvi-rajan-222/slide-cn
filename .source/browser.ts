// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "layouts/header-with-content.mdx": () => import("../content/docs/layouts/header-with-content.mdx?collection=docs"), "layouts/horizontal-split.mdx": () => import("../content/docs/layouts/horizontal-split.mdx?collection=docs"), "layouts/index.mdx": () => import("../content/docs/layouts/index.mdx?collection=docs"), "layouts/title-slide.mdx": () => import("../content/docs/layouts/title-slide.mdx?collection=docs"), "layouts/vertical-split.mdx": () => import("../content/docs/layouts/vertical-split.mdx?collection=docs"), }),
};
export default browserCollections;