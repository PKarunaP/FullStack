module.exports = {
    response(code, status, message,data) {
        return {
            code: code,
            status: status,
            message: message,
            data: data
        }
    }
}