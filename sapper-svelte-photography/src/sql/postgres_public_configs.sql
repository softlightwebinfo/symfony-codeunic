create table configs
(
    key         varchar(40) not null
        constraint configs_pkey
            primary key,
    title       varchar     not null,
    description text        not null,
    image       varchar
);

alter table configs
    owner to postgres;

INSERT INTO public.configs (key, title, description, image) VALUES ('photographers', 'Photographers', 'Realizamos fotografías de joyas, zapatos, bolso,… ya sea sobre un fondo blanco, un bodegón o en las manos o pies de una modelo. Son fotografías donde hay que prestar mucha atención sobre la iluminación, el fondo, el encuadre, el enfoque, etc. En este tipo de fotografía siempre hay que enfatizar al producto del resto de elementos que saldrán en la imagen.', 'DSC_5253-Editar.jpg');
INSERT INTO public.configs (key, title, description, image) VALUES ('albums', 'Albums', 'Realizamos fotografías de joyas, zapatos, bolso,… ya sea sobre un fondo blanco, un bodegón o en las manos o pies de una modelo. Son fotografías donde hay que prestar mucha atención sobre la iluminación, el fondo, el encuadre, el enfoque, etc. En este tipo de fotografía siempre hay que enfatizar al producto del resto de elementos que saldrán en la imagen.', 'DSC_6890-Editar.jpg');
INSERT INTO public.configs (key, title, description, image) VALUES ('about', 'Welcome to photographers around the world', 'Todos sabemos que la finalidad de la fotografía de moda es vender; ya sea un producto, un estilo de vida, o una historia. 
Por eso siempre nos enfocamos en conseguir imágenes elegantes que venden sin rodeos.
Ofrecemos un servicio integral, en conjunto o por separado, adaptándonos a las necesidades de los clientes. Cuidamos todos los detalles para una excelente producción fotográfica para campañas que se anunciarán  en vallas publicitarias, marquesinas, catálogos, look books, revistas y en tiendas online o páginas web.

La fotografía de moda es uno de los géneros de la fotografía que más nos apasiona e ilusiona como fotógrafos. En fotógrafos Top, contamos con todo el equipo humano y técnico que participan en una producción de moda.', 'DSC_2192-Editar.JPG');
INSERT INTO public.configs (key, title, description, image) VALUES ('models', 'Models', 'Para nosotros realizar un book de fotos es muy inspirador, motivador, personal, y especial.  Nos encanta conocer a cada persona a través de la cámara en cada mirada y movimiento; en cada actitud y pose; en cada sensación y emoción. Mientras pintamos ese instante de luz y color con nuestro cuerpo, mente, corazón y espíritu.', 'DSC_5158-Editar.jpg');
INSERT INTO public.configs (key, title, description, image) VALUES ('contact', 'Contact', 'La fotografía de moda es uno de los géneros de la fotografía que más nos apasiona e ilusiona como fotógrafos. En fotógrafos Top, contamos con todo el equipo humano y técnico que participan en una producción de moda.', 'DSC_9180-Editar.JPG');
INSERT INTO public.configs (key, title, description, image) VALUES ('home_slider', 'Creative Photography Studio', 'Somos expertos en fotografía de producto de alta calidad. Realizamos fotografía para catálogos, ecommerce o tiendas online. Para garantizar una calidad insuperable de las fotografías, que ayudan a vender tus productos fácilmente.', null);
INSERT INTO public.configs (key, title, description, image) VALUES ('galleries', 'Galleries', 'Realizamos fotografías de joyas, zapatos, bolso,… ya sea sobre un fondo blanco, un bodegón o en las manos o pies de una modelo. Son fotografías donde hay que prestar mucha atención sobre la iluminación, el fondo, el encuadre, el enfoque, etc. En este tipo de fotografía siempre hay que enfatizar al producto del resto de elementos que saldrán en la imagen.', 'DSC_5188-Editar.jpg');