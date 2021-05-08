import fetch from 'isomorphic-unfetch'

export default async function Test(...args) {
  const res = await fetch(...args,{
      method: 'GET',
      headers:{'content-type': 'application/json','Pragma': 'no-cache'},
      
      
    })
  const pl = res.json()
  
  
  return pl;
 
}


