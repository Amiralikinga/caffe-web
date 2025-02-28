import './settelment.css';
import { FaInfoCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store';


const Settelment = () => {
    const {cartItems, totalCostBeforeDiscount, totalCostAfterDiscount} = useCartStore();
    const navigate = useNavigate();

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
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <>
                    <h4 className='order'>سفارش شما</h4>
                    <div className="card">
                        <div className="card-header custome-header-order">
                            <div className="product-name">نام محصول</div>
                            <div className="product-cost">جمع جزء</div>
                        </div>
                
                    <div className="card-body custome-body-order" key={index}>
                        <div className="right-box">
                            <p className='text-danger'>{item.name}</p>
                            <p>تاریخ رزرو : {item.date} </p>
                            <p>ساعت رزرو : {item.time}</p>
                            <p>تعداد نفرات : {item.people}</p>
                        </div>
                        <div className="left-box">
                            <p>{item.price.toLocaleString()} تومان</p>
                        </div>
                    </div>
                    <div className="card-footer custome-footer-order">
                        <div className="cost-1">جمع جزء :</div>{totalCostBeforeDiscount.toLocaleString()} تومان
                        <div className="cost-2">جمع کل :</div>{totalCostAfterDiscount.toLocaleString()} تومان
                    </div>
                    </div>
                </>
                ))
            ) : ''}
        </div>
    );
}
 
export default Settelment;