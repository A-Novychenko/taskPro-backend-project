const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const passwordRegexp = /^[A-Za-z0-9!@#$%^&*()_]+$/;

const userRegexp = {emailRegexp, nameRegexp, passwordRegexp};
module.exports = userRegexp;
