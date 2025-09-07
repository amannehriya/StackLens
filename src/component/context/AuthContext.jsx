import { createContext,  useState, useEffect } from"react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const[data,setData] = useState(null);
    const[isAuthenticated,SetIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(true);

    // const token = async()=>{
      
    //     await fetch('http://localhost:3000/user/profile',{
    //     credentials:'include',
    //     method:'GET'
    //    }).then(res=>{
    //     console.log(res.clone().json())
    //     return res.json()})
    //    .then(data=>{
    //     if(data.status){
    //         console.log("auth",data)
    //         setData(data.data)
    //         SetIsAuthenticated(data.status)
    //         // console.log("data in authcontext",data);
    //         setLoading(false)
    //     }else{
    //         SetIsAuthenticated(false)
    //     }
    //    }).catch((err)=>{
    //     setLoading(false);
    //     console.log('error while fetching profile data',err)
    //    })
    // }

    // useEffect(()=>{
    //    token();
    // },[])
    

    const myData = {
        name:data?.username,
        email:data?.email,
        id:data?._id
    }

    return(
        <AuthContext.Provider value={{data,setData,myData,isAuthenticated,loading,SetIsAuthenticated,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider,AuthContext}