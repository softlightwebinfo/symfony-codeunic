create table posts
(
    id         bigserial                              not null
        constraint posts_pkey
            primary key,
    fk_user_id bigint                                 not null
        constraint posts_fk_user_id_fkey
            references users
            on update cascade on delete restrict,
    message    text                                   not null,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null
);

alter table posts
    owner to postgres;

