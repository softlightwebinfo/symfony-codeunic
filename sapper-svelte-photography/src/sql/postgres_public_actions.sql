create table actions
(
    action varchar not null
        constraint actions_pkey
            primary key
);

alter table actions
    owner to postgres;

INSERT INTO public.actions (action) VALUES ('Click');
INSERT INTO public.actions (action) VALUES ('View');