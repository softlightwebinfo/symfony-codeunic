create table pages_sections
(
    fk_page integer not null
        constraint pages_sections_fk_page_fkey
            references pages
            on update cascade on delete restrict,
    section varchar not null,
    constraint pages_sections_pkey
        primary key (fk_page, section)
);

alter table pages_sections
    owner to postgres;

INSERT INTO public.pages_sections (fk_page, section) VALUES (1, 'bottom_horizontal');
INSERT INTO public.pages_sections (fk_page, section) VALUES (2, 'left');
INSERT INTO public.pages_sections (fk_page, section) VALUES (3, 'left');