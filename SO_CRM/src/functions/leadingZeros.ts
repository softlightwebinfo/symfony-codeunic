export const leadingZeros = (dt: number) => (dt < 10 ? '0' : '') + dt;
export const leadingZerosMinutes = (dt: Date) => leadingZeros(dt.getMinutes());
export const leadingZerosHours = (dt: Date) => leadingZeros(dt.getHours());
export const leadingZerosSeconds = (dt: Date) => leadingZeros(dt.getSeconds());
