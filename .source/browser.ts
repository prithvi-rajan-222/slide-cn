// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/deck.mdx": () => import("../content/docs/components/deck.mdx?collection=docs"), "components/index.mdx": () => import("../content/docs/components/index.mdx?collection=docs"), "components/reveal.mdx": () => import("../content/docs/components/reveal.mdx?collection=docs"), "components/slide-image.mdx": () => import("../content/docs/components/slide-image.mdx?collection=docs"), "components/slide.mdx": () => import("../content/docs/components/slide.mdx?collection=docs"), "layouts/header-with-content.mdx": () => import("../content/docs/layouts/header-with-content.mdx?collection=docs"), "layouts/horizontal-split.mdx": () => import("../content/docs/layouts/horizontal-split.mdx?collection=docs"), "layouts/index.mdx": () => import("../content/docs/layouts/index.mdx?collection=docs"), "layouts/title-slide.mdx": () => import("../content/docs/layouts/title-slide.mdx?collection=docs"), "layouts/vertical-split.mdx": () => import("../content/docs/layouts/vertical-split.mdx?collection=docs"), }),
};
export default browserCollections;