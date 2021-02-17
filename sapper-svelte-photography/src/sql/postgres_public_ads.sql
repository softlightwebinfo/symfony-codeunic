create table ads
(
    id              bigserial                              not null
        constraint ads_pkey
            primary key,
    title           varchar                                not null,
    description     text                                   not null,
    active          boolean                                not null,
    created_at      timestamp with time zone default now() not null,
    updated_at      timestamp with time zone default now() not null,
    fk_user_id      bigint                                 not null
        constraint ads_fk_user_id_fkey
            references users
            on update cascade on delete restrict,
    expired_at      timestamp with time zone,
    file            varchar,
    fk_page         integer,
    fk_page_section varchar,
    constraint ads_fk_page_section_fk_page_fkey
        foreign key (fk_page_section, fk_page) references pages_sections (section, fk_page)
            on update cascade on delete set null
);

alter table ads
    owner to postgres;

INSERT INTO public.ads (id, title, description, active, created_at, updated_at, fk_user_id, expired_at, file, fk_page, fk_page_section) VALUES (1, 'Fashion 1', 'Fashion description', true, '2021-01-23 19:18:34.373287', '2021-01-23 19:31:23.145517', 2, null, 'fashion1.jpeg', 1, 'bottom_horizontal');
INSERT INTO public.ads (id, title, description, active, created_at, updated_at, fk_user_id, expired_at, file, fk_page, fk_page_section) VALUES (2, 'Fashion 2', 'Fashion description', true, '2021-01-23 19:18:34.373287', '2021-01-23 19:31:23.145517', 2, null, 'fashion2.jpeg', 1, 'bottom_horizontal');
INSERT INTO public.ads (id, title, description, active, created_at, updated_at, fk_user_id, expired_at, file, fk_page, fk_page_section) VALUES (3, 'Fashion 3', 'Fashion description', true, '2021-01-23 19:18:34.373287', '2021-01-23 19:48:10.260804', 2, null, 'fashion3.jpeg', 2, 'left');
INSERT INTO public.ads (id, title, description, active, created_at, updated_at, fk_user_id, expired_at, file, fk_page, fk_page_section) VALUES (5, 'Fashion 5', 'Fashion description', true, '2021-01-23 19:18:34.373287', '2021-01-23 19:48:35.387215', 2, null, 'fashion5.mp4', 2, 'left');
INSERT INTO public.ads (id, title, description, active, created_at, updated_at, fk_user_id, expired_at, file, fk_page, fk_page_section) VALUES (4, 'Fashion 4', 'Fashion description', true, '2021-01-23 19:18:34.373287', '2021-01-23 22:14:35.038291', 2, null, 'fashion4.mp4', 3, 'left');