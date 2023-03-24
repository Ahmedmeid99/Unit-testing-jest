/**
 * check input value (name)
 * @param {string} name - name is an input value
 * @returns {string} name or text_error 
 */

function checkName(name) {
    if (name === undefined) {
        return name = "this field is unvalid"
    }
    if (name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim()
    }
    if (name.length > 10) {
        name = name.substring(0, 10)
    }
    if (name.startsWith("_")) {
        name = name.substring(1)
    }
    return name
}
module.exports = checkName