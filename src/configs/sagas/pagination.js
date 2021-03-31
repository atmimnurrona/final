const pagination = (action) => {
    let parameter = ''

    // console.log('' + `page=${1-1}` + "&" + `&size=${5}`)
    // console.log("page=0&size=5")

    if(action.pagination.page) {
        parameter+= `page=${action.pagination.page}`
    }

    if (action.pagination.size) {
        if(parameter.length > 0) {
            parameter+="&"
        }

        parameter+= `size=${action.pagination.size}`
    }
    return parameter
}

export default pagination