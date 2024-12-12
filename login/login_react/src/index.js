import React from 'react';
import ReactDOM from 'react-dom'

import {useFormik} from 'formik';

const Logincomp=()=>{
    const formik=useFormik({
        initialValues:{
            Userid :'',
            Pass: '',
        },
        onSubmit : values=> {
            alert(JSON.stringify(values));
        },
        
    });

    return(
        <div>
            <h2>Login Form</h2>
            <form onSubmit = {formik.handleSubmit}>
                <p>
                <label htmlFor= "Userid">User Id</label>
                <input type = "text" name = "Userid" id= "Userid" value ={formik.values.Userid} onChange={formik.handleChange}/>
                </p>
                <p>
                <label htmlFor= "Pass">Password</label>
                <input type = "text" name = "Pass" value ={formik.values.Pass} onChange={formik.handleChange}/>
                </p>
                <button type ="submit">Submit</button>
            </form>

        </div>
        )

}
const element = <Logincomp></Logincomp>

ReactDOM.render(element,document.getElementById("root"));


