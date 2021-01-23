export const formatDate = (date: string) => {
    let now = new Date(date), month, day, year;

    month = '' + (now.getMonth() + 1)
    day = '' + now.getDate()
    year = now.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
