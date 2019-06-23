function myDate(value) {
    const d = new Date(value.tweet.created_time);
    return d.toLocaleString('pl-PL');
}

export default myDate;
