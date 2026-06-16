import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RequestStatusHistoryPlain = t.Object(
  {
    history_id: t.String(),
    request_id: t.String(),
    old_status: t.Union(
      [
        t.Literal("PENDING"),
        t.Literal("IN_PROGRESS"),
        t.Literal("RESOLVED"),
        t.Literal("REJECTED"),
      ],
      { additionalProperties: false },
    ),
    new_status: t.Union(
      [
        t.Literal("PENDING"),
        t.Literal("IN_PROGRESS"),
        t.Literal("RESOLVED"),
        t.Literal("REJECTED"),
      ],
      { additionalProperties: false },
    ),
    changed_by: __nullable__(t.String()),
    remark: __nullable__(t.String()),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const RequestStatusHistoryRelations = t.Object(
  {
    request: t.Object(
      {
        request_id: t.String(),
        request_number: t.String(),
        title: t.String(),
        request_type: t.Union(
          [
            t.Literal("FIND_FULLTEXT_4U"),
            t.Literal("ITHENTICATE"),
            t.Literal("BOOK_DELIVERY"),
            t.Literal("ILL"),
            t.Literal("ACADEMIC_PUBLICATION_DISSEMINATION"),
          ],
          { additionalProperties: false },
        ),
        requester_name: t.String(),
        requester_email: t.String(),
        detail: t.String(),
        status: t.Union(
          [
            t.Literal("PENDING"),
            t.Literal("IN_PROGRESS"),
            t.Literal("RESOLVED"),
            t.Literal("REJECTED"),
          ],
          { additionalProperties: false },
        ),
        admin_response: __nullable__(t.String()),
        is_delete: t.Boolean(),
        created_at: t.Date(),
        updated_at: t.Date(),
        created_by: __nullable__(t.String()),
      },
      { additionalProperties: false },
    ),
    changed_by_user: __nullable__(
      t.Object(
        {
          user_id: t.String(),
          username: t.String(),
          password_hash: t.String(),
          first_name: t.String(),
          last_name: t.String(),
          role: t.Union([t.Literal("USER"), t.Literal("ADMIN")], {
            additionalProperties: false,
          }),
          is_active: t.Boolean(),
          is_delete: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const RequestStatusHistoryPlainInputCreate = t.Object(
  {
    old_status: t.Union(
      [
        t.Literal("PENDING"),
        t.Literal("IN_PROGRESS"),
        t.Literal("RESOLVED"),
        t.Literal("REJECTED"),
      ],
      { additionalProperties: false },
    ),
    new_status: t.Union(
      [
        t.Literal("PENDING"),
        t.Literal("IN_PROGRESS"),
        t.Literal("RESOLVED"),
        t.Literal("REJECTED"),
      ],
      { additionalProperties: false },
    ),
    changed_by: t.Optional(__nullable__(t.String())),
    remark: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const RequestStatusHistoryPlainInputUpdate = t.Object(
  {
    old_status: t.Optional(
      t.Union(
        [
          t.Literal("PENDING"),
          t.Literal("IN_PROGRESS"),
          t.Literal("RESOLVED"),
          t.Literal("REJECTED"),
        ],
        { additionalProperties: false },
      ),
    ),
    new_status: t.Optional(
      t.Union(
        [
          t.Literal("PENDING"),
          t.Literal("IN_PROGRESS"),
          t.Literal("RESOLVED"),
          t.Literal("REJECTED"),
        ],
        { additionalProperties: false },
      ),
    ),
    changed_by: t.Optional(__nullable__(t.String())),
    remark: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const RequestStatusHistoryRelationsInputCreate = t.Object(
  {
    request: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    changed_by_user: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const RequestStatusHistoryRelationsInputUpdate = t.Partial(
  t.Object(
    {
      request: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      changed_by_user: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const RequestStatusHistoryWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          history_id: t.String(),
          request_id: t.String(),
          old_status: t.Union(
            [
              t.Literal("PENDING"),
              t.Literal("IN_PROGRESS"),
              t.Literal("RESOLVED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: false },
          ),
          new_status: t.Union(
            [
              t.Literal("PENDING"),
              t.Literal("IN_PROGRESS"),
              t.Literal("RESOLVED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: false },
          ),
          changed_by: t.String(),
          remark: t.String(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "RequestStatusHistory" },
  ),
);

export const RequestStatusHistoryWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ history_id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ history_id: t.String() })], {
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
              history_id: t.String(),
              request_id: t.String(),
              old_status: t.Union(
                [
                  t.Literal("PENDING"),
                  t.Literal("IN_PROGRESS"),
                  t.Literal("RESOLVED"),
                  t.Literal("REJECTED"),
                ],
                { additionalProperties: false },
              ),
              new_status: t.Union(
                [
                  t.Literal("PENDING"),
                  t.Literal("IN_PROGRESS"),
                  t.Literal("RESOLVED"),
                  t.Literal("REJECTED"),
                ],
                { additionalProperties: false },
              ),
              changed_by: t.String(),
              remark: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RequestStatusHistory" },
);

export const RequestStatusHistorySelect = t.Partial(
  t.Object(
    {
      history_id: t.Boolean(),
      request_id: t.Boolean(),
      request: t.Boolean(),
      old_status: t.Boolean(),
      new_status: t.Boolean(),
      changed_by: t.Boolean(),
      changed_by_user: t.Boolean(),
      remark: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RequestStatusHistoryInclude = t.Partial(
  t.Object(
    {
      request: t.Boolean(),
      old_status: t.Boolean(),
      new_status: t.Boolean(),
      changed_by_user: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RequestStatusHistoryOrderBy = t.Partial(
  t.Object(
    {
      history_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      request_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      changed_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      remark: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RequestStatusHistory = t.Composite(
  [RequestStatusHistoryPlain, RequestStatusHistoryRelations],
  { additionalProperties: false },
);

export const RequestStatusHistoryInputCreate = t.Composite(
  [
    RequestStatusHistoryPlainInputCreate,
    RequestStatusHistoryRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const RequestStatusHistoryInputUpdate = t.Composite(
  [
    RequestStatusHistoryPlainInputUpdate,
    RequestStatusHistoryRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
