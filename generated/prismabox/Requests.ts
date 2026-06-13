import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RequestsPlain = t.Object(
  {
    request_id: t.String(),
    request_number: t.String(),
    title: t.String(),
    request_type: t.Union(
      [
        t.Literal("FIND_FULLTEXT_4U"),
        t.Literal("ITHENTICATE"),
        t.Literal("BOOK_DELIVERY"),
      ],
      { additionalProperties: false },
    ),
    requester_name: t.String(),
    requester_email: t.String(),
    detail: t.String(),
    is_delete: t.Boolean(),
    created_at: t.Date(),
    updated_at: t.Date(),
  },
  { additionalProperties: false },
);

export const RequestsRelations = t.Object({}, { additionalProperties: false });

export const RequestsPlainInputCreate = t.Object(
  {
    request_number: t.String(),
    title: t.String(),
    request_type: t.Union(
      [
        t.Literal("FIND_FULLTEXT_4U"),
        t.Literal("ITHENTICATE"),
        t.Literal("BOOK_DELIVERY"),
      ],
      { additionalProperties: false },
    ),
    requester_name: t.String(),
    requester_email: t.String(),
    detail: t.String(),
    is_delete: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const RequestsPlainInputUpdate = t.Object(
  {
    request_number: t.Optional(t.String()),
    title: t.Optional(t.String()),
    request_type: t.Optional(
      t.Union(
        [
          t.Literal("FIND_FULLTEXT_4U"),
          t.Literal("ITHENTICATE"),
          t.Literal("BOOK_DELIVERY"),
        ],
        { additionalProperties: false },
      ),
    ),
    requester_name: t.Optional(t.String()),
    requester_email: t.Optional(t.String()),
    detail: t.Optional(t.String()),
    is_delete: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const RequestsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const RequestsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const RequestsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          request_id: t.String(),
          request_number: t.String(),
          title: t.String(),
          request_type: t.Union(
            [
              t.Literal("FIND_FULLTEXT_4U"),
              t.Literal("ITHENTICATE"),
              t.Literal("BOOK_DELIVERY"),
            ],
            { additionalProperties: false },
          ),
          requester_name: t.String(),
          requester_email: t.String(),
          detail: t.String(),
          is_delete: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Requests" },
  ),
);

export const RequestsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ request_id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ request_id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              request_id: t.String(),
              request_number: t.String(),
              title: t.String(),
              request_type: t.Union(
                [
                  t.Literal("FIND_FULLTEXT_4U"),
                  t.Literal("ITHENTICATE"),
                  t.Literal("BOOK_DELIVERY"),
                ],
                { additionalProperties: false },
              ),
              requester_name: t.String(),
              requester_email: t.String(),
              detail: t.String(),
              is_delete: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Requests" },
);

export const RequestsSelect = t.Partial(
  t.Object(
    {
      request_id: t.Boolean(),
      request_number: t.Boolean(),
      title: t.Boolean(),
      request_type: t.Boolean(),
      requester_name: t.Boolean(),
      requester_email: t.Boolean(),
      detail: t.Boolean(),
      is_delete: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RequestsInclude = t.Partial(
  t.Object(
    { request_type: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RequestsOrderBy = t.Partial(
  t.Object(
    {
      request_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      request_number: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requester_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requester_email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_delete: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Requests = t.Composite([RequestsPlain, RequestsRelations], {
  additionalProperties: false,
});

export const RequestsInputCreate = t.Composite(
  [RequestsPlainInputCreate, RequestsRelationsInputCreate],
  { additionalProperties: false },
);

export const RequestsInputUpdate = t.Composite(
  [RequestsPlainInputUpdate, RequestsRelationsInputUpdate],
  { additionalProperties: false },
);
