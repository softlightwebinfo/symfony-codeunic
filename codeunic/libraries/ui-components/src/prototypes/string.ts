// @ts-ignore
import { formatMoney } from "../libs";

declare global {
    interface String {
        formatMoney(decimalCount?: number, decimal?: string, thousands?: string): string;
    }
}

declare interface String {
    formatMoney(decimalCount?: number, decimal?: string, thousands?: string): string;
}

// @ts-ignore
String.prototype.formatMoney = function (decimalCount?: number, decimal?: string, thousands?: string) {
    return formatMoney(this, decimalCount, decimal, thousands);
};