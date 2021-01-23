import settings from "../settings";

export const getImageUpload = (image: string, thumb: boolean = true) => {
    if (thumb) {
        return `${settings.imagesThumbUpload}/${image}`;
    }
    return `${settings.imagesUpload}/${image}`;
}
