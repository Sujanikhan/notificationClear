import React, {useState} from 'react'
import './List.css'
const List = () => {
    const Data = [
        {id: 1, name:"Nafisa Dewan" , age: 32, image: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727827200&semt=ais_hybrid" },
        {id: 2, name: "Isha Sharma" , age: 23, image: "https://c8.alamy.com/comp/CYMFBW/indian-woman-in-traditional-clothing-CYMFBW.jpg"},
        {id: 3, name: "Safeena Ali", age: 34, image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg"},
        {id: 4, name: "Nikita Roy", age: 38, image: "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA="},
        {id: 5, name: "Karan Singh", age: 22, image: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"}
        
    ];
    const [celebrations, setCelebrations] = useState(Data);
 console.log(celebrations);
 function handleClear(){
    setCelebrations([]);
 }
  return (
    <div className="card">
        <h2>{celebrations.length}   Birthdays today</h2>
        <div className="item">
     {celebrations.map((item,index)=>{
        return(
            <div key={index} className="data">
            <img src={item.image} alt= {item.name} />
            <div>
                <h4>{item.name}</h4>
                <p>{item.age}years</p>
            </div>
                </div>
                
        )
     })

     }
      </div>
      <button onClick={handleClear}>clear</button>
     </div>

  )
}

export default List