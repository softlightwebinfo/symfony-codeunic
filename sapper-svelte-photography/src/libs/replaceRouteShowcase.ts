export const replaceRouteShowcase = (route: string, username: string) => {
    return route.replace("{slug}", username);
};
