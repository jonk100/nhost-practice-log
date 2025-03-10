deleteAuthProvider(id: String!): authProviders
delete single row from the table: "auth.providers"

deleteAuthProviderRequest(id: uuid!): authProviderRequests
delete single row from the table: "auth.provider_requests"

deleteAuthProviderRequests(where: authProviderRequests_bool_exp!): authProviderRequests_mutation_response
delete data from the table: "auth.provider_requests"

deleteAuthProviders(where: authProviders_bool_exp!): authProviders_mutation_response
delete data from the table: "auth.providers"

deleteAuthRefreshToken(id: uuid!): authRefreshTokens
delete single row from the table: "auth.refresh_tokens"

deleteAuthRefreshTokenType(value: String!): authRefreshTokenTypes
delete single row from the table: "auth.refresh_token_types"

deleteAuthRefreshTokenTypes(where: authRefreshTokenTypes_bool_exp!): authRefreshTokenTypes_mutation_response
delete data from the table: "auth.refresh_token_types"

deleteAuthRefreshTokens(where: authRefreshTokens_bool_exp!): authRefreshTokens_mutation_response
delete data from the table: "auth.refresh_tokens"

deleteAuthRole(role: String!): authRoles
delete single row from the table: "auth.roles"

deleteAuthRoles(where: authRoles_bool_exp!): authRoles_mutation_response
delete data from the table: "auth.roles"

deleteAuthUserProvider(id: uuid!): authUserProviders
delete single row from the table: "auth.user_providers"

deleteAuthUserProviders(where: authUserProviders_bool_exp!): authUserProviders_mutation_response
delete data from the table: "auth.user_providers"

deleteAuthUserRole(id: uuid!): authUserRoles
delete single row from the table: "auth.user_roles"

deleteAuthUserRoles(where: authUserRoles_bool_exp!): authUserRoles_mutation_response
delete data from the table: "auth.user_roles"

deleteAuthUserSecurityKey(id: uuid!): authUserSecurityKeys
delete single row from the table: "auth.user_security_keys"

deleteAuthUserSecurityKeys(where: authUserSecurityKeys_bool_exp!): authUserSecurityKeys_mutation_response
delete data from the table: "auth.user_security_keys"

deleteBucket(id: String!): buckets
delete single row from the table: "storage.buckets"

deleteBuckets(where: buckets_bool_exp!): buckets_mutation_response
delete data from the table: "storage.buckets"

deleteFile(id: uuid!): files
delete single row from the table: "storage.files"

deleteFiles(where: files_bool_exp!): files_mutation_response
delete data from the table: "storage.files"

deleteUser(id: uuid!): users
delete single row from the table: "auth.users"

deleteUsers(where: users_bool_exp!): users_mutation_response
delete data from the table: "auth.users"

deleteVirus(id: uuid!): virus
delete single row from the table: "storage.virus"

deleteViruses(where: virus_bool_exp!): virus_mutation_response
delete data from the table: "storage.virus"

delete_exercises(where: exercises_bool_exp!): exercises_mutation_response
delete data from the table: "exercises"

delete_exercises_by_pk(id: uuid!): exercises
delete single row from the table: "exercises"

delete_practice_logs(where: practice_logs_bool_exp!): practice_logs_mutation_response
delete data from the table: "practice_logs"

delete_practice_logs_by_pk(id: uuid!): practice_logs
delete single row from the table: "practice_logs"

delete_practice_sessions(where: practice_sessions_bool_exp!): practice_sessions_mutation_response
delete data from the table: "practice_sessions"

delete_practice_sessions_by_pk(id: uuid!): practice_sessions
delete single row from the table: "practice_sessions"

delete_songs(where: songs_bool_exp!): songs_mutation_response
delete data from the table: "songs"

delete_songs_by_pk(id: uuid!): songs
delete single row from the table: "songs"

insertAuthProvider(object: authProviders_insert_input!on_conflict: authProviders_on_conflict): authProviders
insert a single row into the table: "auth.providers"

