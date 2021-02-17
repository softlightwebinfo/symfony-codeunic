create view view_testimonials_home(id, message, fk_user_id, created_at, updated_at, name) as
SELECT testimonials.id,
       testimonials.message,
       testimonials.fk_user_id,
       testimonials.created_at,
       testimonials.updated_at,
       u.name
FROM testimonials
         JOIN users u ON u.id = testimonials.fk_user_id
ORDER BY (random())
LIMIT 1;

alter table view_testimonials_home
    owner to postgres;

INSERT INTO public.view_testimonials_home (id, message, fk_user_id, created_at, updated_at, name) VALUES (2, 'I support my friends whenever they need.', 1, '2021-01-19 21:24:12.738323', '2021-01-19 21:24:12.738323', 'Administation');