create table users_showcase
(
    fk_user_id  bigint                                 not null
        constraint users_showcase_pkey
            primary key
        constraint users_showcase_fk_user_id_fkey
            references users
            on update cascade on delete restrict,
    title       varchar                                not null,
    description text                                   not null,
    updated_at  timestamp with time zone default now() not null,
    created_at  timestamp with time zone default now(),
    image       varchar(255),
    fk_banner   bigint
        constraint users_showcase_banner_fkey
            references images
            on update cascade on delete restrict
);

alter table users_showcase
    owner to postgres;

INSERT INTO public.users_showcase (fk_user_id, title, description, updated_at, created_at, image, fk_banner) VALUES (1, 'We''re Gleam a small and enthusiastic photography studio based in New York', 'We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.', '2021-01-23 09:41:13.654730', '2021-01-20 18:40:27.908814', 'DSC_3179-Editar.JPG', null);
INSERT INTO public.users_showcase (fk_user_id, title, description, updated_at, created_at, image, fk_banner) VALUES (3, 'Hola soy modelo numero 3', 'La fotografía de moda es uno de los géneros de la fotografía que más nos apasiona e ilusiona como fotógrafos. En fotógrafos Top, contamos con todo el equipo humano y técnico que participan en una producción de moda.', '2021-01-23 23:59:24.671560', '2021-01-23 23:59:24.671560', 'DSC_2068.jpg', null);
INSERT INTO public.users_showcase (fk_user_id, title, description, updated_at, created_at, image, fk_banner) VALUES (2, 'Hola, soy Sebas Orozco', 'Siempre escuchamos y entendemos a nuestros clientes, para transmitir la esencia de la marca hacia el público objetivo, con nuestros conocimientos y experiencia en la fotografía. Un buen catálogo tiene que conectar con las emociones de las personas. Además en nuestro equipo contamos con diseñadores gráficos para realizar el diseño editorial del catálogo de moda, con esto buscamos ahorrar tiempo y dinero a nuestros clientes.', '2021-01-24 10:04:13.688766', '2021-01-20 18:42:22.227701', 'DSC_3390.jpg', 4);