// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/layouts/vertical-split.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/layouts/title-slide.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/layouts/index.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/layouts/horizontal-split.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/layouts/header-with-content.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/slide.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/slide-image.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/reveal.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/deck.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/code-block.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/card.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/callout.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/accordion.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "installation.mdx": __fd_glob_1, "components/accordion.mdx": __fd_glob_2, "components/callout.mdx": __fd_glob_3, "components/card.mdx": __fd_glob_4, "components/code-block.mdx": __fd_glob_5, "components/deck.mdx": __fd_glob_6, "components/index.mdx": __fd_glob_7, "components/reveal.mdx": __fd_glob_8, "components/slide-image.mdx": __fd_glob_9, "components/slide.mdx": __fd_glob_10, "layouts/header-with-content.mdx": __fd_glob_11, "layouts/horizontal-split.mdx": __fd_glob_12, "layouts/index.mdx": __fd_glob_13, "layouts/title-slide.mdx": __fd_glob_14, "layouts/vertical-split.mdx": __fd_glob_15, });