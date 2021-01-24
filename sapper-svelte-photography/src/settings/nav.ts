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
    {label: "Information", route: "showcase/{slug}/information"},
    {label: "Albums", route: "showcase/{slug}/albums"},
    {label: "Gallery", route: "showcase/{slug}/gallery"},
    {label: "Models", route: "showcase/{slug}/models"},
    {label: "Prices", route: "showcase/{slug}/prices"},
    {label: "Schedule", route: "showcase/{slug}/schedule"},
    {label: "Contact", route: "showcase/{slug}/contact"},
];
