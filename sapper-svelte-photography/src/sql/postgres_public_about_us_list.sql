create table about_us_list
(
    id          serial                                 not null
        constraint about_us_list_pkey
            primary key,
    title       varchar(50)                            not null,
    description text                                   not null,
    icon        varchar(20)                            not null,
    created_at  timestamp with time zone default now() not null,
    updated_at  timestamp with time zone default now() not null
);

alter table about_us_list
    owner to postgres;

INSERT INTO public.about_us_list (id, title, description, icon, created_at, updated_at) VALUES (1, 'Visual Storytellers', 'Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.', 'cog', '2021-01-20 09:29:29.490700', '2021-01-20 09:29:29.490700');
INSERT INTO public.about_us_list (id, title, description, icon, created_at, updated_at) VALUES (2, 'It''s All About You', 'Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.', 'diamond', '2021-01-20 09:29:40.125890', '2021-01-20 09:29:40.125890');
INSERT INTO public.about_us_list (id, title, description, icon, created_at, updated_at) VALUES (3, 'Beauty & Elegance', 'Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.', 'camera', '2021-01-20 09:29:51.240318', '2021-01-20 09:29:51.240318');