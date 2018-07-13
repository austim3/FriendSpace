import {
    postMessageURL,
    getMessageURL} from './URLConfig';

class MessgeManager{
    async postMessage(content,url){
        try{
          const message={
            access_token: localStorage.access_token,
            content,
            url
          }
          const res=await fetch(postMessageURL,{
              method:'POST',
              headers:{
                  'Accept':'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
          });
          const result = await res.json;
          return result;
        }catch(error){
            return{
                
            }
        }
    }
    async getMessage(){
        try {
            const todo = {
                access_token: localStorage.access_token
            }
            const res = await fetch(getMessageURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });
            const result = await res.json;
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
}