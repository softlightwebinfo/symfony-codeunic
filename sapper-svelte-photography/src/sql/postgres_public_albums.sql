create table albums
(
    id          bigserial                              not null
        constraint albums_pkey
            primary key,
    fk_user_id  bigint                                 not null
        constraint albums_fk_user_id_fkey
            references users
            on update cascade on delete restrict,
    title       varchar(100)                           not null,
    description text                                   not null,
    created_at  timestamp with time zone default now() not null,
    updated_at  timestamp with time zone default now() not null
);

alter table albums
    owner to postgres;

INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (2, 1, 'Fashion News', 'Morbi facilisis justo sit amet urna feugiat aliquam. Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id pellentesque non, tristique ac leo. Quisque a convallis tortor, eu facilisis erat. Proin tincidunt aliquet mauris, in vestibulum arcu bibendum ullamcorper.', '2021-01-19 19:08:01.741654', '2021-01-19 19:08:01.741654');
INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (3, 1, 'News', 'Morbi facilisis justo sit amet urna feugiat aliquam. Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id pellentesque non, tristique ac leo. Quisque a convallis tortor, eu facilisis erat. Proin tincidunt aliquet mauris, in vestibulum arcu bibendum ullamcorper.', '2021-01-19 19:08:05.302197', '2021-01-19 19:08:05.302197');
INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (1, 1, 'news portraits', 'Morbi facilisis justo sit amet urna feugiat aliquam. Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id pellentesque non, tristique ac leo. Quisque a convallis tortor, eu facilisis erat. Proin tincidunt aliquet mauris, in vestibulum arcu bibendum ullamcorper.', '2021-01-19 19:07:33.923172', '2021-01-19 19:08:34.567860');
INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (4, 2, 'New Album', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2021-01-23 13:35:09.920484', '2021-01-23 13:35:09.920484');
INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (5, 2, 'Boda', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. ', '2021-01-23 13:35:29.289260', '2021-01-23 13:35:29.289260');
INSERT INTO public.albums (id, fk_user_id, title, description, created_at, updated_at) VALUES (6, 2, 'Erotic', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', '2021-01-23 13:35:29.289260', '2021-01-23 13:35:29.289260');