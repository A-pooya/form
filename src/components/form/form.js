
import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {

    const [data ,setData] = useState({
        name:"",
        phoneNumber:"",
        mobileNumber:"",
        age:"",
        quantity:"",
        term:""
    })

    const changeHandler = (e) => {
        setData({...data ,[e.target.name]:e.target.value})
    }

    return ( 
        
    <form className={styles.form}>
        <div className={styles.contentContainer}>
           <p>
            همکاری مشترک گروه مالی کیان و اپلیکیشن تریدرز پلاس جهت کمک و مشاوره سزمایه گذاری با کسب بالاترین سود برای کاربران
           </p>
           <p>
            در صورت تمایل به برگزاری جلسه حضوری در محل گروه مالی کیان و یا به صورت تلفنی خواهشمند است فرم مربوطه را تکمیل نمایید
           </p>
        </div>
        <div className={styles.secondContainer}>
            
        <div className={styles.inputsContainer}>
            <p>نام و نام خانوادگی</p>
            <input type="text" name="name" value={data.name} onChange={changeHandler}  />
            <p>تلفن همراه</p>
            <input type="number" name="mobileNumber" value={data.mobileNumber} onChange={changeHandler} />
            <p>تلفن ثابت</p>
            <input type={"number"} name="phoneNumber" value={data.phoneNumber} onChange={changeHandler} />
        </div>
        <h3> : سن</h3>
        <div className={styles.firstRadioContainer} >
            <div>
                <input type={"radio"} id="less" name="age" value="less than 30" />
                <label>کمتر از ۳۰ سال</label>               
            </div>
            <div>
                <input type={"radio"} name="age" value="between 30 and 40" />
                <label>بین ۳۰ تا۴۰ سال</label>
            </div>
            <div>
                <input type={"radio"} name="age" value="between 30 and 40" />
                <label> بیش از ۴۰ سال </label>              
            </div>
        </div>

        <h3> : مبلغ سرمایه گزاری</h3>
        <div className={styles.secondRadioContainer}>
            <div>
                <input type={"radio"} name="amount" value="less than 100 million toman" />
                <label>کمتر از ۱۰۰ میلیون تومان </label>
            </div>
            <div>
                <input type={"radio"} name="amount" value="between 100 and 500 million toman" />
                <label>بین ۱۰۰ تا۵۰۰ میلیون تومان</label>
            </div>
            <div>
                <input type={"radio"} name="amount" value="more than 500 million toman" />
                <label> بیش از ۵۰۰ میلیون تومان </label> 
            </div>
        </div> 

        <h3> : مدت سرمایه گزاری </h3>
            <div className={styles.thirdRadioContainer}>
                <div>
                    <input type={"radio"} name="term" value="short term" />
                    <label> کوتاه مدت (تا ۶ ماه)</label>
                </div>
                <div>
                    <input type={"radio"} name="term" value="mid term" />
                    <label>میان مدت (۶ ماه تا یک سال) </label>
                </div>
                <div>
                    <input type={"radio"} name="term" value="long term" />
                    <label>  بلند مدت (یکسال تا ۳ سال)</label> 
                </div>
            </div>
        </div>
    </form>
        
     );
}
 
export default Form;