import './reserve.css';
import Calendar from '../Calendar/calendar';
import { useCartStore } from '../store';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Reserve = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

    const [peopleCount, setPeopleCount] = useState(1); // مقدار پیش‌فرض 1 نفر

    const {cartItems, addToCart, showCartMessage} = useCartStore();
    const navigate = useNavigate();
    const handleShoppingCart = ()=>{
        navigate('/cart');
    }
    return ( 
        <div className='reserve-container'>
            <div className="reserve-box">
                <h1>رزرو نوبت سالن و میز کافه کاردیتو </h1>
                <div className="container-boxes">
                    <div className="img-box">
                        {/* <img src="https://m.media-amazon.com/images/I/71ypCbccGpL.jpg" alt="" /> */}
                        <img src="https://cdn-images.dzcdn.net/images/cover/d7509ae7956c990dfca236fa0493a62f/0x1900-000000-80-0-0.jpg" alt="" />
                    </div>
                    <div className="text-box">
                        <h4>رزرو سالن و میز تولد</h4>
                        <h2>قوانین مجموعه : </h2>
                        <ol>
                            <li>استفاده از برف و بمب شادی ممنوع می باشد</li>
                            <li>سفارش از منو به تعداد نفرات الزامی می باشد</li>
                            <li>سفارش برای کودکان زیر 2 سال الزامی نیست</li>
                            <li>در صورت بر هم زدن نظم و نظافت بیش از حد کافی شاپ، هزینه خدمات (150هزار تومان) دریافت می گردد</li>
                            <li>حتما سر تایم مشخص شده تشریف بیاورید تا بتوانیم بهترین خدمات را به شما عزیزان ارائه دهیم</li>
                            <li>آوردن هر نوع نوشیدنی و غذا و ... ممنوع می باشد</li>
                            <li>حداکثر زمان برای سرو سفارشتان 40 دقیقه می باشد</li>
                        </ol>
                        <div className="count">
                            <label htmlFor="count-input">تعداد اشخاص : </label>
                            <input
                            type="number"
                            id='count-input'
                            min='1'
                            value={peopleCount}
                            onChange={(e)=>setPeopleCount(parseInt(e.target.value) || 1)}
                            />
                        </div>
                    </div>
                    <Calendar peopleCount={peopleCount}/>
                </div>
                {showCartMessage && cartItems.length > 0 && (
                    
                <div className='cart-message'>
                    <FaCheckCircle style={{position:'absolute'}}/>
                    <p>رزرو سالن و میز تولد <span>با موفقیت</span> به سبد خرید شما اضافه شد.</p>
                    <button className='cart-button' onClick={handleShoppingCart}>مشاهده سبد خرید</button>
                </div>
                )}
            </div>
        </div>
    );
}
 
export default Reserve;