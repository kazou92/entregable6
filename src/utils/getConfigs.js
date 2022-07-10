const getConfigs = ()=>({
    headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }

})
export default getConfigs