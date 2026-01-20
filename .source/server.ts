// @ts-nocheck
import * as __fd_glob_7 from "../content/docs/layouts/vertical-split.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/layouts/title-slide.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/layouts/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/layouts/horizontal-split.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/layouts/header-with-content.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/components/deck.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "components/deck.mdx": __fd_glob_1, "components/index.mdx": __fd_glob_2, "layouts/header-with-content.mdx": __fd_glob_3, "layouts/horizontal-split.mdx": __fd_glob_4, "layouts/index.mdx": __fd_glob_5, "layouts/title-slide.mdx": __fd_glob_6, "layouts/vertical-split.mdx": __fd_glob_7, });