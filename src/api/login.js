import service from './request'

export const login =  (data)=>{
  return service({
    url:'/login',
    method:'POST',
    data
  })
   
}

