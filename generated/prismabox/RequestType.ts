import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RequestType = t.Union(
  [
    t.Literal("FIND_FULLTEXT_4U"),
    t.Literal("ITHENTICATE"),
    t.Literal("BOOK_DELIVERY"),
    t.Literal("ILL"),
    t.Literal("ACADEMIC_PUBLICATION_DISSEMINATION"),
  ],
  { additionalProperties: false },
);
