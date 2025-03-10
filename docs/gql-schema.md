{
  "data": {
    "__schema": {
      "queryType": {
        "name": "query_root",
        "fields": [
          {
            "name": "authProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authProviderRequest",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authProviderRequests",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviderRequests_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviderRequestsAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviderRequests_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviders",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProvidersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshToken",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenType",
            "args": [
              {
                "name": "value",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenTypes",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokenTypes_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenTypesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokenTypes_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokens",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokens_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokensAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokens_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRole",
            "args": [
              {
                "name": "role",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRoles",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRolesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserProviders",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserProvidersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserRole",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserRoles",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserRolesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKey",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKeys",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserSecurityKeys_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKeysAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserSecurityKeys_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "bucket",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "buckets",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "buckets_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "bucketsAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "buckets_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "exercises_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "exercises_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "file",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "files",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "files_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "filesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "files_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_logs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_logs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "practice_sessions",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_sessions_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_sessions_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_sessions_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_sessions_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "songs",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "songs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "songs_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "songs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "songs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "user",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "users",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "users_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "usersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "users_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "virus",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "viruses",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "virus_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "virusesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "virus_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          }
        ]
      },
      "mutationType": {
        "name": "mutation_root",
        "fields": [
          {
            "name": "deleteAuthProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthProviderRequest",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthProviderRequests",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthProviders",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRefreshToken",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRefreshTokenType",
            "args": [
              {
                "name": "value",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRefreshTokenTypes",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRefreshTokens",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRole",
            "args": [
              {
                "name": "role",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthRoles",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserProviders",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserRole",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserRoles",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserSecurityKey",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteAuthUserSecurityKeys",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteBucket",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteBuckets",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteFile",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteFiles",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteUser",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteUsers",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteVirus",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "deleteViruses",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_exercises",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_exercises_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_practice_logs",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_practice_logs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_practice_sessions",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_practice_sessions_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_songs",
            "args": [
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "delete_songs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "insertAuthProvider",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authProviders_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthProviderRequest",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authProviderRequests_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthProviderRequests",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authProviderRequests_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthProviders",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authProviders_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRefreshToken",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRefreshTokens_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRefreshTokenType",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRefreshTokenTypes_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRefreshTokenTypes",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRefreshTokenTypes_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRefreshTokens",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRefreshTokens_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRole",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRoles_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthRoles",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authRoles_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserProvider",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserProviders_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserProviders",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserProviders_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserRole",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserRoles_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserRoles",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserRoles_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserSecurityKey",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserSecurityKeys_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertAuthUserSecurityKeys",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "authUserSecurityKeys_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertBucket",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "buckets_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertBuckets",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "buckets_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertFile",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "files_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertFiles",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "files_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertUser",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "users_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertUsers",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "users_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertVirus",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "virus_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insertViruses",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "virus_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_exercises",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "exercises_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_exercises_one",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "exercises_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_practice_logs",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "practice_logs_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_practice_logs_one",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "practice_logs_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_practice_sessions",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "practice_sessions_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_practice_sessions_one",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "practice_sessions_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_songs",
            "args": [
              {
                "name": "objects",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "songs_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "insert_songs_one",
            "args": [
              {
                "name": "object",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "name": "songs_on_conflict",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "updateAuthProvider",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authProviders_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthProviderRequest",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "authProviderRequests_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "authProviderRequests_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "authProviderRequests_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "authProviderRequests_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "authProviderRequests_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authProviderRequests_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthProviderRequests",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "authProviderRequests_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "authProviderRequests_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "authProviderRequests_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "authProviderRequests_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "authProviderRequests_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authProviderRequests_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthProviders",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authProviders_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRefreshToken",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "authRefreshTokens_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "authRefreshTokens_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "authRefreshTokens_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "authRefreshTokens_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "authRefreshTokens_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authRefreshTokens_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRefreshTokenType",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authRefreshTokenTypes_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRefreshTokenTypes",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authRefreshTokenTypes_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRefreshTokens",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "authRefreshTokens_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "authRefreshTokens_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "authRefreshTokens_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "authRefreshTokens_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "authRefreshTokens_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authRefreshTokens_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRole",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authRoles_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthRoles",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authRoles_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserProvider",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authUserProviders_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserProviders",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authUserProviders_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserRole",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authUserRoles_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserRoles",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "authUserRoles_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserSecurityKey",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "authUserSecurityKeys_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authUserSecurityKeys_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateAuthUserSecurityKeys",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "authUserSecurityKeys_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "authUserSecurityKeys_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateBucket",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "buckets_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "buckets_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateBuckets",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "buckets_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "buckets_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateFile",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "files_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "files_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "files_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "files_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "name": "files_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "files_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "files_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateFiles",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "files_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "files_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "files_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "files_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "name": "files_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "files_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "files_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "users_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "users_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "users_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "users_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "users_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "users_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateUsers",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "users_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "users_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "users_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "users_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "users_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "users_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateVirus",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "virus_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "virus_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "virus_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "virus_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "virus_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "virus_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "updateViruses",
            "args": [
              {
                "name": "_append",
                "type": {
                  "name": "virus_append_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "name": "virus_delete_at_path_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "name": "virus_delete_elem_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "name": "virus_delete_key_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "name": "virus_prepend_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "virus_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authProviderRequests_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authProviders_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authRefreshTokenTypes_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authRefreshTokens_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authRoles_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authUserProviders_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authUserRoles_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_authUserSecurityKeys_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_buckets_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_exercises",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "exercises_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "exercises_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_exercises_by_pk",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "exercises_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "exercises_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_exercises_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_files_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_logs",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "practice_logs_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "practice_logs_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_logs_by_pk",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "practice_logs_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "practice_logs_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_logs_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_sessions",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "practice_sessions_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_sessions_by_pk",
            "args": [
              {
                "name": "_set",
                "type": {
                  "name": "practice_sessions_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_practice_sessions_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_songs",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "songs_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "songs_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_songs_by_pk",
            "args": [
              {
                "name": "_inc",
                "type": {
                  "name": "songs_inc_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "_set",
                "type": {
                  "name": "songs_set_input",
                  "kind": "INPUT_OBJECT"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_songs_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_users_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "update_virus_many",
            "args": [
              {
                "name": "updates",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          }
        ]
      },
      "subscriptionType": {
        "name": "subscription_root",
        "fields": [
          {
            "name": "authProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authProviderRequest",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authProviderRequests",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviderRequests_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviderRequestsAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviderRequests_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviderRequests_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviderRequests_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviders",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProvidersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authProviders_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshToken",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenType",
            "args": [
              {
                "name": "value",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenTypes",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokenTypes_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenTypesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokenTypes_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokenTypes_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokenTypes_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokens",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokens_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokensAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokens_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRefreshTokens_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRefreshTokens_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRole",
            "args": [
              {
                "name": "role",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authRoles",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRolesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authRoles_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserProvider",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserProviders",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserProvidersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserProviders_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserProviders_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserRole",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserRoles",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserRolesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserRoles_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserRoles_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKey",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKeys",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserSecurityKeys_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKeysAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserSecurityKeys_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "authUserSecurityKeys_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "authUserSecurityKeys_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "bucket",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "buckets",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "buckets_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "bucketsAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "buckets_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "buckets_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "buckets_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "exercises_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "exercises_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "exercises_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "exercises_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "exercises_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "file",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "files",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "files_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "filesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "files_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "files_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "files_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_logs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_logs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_logs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "practice_logs_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_logs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_sessions",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_sessions_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_sessions_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_sessions_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "practice_sessions_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "practice_sessions_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "practice_sessions_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "songs",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "songs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "songs_aggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "songs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "songs_by_pk",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "songs_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "songs_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "user",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "users",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "users_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "usersAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "users_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "users_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "users_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "virus",
            "args": [
              {
                "name": "id",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              }
            ]
          },
          {
            "name": "virus_stream",
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "name": null,
                  "kind": "NON_NULL"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "virus_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "viruses",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "virus_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          },
          {
            "name": "virusesAggregate",
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "limit",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "offset",
                "type": {
                  "name": "Int",
                  "kind": "SCALAR"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "name": null,
                  "kind": "LIST"
                }
              },
              {
                "name": "where",
                "type": {
                  "name": "virus_bool_exp",
                  "kind": "INPUT_OBJECT"
                }
              }
            ]
          }
        ]
      }
    }
  }
}