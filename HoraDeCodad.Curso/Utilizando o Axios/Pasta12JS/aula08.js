//Interceptors

//requisiçao
axios.interceptors.request.use(
    function(config){
    console.log("Antes da requisiçao")
    return config
    },
    function(error){
        return Promise.reject(error)
    }
)
//resposta
axios.interceptors.resonse.use(
    function(config){
    console.log("Antes da reposta")
    return config
    },
    function(error){
        return Promise.reject(error)
    }
)