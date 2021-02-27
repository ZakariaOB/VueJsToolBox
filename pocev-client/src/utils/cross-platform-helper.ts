export class CrossPlatformHelper {
    static get isIE11(): boolean {
        return (<any>window).MSInputMethodContext && !!(<any>document).documentMode;
    }
}
