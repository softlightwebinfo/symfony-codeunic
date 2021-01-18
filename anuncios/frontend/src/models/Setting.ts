export class Setting {
    private imageDir = "/static/images";
    private _articleDir = "/static/uploads";
    private _noPhoto = "no-photo.jpg";

    constructor(
        private _appName: string,
        private _appLogo: string,
        private _apiProto: string,
        private _apiLocal: string,
    ) {
        return this;
    }

    getApiProto = (): string => this._apiProto;
    getLogo = () => `${this.imageDir}/${this._appLogo}`;
    getAppName = () => this._appName;
    getLocalApi = (url: string) => `${this._apiLocal}/${url}`;
    getNoPhoto = () => `${this.imageDir}/${this._noPhoto}`;

    getImageArticle = (image: string, isFake?: boolean) => {
        if (isFake || !image) {
            return this.getNoPhoto();
        }
        return `${this._articleDir}/${image}`;
    }

    setImageArticle(url: string): this {
        this._articleDir = url;
        return this;
    }
}