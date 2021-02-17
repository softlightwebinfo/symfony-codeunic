create table testimonials
(
    id         serial                                 not null
        constraint testimonials_pkey
            primary key,
    message    text                                   not null,
    fk_user_id bigint                                 not null
        constraint testimonials_fk_user_id_fkey
            references users
            on update cascade on delete restrict,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null
);

alter table testimonials
    owner to postgres;

INSERT INTO public.testimonials (id, message, fk_user_id, created_at, updated_at) VALUES (1, 'The creativity and talent of the Gleam team was amazing. Pro in hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod corrumpit. ', 1, '2021-01-19 21:23:27.328697', '2021-01-19 21:23:27.328697');
INSERT INTO public.testimonials (id, message, fk_user_id, created_at, updated_at) VALUES (2, 'I support my friends whenever they need.', 1, '2021-01-19 21:24:12.738323', '2021-01-19 21:24:12.738323');