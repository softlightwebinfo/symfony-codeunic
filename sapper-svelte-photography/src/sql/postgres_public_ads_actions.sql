create table ads_actions
(
    fk_ads     bigint    not null,
    fk_action  varchar   not null
        constraint ads_actions_fk_action_fkey
            references actions
            on update cascade on delete restrict,
    id         bigserial not null
        constraint ads_actions_pkey
            primary key,
    created_at timestamp with time zone default now(),
    fk_user_id bigint
        constraint ads_actions_fk_user_id_fkey
            references users
            on update cascade on delete restrict
);

alter table ads_actions
    owner to postgres;