insertAuthProviderRequest(object: authProviderRequests_insert_input!on_conflict: authProviderRequests_on_conflict): authProviderRequests
insert a single row into the table: "auth.provider_requests"

insertAuthProviderRequests(objects: [authProviderRequests_insert_input!]!on_conflict: authProviderRequests_on_conflict): authProviderRequests_mutation_response
insert data into the table: "auth.provider_requests"

insertAuthProviders(objects: [authProviders_insert_input!]!on_conflict: authProviders_on_conflict): authProviders_mutation_response
insert data into the table: "auth.providers"

insertAuthRefreshToken(object: authRefreshTokens_insert_input!on_conflict: authRefreshTokens_on_conflict): authRefreshTokens
insert a single row into the table: "auth.refresh_tokens"

insertAuthRefreshTokenType(object: authRefreshTokenTypes_insert_input!on_conflict: authRefreshTokenTypes_on_conflict): authRefreshTokenTypes
insert a single row into the table: "auth.refresh_token_types"

insertAuthRefreshTokenTypes(objects: [authRefreshTokenTypes_insert_input!]!on_conflict: authRefreshTokenTypes_on_conflict): authRefreshTokenTypes_mutation_response
insert data into the table: "auth.refresh_token_types"

insertAuthRefreshTokens(objects: [authRefreshTokens_insert_input!]!on_conflict: authRefreshTokens_on_conflict): authRefreshTokens_mutation_response
insert data into the table: "auth.refresh_tokens"

insertAuthRole(object: authRoles_insert_input!on_conflict: authRoles_on_conflict): authRoles
insert a single row into the table: "auth.roles"

insertAuthRoles(objects: [authRoles_insert_input!]!on_conflict: authRoles_on_conflict): authRoles_mutation_response
insert data into the table: "auth.roles"

insertAuthUserProvider(object: authUserProviders_insert_input!on_conflict: authUserProviders_on_conflict): authUserProviders
insert a single row into the table: "auth.user_providers"

insertAuthUserProviders(objects: [authUserProviders_insert_input!]!on_conflict: authUserProviders_on_conflict): authUserProviders_mutation_response
insert data into the table: "auth.user_providers"

insertAuthUserRole(object: authUserRoles_insert_input!on_conflict: authUserRoles_on_conflict): authUserRoles
insert a single row into the table: "auth.user_roles"

insertAuthUserRoles(objects: [authUserRoles_insert_input!]!on_conflict: authUserRoles_on_conflict): authUserRoles_mutation_response
insert data into the table: "auth.user_roles"

insertAuthUserSecurityKey(object: authUserSecurityKeys_insert_input!on_conflict: authUserSecurityKeys_on_conflict): authUserSecurityKeys
insert a single row into the table: "auth.user_security_keys"

insertAuthUserSecurityKeys(objects: [authUserSecurityKeys_insert_input!]!on_conflict: authUserSecurityKeys_on_conflict): authUserSecurityKeys_mutation_response
insert data into the table: "auth.user_security_keys"

insertBucket(object: buckets_insert_input!on_conflict: buckets_on_conflict): buckets
insert a single row into the table: "storage.buckets"

insertBuckets(objects: [buckets_insert_input!]!on_conflict: buckets_on_conflict): buckets_mutation_response
insert data into the table: "storage.buckets"

insertFile(object: files_insert_input!on_conflict: files_on_conflict): files
insert a single row into the table: "storage.files"

insertFiles(objects: [files_insert_input!]!on_conflict: files_on_conflict): files_mutation_response
insert data into the table: "storage.files"

insertUser(object: users_insert_input!on_conflict: users_on_conflict): users
insert a single row into the table: "auth.users"

insertUsers(objects: [users_insert_input!]!on_conflict: users_on_conflict): users_mutation_response
insert data into the table: "auth.users"

