const DateUtils = {
    toBrazilianFormat: function (dateParam) {
        if(dateParam === "") return null;

        let date = new Date(dateParam);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        if(hours < 10) {
            hours = '0' + hours;
        }

        if(minutes < 10) {
            minutes = '0' + minutes;
        }

        if(seconds < 10) {
            seconds = '0' + seconds;
        }

        return dt + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    },
    format: tick => tick
}
export default DateUtils;