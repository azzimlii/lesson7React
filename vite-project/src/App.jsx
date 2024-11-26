import { useState } from "react";
import "./index.css/"

const Register = () => {
  const [data, setData] = useState({
    name: '',
    no: '',
    gender: '',
    age: '',
    email: '',
    number: '',
    txt: '',
    check: false,
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value,}));
  };

  const handler = (e) => {
    e.preventDefault();
    alert('Kartoçka qeydiyyatdan keçib')
    console.log('girise icaze verilir')
    console.log(data.name);
    console.log(data.no);
    console.log(data.gender);
    console.log(data.age);
    console.log(data.email);
    console.log(data.number);
    console.log(data.txt);
    if (!data.check) {
      console.log('off');
    } else {
      console.log('on');
    }
  }
  return (
    <>
      <div className='wrapper'>
        <form className='user-form' onSubmit={handler}>
          <label>
            Pasiyentin SAA:
            <input value={data.name} type='text' name='name' required onChange={handleChange}></input>
          </label>
          <label>
            Pasportun seriyası və nömrəsi:
            <input value={data.no} type='text' name='no' required onChange={handleChange}></input>
          </label>
          <label>
            Cins:
            <select value={data.gender} name='gender' onChange={handleChange}>
              <option value='male'>Kişi</option>
              <option value='female'>Qadın</option>
            </select>
          </label>
          <label>
            Yaş:
            <input value={data.age} type='number' name='age' onChange={handleChange}></input>
          </label>
          <label>
            Email:
            <input value={data.email} type='text' name='email' onChange={handleChange}></input>
          </label>
          <label>
            Telefon nömrəsi:
            <input value={data.number} type='tel' name='number' onChange={handleChange}></input>
          </label>
          <label>
            Simptomların təsviri:
            <textarea value={data.txt} type='text' rows='12' name='txt' onChange={handleChange}></textarea>
          </label>
          <label className='label'>
            Təkrar qəbul
            <input value={data.check} className='checkbox' type='checkbox' name='check' onChange={handleChange} ></input>
          </label>
          <label>
            <button type='submit' >Göndərmək</button>
          </label>
        </form>
      </div>
    </>
  )
}
export default Register