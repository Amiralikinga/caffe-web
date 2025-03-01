import './settelment.css';
import { FaInfoCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store';
import { FaCcAmazonPay } from 'react-icons/fa';


const Settelment = () => {
    const {cartItems, totalCostBeforeDiscount, totalCostAfterDiscount, discountApplied} = useCartStore();
    const navigate = useNavigate();

    const handleOrder = ()=>{
        navigate('/pay');
    }
    
    const goToDiscountBox = (e)=>{
        e.preventDefault();  // جلوگیری از بارگذاری مجدد صفحه
        navigate('/cart', { state: { scrollToDiscount: true } });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <div className='settelment-container'>
            <h2>صورت حساب</h2>
            <div className="discount-code">
                <FaInfoCircle style={{fontSize:'20px'}}/>
                کد تخفیف دارید ؟ <a href="#" className='link-to-discount' onClick={goToDiscountBox}>برای نوشتن کد اینجا کلیک کنید</a>
            </div>
            <div className="settelment-detail-box">
                <h4>جزئیات صورت حساب</h4>
                <div className="informations">
                    <label htmlFor="f-name" className='required'>نام :
                        <input type="text" id='f-name'/>
                    </label>
                    <label htmlFor="l-name" className='required'>نام خانوادگی :
                        <input type="text" id='l-name'/>
                    </label>
                    <label htmlFor="phone" className='required'>تلفن :
                        <input type="text" id='phone'/>
                    </label>
                    <label htmlFor="email" className='required'>ایمیل :
                        <input type="email" id='email'/>
                    </label>
                </div>
            </div>
            <div className="complementary-description-box">
                <h4>توضیحات تکمیلی</h4>
                <h6>توضیحات سفارش (اختیاری)</h6>
                <textarea
                placeholder='یادداشت ها درباره سفارش شما، برای مثال نکات مهم درباره نحوه تحویل سفارش'
                />
            </div>
            <hr />
                <div>
                    <h4 className='order'>سفارش شما</h4>
                    <div className="card">
                        <div className="card-header custome-header-order">
                            <div className="product-name">نام محصول</div>
                            <div className="product-cost">جمع جزء</div>
                        </div>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => {
                                const itemTotal = item.price * item.quantity;
                                return (
                                <div className={`card-body custome-body-order ${index % 2 === 0 ? "alternate-bg" : ""}`} key={index}>
                                    <div className="right-box">
                                        <p className='text-danger'>{item.name}</p>
                                        <p>تاریخ رزرو : {item.date} </p>
                                        <p>ساعت رزرو : {item.time}</p>
                                        <p>تعداد نفرات : {item.people}</p>
                                    </div>
                                    <div className="left-box">
                                        <p>{itemTotal.toLocaleString()} تومان</p>
                                    </div>
                                </div>
                            )})
                        ) : ''}
                        <div className="card-footer custome-footer-order">
                            <div className="cost-1">
                                <p>جمع جزء : </p>
                                {discountApplied ? <s><b>{totalCostBeforeDiscount.toLocaleString()} تومان</b></s> : <b>{totalCostBeforeDiscount.toLocaleString()} تومان</b>}
                            </div>
                            <div className="cost-2">
                                <p>جمع کل : </p>
                                <b>{totalCostAfterDiscount.toLocaleString()} تومان</b>
                                {discountApplied && <span className='fade-in-discount'>15% تخفیف</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-confirm">
                    <FaCcAmazonPay style={{fontSize:'30px'}}/>
                    <h6>کارت به کارت</h6>
                    <p className='cart-to-cart'>واریز از طریق کارت به کارت</p>
                    <hr />
                    <p><a href="#">سیاست حفظ حریم خصوصی</a> Your personal data will be used to process your order, support your experience throughout this website and for other purposes described in our.</p>
                    <button className='confirm-btn' onClick={handleOrder}>ثبت سفارش</button>
                </div>

        </div>
    );
}
 
export default Settelment;