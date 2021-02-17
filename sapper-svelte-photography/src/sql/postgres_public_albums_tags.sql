create table albums_tags
(
    fk_album_id bigint                                 not null
        constraint albums_tags_fk_album_id_fkey
            references albums
            on update cascade on delete restrict,
    tag         varchar(50)                            not null,
    created_at  timestamp with time zone default now() not null,
    updated_at  timestamp with time zone default now() not null,
    constraint albums_tags_pkey
        primary key (fk_album_id, tag)
);

alter table albums_tags
    owner to postgres;