insertVirus(object: virus_insert_input!on_conflict: virus_on_conflict): virus
insert a single row into the table: "storage.virus"

insertViruses(objects: [virus_insert_input!]!on_conflict: virus_on_conflict): virus_mutation_response
insert data into the table: "storage.virus"

insert_exercises(objects: [exercises_insert_input!]!on_conflict: exercises_on_conflict): exercises_mutation_response
insert data into the table: "exercises"

insert_exercises_one(object: exercises_insert_input!on_conflict: exercises_on_conflict): exercises
insert a single row into the table: "exercises"

insert_practice_logs(objects: [practice_logs_insert_input!]!on_conflict: practice_logs_on_conflict): practice_logs_mutation_response
insert data into the table: "practice_logs"

insert_practice_logs_one(object: practice_logs_insert_input!on_conflict: practice_logs_on_conflict): practice_logs
insert a single row into the table: "practice_logs"

insert_practice_sessions(objects: [practice_sessions_insert_input!]!on_conflict: practice_sessions_on_conflict): practice_sessions_mutation_response
insert data into the table: "practice_sessions"

insert_practice_sessions_one(object: practice_sessions_insert_input!on_conflict: practice_sessions_on_conflict): practice_sessions
insert a single row into the table: "practice_sessions"

insert_songs(objects: [songs_insert_input!]!on_conflict: songs_on_conflict): songs_mutation_response
insert data into the table: "songs"

insert_songs_one(object: songs_insert_input!on_conflict: songs_on_conflict): songs
insert a single row into the table: "songs"

updateAuthProvider(_set: authProviders_set_inputpk_columns: authProviders_pk_columns_input!): authProviders
update single row of the table: "auth.providers"

updateAuthProviderRequest(
_append: authProviderRequests_append_input
_delete_at_path: authProviderRequests_delete_at_path_input
_delete_elem: authProviderRequests_delete_elem_input
_delete_key: authProviderRequests_delete_key_input
_prepend: authProviderRequests_prepend_input
_set: authProviderRequests_set_input
pk_columns: authProviderRequests_pk_columns_input!
): authProviderRequests
update single row of the table: "auth.provider_requests"

updateAuthProviderRequests(
_append: authProviderRequests_append_input
_delete_at_path: authProviderRequests_delete_at_path_input
_delete_elem: authProviderRequests_delete_elem_input
_delete_key: authProviderRequests_delete_key_input
_prepend: authProviderRequests_prepend_input
_set: authProviderRequests_set_input
where: authProviderRequests_bool_exp!
): authProviderRequests_mutation_response
update data of the table: "auth.provider_requests"

updateAuthProviders(_set: authProviders_set_inputwhere: authProviders_bool_exp!): authProviders_mutation_response
update data of the table: "auth.providers"

updateAuthRefreshToken(
_append: authRefreshTokens_append_input
_delete_at_path: authRefreshTokens_delete_at_path_input
_delete_elem: authRefreshTokens_delete_elem_input
_delete_key: authRefreshTokens_delete_key_input
_prepend: authRefreshTokens_prepend_input
_set: authRefreshTokens_set_input
pk_columns: authRefreshTokens_pk_columns_input!
): authRefreshTokens
update single row of the table: "auth.refresh_tokens"

updateAuthRefreshTokenType(_set: authRefreshTokenTypes_set_inputpk_columns: authRefreshTokenTypes_pk_columns_input!): authRefreshTokenTypes
update single row of the table: "auth.refresh_token_types"

updateAuthRefreshTokenTypes(_set: authRefreshTokenTypes_set_inputwhere: authRefreshTokenTypes_bool_exp!): authRefreshTokenTypes_mutation_response
update data of the table: "auth.refresh_token_types"

updateAuthRefreshTokens(
_append: authRefreshTokens_append_input
_delete_at_path: authRefreshTokens_delete_at_path_input
_delete_elem: authRefreshTokens_delete_elem_input
_delete_key: authRefreshTokens_delete_key_input
_prepend: authRefreshTokens_prepend_input
_set: authRefreshTokens_set_input
where: authRefreshTokens_bool_exp!
): authRefreshTokens_mutation_response
update data of the table: "auth.refresh_tokens"

