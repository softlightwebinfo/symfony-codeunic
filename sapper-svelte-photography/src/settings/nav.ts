import type { IRoute } from "../interfaces/IRoute";

export const navOptions: IRoute[] = [
    {route: "", label: "Home"},
    {route: "about", label: "About"},
    {route: "albums", label: "Albums"},
    {route: "galleries", label: "Galleries"},
    {route: "photographers", label: "Photographers"},
    {route: "models", label: "Models"},
    {route: "contact", label: "Contact"},
];
export const routesShowCase: IRoute[] = [
    {label: "Information", route: "showcase/{slug}/information", key: "information"},
    {label: "Albums", route: "showcase/{slug}/albums", key: "albums"},
    {label: "Gallery", route: "showcase/{slug}/gallery", key: "gallery"},
    {label: "Models", route: "showcase/{slug}/models", key: "models"},
    {label: "Prices", route: "showcase/{slug}/prices", key: "prices"},
    {label: "Schedule", route: "showcase/{slug}/schedule", key: "schedule"},
    {label: "Contact", route: "showcase/{slug}/contact", key: "contact"},
];
