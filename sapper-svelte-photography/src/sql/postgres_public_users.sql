create table users
(
    id           bigserial                              not null
        constraint users_pkey
            primary key,
    email        varchar(150)                           not null,
    password     varchar(150)                           not null,
    created_at   timestamp with time zone default now() not null,
    updated_at   timestamp with time zone default now() not null,
    username     varchar(100)                           not null,
    name         varchar,
    fk_user_type integer
        constraint users_fk_user_type_fkey
            references user_types
            on update cascade on delete set null
);

alter table users
    owner to postgres;

INSERT INTO public.users (id, email, password, created_at, updated_at, username, name, fk_user_type) VALUES (2, 'sebas.orozco.mixal@gmail.com', '1234', '2021-01-17 18:59:47.901564', '2021-01-22 23:02:25.231590', 'sebas.orozco', 'Sebas Orozco', 1);
INSERT INTO public.users (id, email, password, created_at, updated_at, username, name, fk_user_type) VALUES (1, 'admin@admin.com', '123456789', '2021-01-17 18:49:54.457988', '2021-01-23 09:44:03.883271', 'admin', 'Administation', 4);
INSERT INTO public.users (id, email, password, created_at, updated_at, username, name, fk_user_type) VALUES (3, 'model@model.com', '1234', '2021-01-23 23:09:57.253804', '2021-01-23 23:57:42.464106', 'model.user', 'model user example', 2);