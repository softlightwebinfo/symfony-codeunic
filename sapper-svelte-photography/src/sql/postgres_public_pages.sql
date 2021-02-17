create table pages
(
    id    serial  not null
        constraint pages_pkey
            primary key,
    page  varchar not null,
    token varchar
);

alter table pages
    owner to postgres;

INSERT INTO public.pages (id, page, token) VALUES (1, 'Home', 'home');
INSERT INTO public.pages (id, page, token) VALUES (2, 'Galleries', 'galleries');
INSERT INTO public.pages (id, page, token) VALUES (3, 'Photographers', 'photographers');