import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UsersPlain = t.Object(
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
);

export const UsersRelations = t.Object(
  {
    requests: t.Array(
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
      { additionalProperties: false },
    ),
    status_history: t.Array(
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
          changed_by: __nullable__(t.String()),
          remark: __nullable__(t.String()),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const UsersPlainInputCreate = t.Object(
  {
    username: t.String(),
    password_hash: t.String(),
    first_name: t.String(),
    last_name: t.String(),
    role: t.Optional(
      t.Union([t.Literal("USER"), t.Literal("ADMIN")], {
        additionalProperties: false,
      }),
    ),
    is_active: t.Optional(t.Boolean()),
    is_delete: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const UsersPlainInputUpdate = t.Object(
  {
    username: t.Optional(t.String()),
    password_hash: t.Optional(t.String()),
    first_name: t.Optional(t.String()),
    last_name: t.Optional(t.String()),
    role: t.Optional(
      t.Union([t.Literal("USER"), t.Literal("ADMIN")], {
        additionalProperties: false,
      }),
    ),
    is_active: t.Optional(t.Boolean()),
    is_delete: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const UsersRelationsInputCreate = t.Object(
  {
    requests: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    status_history: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const UsersRelationsInputUpdate = t.Partial(
  t.Object(
    {
      requests: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      status_history: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const UsersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
    { $id: "Users" },
  ),
);

export const UsersWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { user_id: t.String(), username: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ user_id: t.String() }),
            t.Object({ username: t.String() }),
          ],
          { additionalProperties: false },
        ),
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
      ],
      { additionalProperties: false },
    ),
  { $id: "Users" },
);

export const UsersSelect = t.Partial(
  t.Object(
    {
      user_id: t.Boolean(),
      username: t.Boolean(),
      password_hash: t.Boolean(),
      first_name: t.Boolean(),
      last_name: t.Boolean(),
      role: t.Boolean(),
      is_active: t.Boolean(),
      is_delete: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      requests: t.Boolean(),
      status_history: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UsersInclude = t.Partial(
  t.Object(
    {
      role: t.Boolean(),
      requests: t.Boolean(),
      status_history: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UsersOrderBy = t.Partial(
  t.Object(
    {
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      username: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      password_hash: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      first_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Users = t.Composite([UsersPlain, UsersRelations], {
  additionalProperties: false,
});

export const UsersInputCreate = t.Composite(
  [UsersPlainInputCreate, UsersRelationsInputCreate],
  { additionalProperties: false },
);

export const UsersInputUpdate = t.Composite(
  [UsersPlainInputUpdate, UsersRelationsInputUpdate],
  { additionalProperties: false },
);
