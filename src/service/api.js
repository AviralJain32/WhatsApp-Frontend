import axios from 'axios';


// const url='https://wattsapp-backend.onrender.com';
const url='http://localhost:8000';
// const url=import.meta.env.BACKEND_URL;

export const addUser=async (data)=>{
    try{
        await axios.post(`${url}/add`,data);
    }
    catch(e){
        console.log(e.message);
    }
}
export const getUsers=async()=>{
    try{
        let response=await axios.get(`${url}/users`);
        return response.data;
    }
    catch(e){
        console.log(e.message);
    }
}
export const SetConversation=async(data)=>{
    try{
        const setconvo=await axios.post(`${url}/conversation/add`,data);
    }
    catch(e){
        console.log(e.message);
    }
}
export const GetConversation=async(data)=>{
    try{
        let response=await axios.post(`${url}/conversation/get`,data);
        return response.data;
    }
    catch(e){
        console.log(e.message);
    }
}
export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data)
    }
    catch(e){
        console.log(e.message);
    }
}
export const getMessages=async(id)=>{
    try{
        let responses =await axios.get(`${url}/message/get/${id}`);
        return responses.data;
    }
    catch(e){
        console.log("error while calling get message api" , e.message);
    }
}

export const uploadFile=async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }
    catch(err){
        console.log("Error while calling upload file api",err.message);
    }
}

// import axios from 'axios';


// // const url='https://wattsapp-backend.onrender.com';
// // const url=import.meta.env.BACKEND_URL;

// export const addUser=async (data)=>{
//     try{
//         await axios.post(`/api/add`,data);
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// export const getUsers=async()=>{
//     try{
//         let response=await axios.get(`/api/users`);
//         return response.data;
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// export const SetConversation=async(data)=>{
//     try{
//         const setconvo=await axios.post(`/api/conversation/add`,data);
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// export const GetConversation=async(data)=>{
//     try{
//         let response=await axios.post(`/api/conversation/get`,data);
//         return response.data;
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// export const newMessage=async(data)=>{
//     try{
//         await axios.post(`/api/message/add`,data)
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// export const getMessages=async(id)=>{
//     try{
//         let responses =await axios.get(`/api/message/get/${id}`);
//         return responses.data;
//     }
//     catch(e){
//         console.log("error while calling get message api" , e.message);
//     }
// }

// export const uploadFile=async(data)=>{
//     try{
//         return await axios.post(`/api/file/upload`,data);
//     }
//     catch(err){
//         console.log("Error while calling upload file api",err.message);
//     }
// }

