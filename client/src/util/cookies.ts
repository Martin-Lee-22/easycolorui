/**
 * Creates a cookie.
 * @param cname name of the cookie
 * @param cvalue value of the cookie
 * @param exdays the number of days before the cookie expires
 */
function createCookie(cname:string, cvalue:string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Gets a cookie
 * @param cname the key value of the cookie.
 * @returns The value of the searched cookie.
 */
function getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/**
 * checks if a cookie exists
 * @param cname the key value of the cookie.
 * @returns a boolean whether or not the cookie exists.
 */
function checkCookie(cname:string) {
    let value = getCookie(cname);
    if (value !== "") {
        return true
    }
    return false
}

export {checkCookie, createCookie}