updateAuthRole(_set: authRoles_set_inputpk_columns: authRoles_pk_columns_input!): authRoles
update single row of the table: "auth.roles"

updateAuthRoles(_set: authRoles_set_inputwhere: authRoles_bool_exp!): authRoles_mutation_response
update data of the table: "auth.roles"

updateAuthUserProvider(_set: authUserProviders_set_inputpk_columns: authUserProviders_pk_columns_input!): authUserProviders
update single row of the table: "auth.user_providers"

updateAuthUserProviders(_set: authUserProviders_set_inputwhere: authUserProviders_bool_exp!): authUserProviders_mutation_response
update data of the table: "auth.user_providers"

updateAuthUserRole(_set: authUserRoles_set_inputpk_columns: authUserRoles_pk_columns_input!): authUserRoles
update single row of the table: "auth.user_roles"

updateAuthUserRoles(_set: authUserRoles_set_inputwhere: authUserRoles_bool_exp!): authUserRoles_mutation_response
update data of the table: "auth.user_roles"

updateAuthUserSecurityKey(
_inc: authUserSecurityKeys_inc_input
_set: authUserSecurityKeys_set_input
pk_columns: authUserSecurityKeys_pk_columns_input!
): authUserSecurityKeys
update single row of the table: "auth.user_security_keys"

updateAuthUserSecurityKeys(
_inc: authUserSecurityKeys_inc_input
_set: authUserSecurityKeys_set_input
where: authUserSecurityKeys_bool_exp!
): authUserSecurityKeys_mutation_response
update data of the table: "auth.user_security_keys"

updateBucket(
_inc: buckets_inc_input
_set: buckets_set_input
pk_columns: buckets_pk_columns_input!
): buckets
update single row of the table: "storage.buckets"

updateBuckets(
_inc: buckets_inc_input
_set: buckets_set_input
where: buckets_bool_exp!
): buckets_mutation_response
update data of the table: "storage.buckets"

updateFile(
_append: files_append_input
_delete_at_path: files_delete_at_path_input
_delete_elem: files_delete_elem_input
_delete_key: files_delete_key_input
_inc: files_inc_input
_prepend: files_prepend_input
_set: files_set_input
pk_columns: files_pk_columns_input!
): files
update single row of the table: "storage.files"

updateFiles(
_append: files_append_input
_delete_at_path: files_delete_at_path_input
_delete_elem: files_delete_elem_input
_delete_key: files_delete_key_input
_inc: files_inc_input
_prepend: files_prepend_input
_set: files_set_input
where: files_bool_exp!
): files_mutation_response
update data of the table: "storage.files"

updateUser(
_append: users_append_input
_delete_at_path: users_delete_at_path_input
_delete_elem: users_delete_elem_input
_delete_key: users_delete_key_input
_prepend: users_prepend_input
_set: users_set_input
pk_columns: users_pk_columns_input!
): users
update single row of the table: "auth.users"

updateUsers(
_append: users_append_input
_delete_at_path: users_delete_at_path_input
_delete_elem: users_delete_elem_input
_delete_key: users_delete_key_input
_prepend: users_prepend_input
_set: users_set_input
where: users_bool_exp!
): users_mutation_response
update data of the table: "auth.users"

updateVirus(
_append: virus_append_input
_delete_at_path: virus_delete_at_path_input
_delete_elem: virus_delete_elem_input
_delete_key: virus_delete_key_input
_prepend: virus_prepend_input
_set: virus_set_input
pk_columns: virus_pk_columns_input!
): virus
update single row of the table: "storage.virus"

