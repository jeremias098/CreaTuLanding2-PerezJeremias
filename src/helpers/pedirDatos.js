import data from '../data/data.json'

const pedirDatos = () => {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data);
    },400)
  })
}

export default pedirDatos


export const pedirItenPorId = (id) => {
  return new Promise ((resolve, reject) => {

    const item = data.find((el)=> el.id === id)

    if (item) {
      resolve(item)
    } else {
      alert("No existe este producto")
    }
    
  })
}