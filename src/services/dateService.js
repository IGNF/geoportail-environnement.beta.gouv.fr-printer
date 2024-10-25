// src/services/dateService.js

function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return `${day}/${month}/${year}`;
}

module.exports = { formatDate };