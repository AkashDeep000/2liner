import fetch from 'isomorphic-unfetch'

export default async function Test(...args) {
  const res = await fetch(...args)
  const pl = res.json()
  
  
  return pl;
 
}


