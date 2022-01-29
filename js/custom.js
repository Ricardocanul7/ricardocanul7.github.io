function calculateAge() {
    var element = document.getElementById('calculated-age');

    var birth = new Date(1993, 7, 20);
    var month_diff = Date.now() - birth.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    element.innerHTML = age;
}

calculateAge();
