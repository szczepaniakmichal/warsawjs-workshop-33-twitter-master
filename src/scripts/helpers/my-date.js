// function myDate(value) {
//     const d = new Date(value.tweet.created_time);
//     return d.toLocaleString('pl-PL');
// }

// export default myDate;


export function myDate(value) {
    const d = new Date(value);
    // @ts-ignore
    if (isNaN(d)) {
        return null;
    }
    return d.toLocaleString('pl-PL');
}
