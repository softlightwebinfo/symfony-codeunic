export const leadingZeros = (dt: number) => (dt < 10 ? '0' : '') + dt;
export const leadingZerosMinutes = (dt: Date) => leadingZeros(dt.getMinutes());
export const leadingZerosHours = (dt: Date) => leadingZeros(dt.getHours());
export const leadingZerosSeconds = (dt: Date) => leadingZeros(dt.getSeconds());

export const leadingZerosDays = (dt: Date) => leadingZeros(dt.getDate());
export const leadingZerosMonths = (dt: Date) => leadingZeros(dt.getMonth() + 1);
export const leadingZerosYears = (dt: Date) => leadingZeros(dt.getFullYear());

export const formatDate = (stringDate: string) => {
    const date = new Date(stringDate);
    const year = leadingZerosYears(date);
    const month = leadingZerosMonths(date);
    const day = leadingZerosDays(date);
    const hours = leadingZerosHours(date);
    const minutes = leadingZerosMinutes(date);

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
