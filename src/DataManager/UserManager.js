import{
    createUserURL,
    updateUserURL,
    getUserURL,
} from './URLConfig';

class UserManager{
  async createUser(nickName,sign,image){
      try {
          const fromData= new FormData();

          fromData.append('access_token',localStorage.access_token);
          fromData.append('nickName',nickName);
          fromData.append('sign',sign);
          // fromData.append('image',image.file);
          image.map((item,index)=>{
              return fromData.append(`image${index}`,item.file);
          })
          const res=await fetch(createUserURL,{
              method:'POST',
              body:fromData,
          })
          return res.json;

      } catch (error) {
          return {
              success:false,
              errorMessage:'网络错误'
          }
      }

  }
  async updateUser(userInfo){
      try {
          const access_token = localStorage.access_token;
          const fromData = new FormData();
          fromData.append('access_token',access_token);
          if (userInfo.nickName) {
              fromData.append('nickName',userInfo.nickName);
          }
          if (userInfo.sign) {
              fromData.append('sign',userInfo.sign);
          }
          if (userInfo.image) {
              fromData.append('image',userInfo.image.file);
          }
          
          const res=await fetch(updateUserURL,{
              method:'POST',
              body:fromData,
          })

          return res.json;
          
      } catch (error) {
          return {
              success:false,
              errorMessage:'网络错误'
          }
      }

  }
  async getUser(userId=0){
      try {
          const access_token = localStorage.access_token;
          const res = await fetch(getUserURL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({access_token})
        });
        const result= res.json();

        return result;


      } catch (error) {
          return {
              success:false,
              errorMessage:'网络错误'
          }
      }

  }

}

export default new UserManager();