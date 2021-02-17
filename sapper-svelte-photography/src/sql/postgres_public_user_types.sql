create table user_types
(
    id        serial  not null
        constraint user_types_pkey
            primary key,
    user_type varchar not null
);

alter table user_types
    owner to postgres;

INSERT INTO public.user_types (id, user_type) VALUES (1, 'Photographer');
INSERT INTO public.user_types (id, user_type) VALUES (2, 'Model');
INSERT INTO public.user_types (id, user_type) VALUES (3, 'Business');
INSERT INTO public.user_types (id, user_type) VALUES (4, 'Administration');
INSERT INTO public.user_types (id, user_type) VALUES (5, 'Moderator');