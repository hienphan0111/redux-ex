import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./userSlide";

const User = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const item = {
    fName: 'Test',
    lName: 'Test'
  }

  const changeHandler = (e) => {
    if(e.target.id === 'fname') {
      item.fName = e.target.value 
    } else {
      item.lName = e.target.value
    }
    console.log(name);
  }
  
  return (
    <div>
      <label htmlFor="">First Name</label>
      <input onChange={changeHandler} id='fname' type="text" className="f-name" />
      <label htmlFor="">Last Name</label>
      <input onChange={changeHandler} id='lname' type="text" className="l-name" />
      <button onClick={()=>dispatch(addUser(item))}>Add</button>
      {
        name.map((i)=> <h3>{i.fName}</h3>)
      }
    </div>
  )
}

export default User;