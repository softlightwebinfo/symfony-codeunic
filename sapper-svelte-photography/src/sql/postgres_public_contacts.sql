create table contacts
(
    id         bigserial                              not null
        constraint contacts_pkey
            primary key,
    name       varchar(100)                           not null,
    email      varchar(180)                           not null,
    phone      varchar(20)                            not null,
    created_at timestamp with time zone default now() not null,
    message    text                                   not null
);

alter table contacts
    owner to postgres;

INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (1, '', '', '', '2021-01-19 19:51:13.791640', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (2, '', '', '', '2021-01-19 19:51:15.877257', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (3, 'ashadsdasd', 'holasas', 'jsdhjsahdas', '2021-01-19 20:04:27.493920', 'sdjsahjdasdasd');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (4, 'Tiago Vilas Boas', 'tcarvalhovb@gmail.com', '11 972393003', '2021-01-19 20:14:22.342370', 'asdasdasd asd asdasd');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (5, 'test', '', '', '2021-01-19 20:17:42.727486', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (6, 'testasdas djkan fuidhfjka hjkshfjksdhjkn sdjk hfjksnfjksdnjkfn skldfnjk sdnfk', '', '', '2021-01-19 20:17:57.999716', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (7, 'asdsa', 'dsadsadas', '', '2021-01-19 20:19:34.945212', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (8, 'asdsaasdasd', 'dsadsadas', '', '2021-01-19 20:20:39.066146', 'asdasdasdsadasd');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (9, 'dfsd', 'fsdf', '', '2021-01-19 20:59:21.782425', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (10, 'sad', 'asdasdas', '', '2021-01-19 21:00:45.167655', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (11, 'dasdasd', '', '', '2021-01-19 21:01:23.836090', 'sadasdas');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (12, '', '', '', '2021-01-20 09:26:15.315898', '');
INSERT INTO public.contacts (id, name, email, phone, created_at, message) VALUES (13, '', '', '', '2021-01-20 09:26:20.910741', '');