import React, {useState} from "react";
import './style.css'
export default function CredoFeesMangt(){
    const[student, setStudent]=useState({
        name:"",
        Course:"",
        Total:"",
        paidFees:"",
        PendingFees:"",
    });
    const[students,setStudents]=useState([]);
    const[edit,setedit]=useState(false)
    const[sitem,setSitem]=useState(null)

        const Hanchnge = (event) => {
            const {name,value}= event.target;
            setStudent({...student,[name]:value})
        }

        const Additem =()=>{
            setStudents([...students,student]);
            setStudent({name:"",Course:"",Total:"",paidFees:"",PendingFees:""})
        }

        const updateitem =()=>{
            const updatedstudents= students.map((s,index)=>
            index === sitem ? student : s);
            setStudents(updatedstudents);
            setStudent({name:"",Course:"",Total:"",paidFees:"",PendingFees:""})
            setedit(false);
            setSitem(null);
        }
        const edititem=(index)=>{
            setStudent(students[index]);
            setedit(true);
            setSitem(index);
        }
        const delitem=(index)=>{
            const erase=students.filter((_, i) => i !== index);
            setStudents(erase);
        }

    const hansubmit=(event)=>{
        event.preventDefault();
        alert(students)
    }
    return(
        <div className="Feesman">
            <h1>Course Fees Management System</h1>
            <form action="" onSubmit={hansubmit}>
                <div className="div">
                <div>
                    <label htmlFor="name">Student Name</label>
                    <input type="text" id="name" placeholder="enter name" name="name" value={student.name} required onChange={Hanchnge} />
                </div>
                <div>
                    <label htmlFor="Course">Course Name</label>
                    <select name="Course" id="" value={student.Course} required onChange={Hanchnge}>
                        <option value="">Please Select</option>
                        <option value="Full Stack Developer-Java">Full Stack Developer-Java</option>
                        <option value="Full Stack Developer-Angular">Full Stack Developer-Angular</option>
                        <option value="Java Program">Java Program</option>
                        <option value="PHP Program">PHP Program</option>
                        <option value="Only - Angular">Only - Angular</option>
                        <option value="Only - React-JS">Only - React-JS</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Selenium">Selenium</option>
                        <option value="Networking">Networking</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Total">Total Fees</label>
                    <input type="number" id="Total" placeholder="enter amount" name="Total"  value={student.Total} required onChange={Hanchnge} />
                </div>
                <div>
                    <label htmlFor="paidFees">Paid Fees</label>
                    <input type="number" id="paidFees" placeholder="enter amount"  name="paidFees"  value={student.paidFees} required onChange={Hanchnge} />
                </div>
                <div>
                    <label htmlFor="PendingFees">Pending Fees</label>
                    <input type="number" id="PendingFees" placeholder="enter amount"  name="PendingFees"  value={student.PendingFees} required onChange={Hanchnge} />
                </div>
                </div>
                <div className="div1">
                    {edit ? (
                        <button onClick={updateitem}>Update</button>
                    ):(
                        <button onClick={Additem}>Add</button>
                    )}
                </div>
            </form>

            <section className="feesdet">

            <h2>Form Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course Name</th>
                        <th>Total Fees</th>
                        <th>Paid Fees</th>
                        <th>Pending Fees</th>
                        <th>Field Update</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student,index)=>(
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.Course}</td>
                            <td>{student.Total}</td>
                            <td>{student.paidFees}</td>
                            <td>{student.PendingFees}</td>
                            <td><button onClick={()=>edititem(index)}>Edit</button>
                            <button onClick={()=>delitem(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </section>

        </div>
    )
}