create table images_tag
(
    fk_image   bigint                                 not null
        constraint images_tag_fk_image_fkey
            references images
            on update cascade on delete restrict,
    tag        varchar(50)                            not null,
    created_at timestamp                default now() not null,
    updated_at timestamp with time zone default now() not null,
    constraint images_tag_pkey
        primary key (fk_image, tag)
);

alter table images_tag
    owner to postgres;