updateViruses(
_append: virus_append_input
_delete_at_path: virus_delete_at_path_input
_delete_elem: virus_delete_elem_input
_delete_key: virus_delete_key_input
_prepend: virus_prepend_input
_set: virus_set_input
where: virus_bool_exp!
): virus_mutation_response
update data of the table: "storage.virus"

update_authProviderRequests_many(updates: [authProviderRequests_updates!]!): [authProviderRequests_mutation_response]
update multiples rows of table: "auth.provider_requests"

update_authProviders_many(updates: [authProviders_updates!]!): [authProviders_mutation_response]
update multiples rows of table: "auth.providers"

update_authRefreshTokenTypes_many(updates: [authRefreshTokenTypes_updates!]!): [authRefreshTokenTypes_mutation_response]
update multiples rows of table: "auth.refresh_token_types"

update_authRefreshTokens_many(updates: [authRefreshTokens_updates!]!): [authRefreshTokens_mutation_response]
update multiples rows of table: "auth.refresh_tokens"

update_authRoles_many(updates: [authRoles_updates!]!): [authRoles_mutation_response]
update multiples rows of table: "auth.roles"

update_authUserProviders_many(updates: [authUserProviders_updates!]!): [authUserProviders_mutation_response]
update multiples rows of table: "auth.user_providers"

update_authUserRoles_many(updates: [authUserRoles_updates!]!): [authUserRoles_mutation_response]
update multiples rows of table: "auth.user_roles"

update_authUserSecurityKeys_many(updates: [authUserSecurityKeys_updates!]!): [authUserSecurityKeys_mutation_response]
update multiples rows of table: "auth.user_security_keys"

update_buckets_many(updates: [buckets_updates!]!): [buckets_mutation_response]
update multiples rows of table: "storage.buckets"

update_exercises(
_inc: exercises_inc_input
_set: exercises_set_input
where: exercises_bool_exp!
): exercises_mutation_response
update data of the table: "exercises"

update_exercises_by_pk(
_inc: exercises_inc_input
_set: exercises_set_input
pk_columns: exercises_pk_columns_input!
): exercises
update single row of the table: "exercises"

update_exercises_many(updates: [exercises_updates!]!): [exercises_mutation_response]
update multiples rows of table: "exercises"

update_files_many(updates: [files_updates!]!): [files_mutation_response]
update multiples rows of table: "storage.files"

update_practice_logs(
_inc: practice_logs_inc_input
_set: practice_logs_set_input
where: practice_logs_bool_exp!
): practice_logs_mutation_response
update data of the table: "practice_logs"

update_practice_logs_by_pk(
_inc: practice_logs_inc_input
_set: practice_logs_set_input
pk_columns: practice_logs_pk_columns_input!
): practice_logs
update single row of the table: "practice_logs"

update_practice_logs_many(updates: [practice_logs_updates!]!): [practice_logs_mutation_response]
update multiples rows of table: "practice_logs"

update_practice_sessions(_set: practice_sessions_set_inputwhere: practice_sessions_bool_exp!): practice_sessions_mutation_response
update data of the table: "practice_sessions"

update_practice_sessions_by_pk(_set: practice_sessions_set_inputpk_columns: practice_sessions_pk_columns_input!): practice_sessions
update single row of the table: "practice_sessions"

update_practice_sessions_many(updates: [practice_sessions_updates!]!): [practice_sessions_mutation_response]
update multiples rows of table: "practice_sessions"

update_songs(
_inc: songs_inc_input
_set: songs_set_input
where: songs_bool_exp!
): songs_mutation_response
update data of the table: "songs"

update_songs_by_pk(
_inc: songs_inc_input
_set: songs_set_input
pk_columns: songs_pk_columns_input!
): songs
update single row of the table: "songs"

update_songs_many(updates: [songs_updates!]!): [songs_mutation_response]
update multiples rows of table: "songs"

update_users_many(updates: [users_updates!]!): [users_mutation_response]
update multiples rows of table: "auth.users"

update_virus_many(updates: [virus_updates!]!): [virus_mutation_response]
update multiples rows of table: "storag