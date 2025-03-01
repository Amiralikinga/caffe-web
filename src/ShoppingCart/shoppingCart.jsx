import './shoppingCart.css';
import { useCartStore } from '../store';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const ShoppingCart = () => {
      
    const {cartItems, removeFromCart, totalCostBeforeDiscount, totalCostAfterDiscount, applyDiscount, discountApplied, discountCode  } = useCartStore();
    
    const [localDiscountCode, setLocalDiscountCode] = useState(discountCode); // مقدار محلی برای نمایش در `input`
    const [inputClass, setInputClass] = useState('');
    const [isInputDisabled, setIsInputDisabled] = useState(discountApplied);
    const [isButtonDisabled, setIsButtonDisabled] = useState(discountApplied);

    const navigate = useNavigate();
    const discountInputRef = useRef(null); // مرجع به اینپوت کد تخفیف
    const location = useLocation();  //بررسی مسیر صفحه


    const validCodes = ["DISCOUNT50", "OFF100", "SALE2025"]; // لیست کدهای معتبر


    useEffect(() => {
        // اگر از صفحه صورت‌حساب آمده باشیم، مستقیم به باکس تخفیف اسکرول کند
        const savedCart = localStorage.getItem('cartItems');
        if (!cartItems.length && savedCart) {
            useCartStore.setState({ cartItems: JSON.parse(savedCart) });
        }

        if (location.state?.scrollToDiscount) {
            setTimeout(() => {
                if (discountInputRef.current) {
                    discountInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    discountInputRef.current.focus();
                }
            }, 500);
        }
    }, [location]);

    useEffect(() => {
        // 🆕 ذخیره کردن سبد خرید در `localStorage`
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, []);

    useEffect(() => {   //برای تست محتوای سبد خرید است کاربرد دیگری ندارد 
        console.log("Cart Loaded:", cartItems);  
    }, [cartItems]);

    const addToShoppingCart = ()=>{
        navigate('/reserve');
    }

    const handleApplyDiscount = ()=>{
        if(validCodes.includes(localDiscountCode.trim().toUpperCase())){
            setInputClass('valid-code');
            setIsInputDisabled(true);
            setIsButtonDisabled(true);
            applyDiscount(localDiscountCode); // ذخیره مقدار کد تخفیف در استور
        }else{
            setInputClass('invalid-code');
        }
    };

    const settelment = ()=>{
        navigate('/settelment');
    }


    return ( 
        <div className="shopping-cart-container">
            <h2>سبد خــرید</h2>
            <div className="card">
                <div className="card-header">
                    <p className='badge bg-primary p-3 text-light'>محصول</p>
                    <p className='badge bg-primary p-3 text-light'>قیمت</p>
                    <p className='badge bg-primary p-3 text-light'>تعداد</p>
                    <p className='badge bg-primary p-3 text-light'>جمع جزء</p>
                    <p className='badge bg-danger p-3 text-light'>حذف</p>
                </div>
                <div className="card-body">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => {
                            const itemTotal = item.price * item.quantity; // محاسبه قیمت جزء هر آیتم
                            return (
                            <div className="product" key={index}>
                                <div className="product-info">
                                    <b className='text-danger mb-3'>{item.name}</b>
                                    <p>تاریخ رزرو : {item.date}</p>
                                    <p>ساعت رزرو : {item.time}</p>
                                    <p>تعداد نفرات : {item.people}</p>
                                </div>
                                <div className='column'><p>{item.price.toLocaleString()} تومان </p></div>
                                <div className='column'><p>{item.quantity} میز</p></div>
                                <div className='column'><p>{itemTotal.toLocaleString()} تومان</p></div>
                                <div className='column'>
                                    <button className="delete-btn" onClick={() => removeFromCart(item.date, item.time)}>❌</button>
                                </div>
                            </div>
                            );
                        })
                    ) : (
                        <p className='text-center pt-2'>سبد خرید شما خالی است !</p>
                    )}
                </div>
                <div className="card-footer">
                    <button onClick={addToShoppingCart}>افزودن به رزرو میز</button>
                    <div className="discount-code">
                        <button onClick={handleApplyDiscount} disabled={isButtonDisabled}>اعمال کد تخفیف</button>
                        <input
                        ref={discountInputRef}
                        type="text"
                        placeholder="کد تخفیف را وارد کنید"
                        value={localDiscountCode}
                        onChange={(e) => {
                            setLocalDiscountCode(e.target.value);
                            setInputClass(''); // بازنشانی استایل هنگام تغییر مقدار
                        }}
                        disabled={isInputDisabled}
                        className={inputClass}
                        />
                    </div>
                </div>
            </div>
            <div className="total-cost">
                <h3>جمع کل سبد خرید</h3>

                <div className="total-small">
                    <div className="total-small-txt">جمع جزء :</div>
                    <div className="total-small-digit">{totalCostBeforeDiscount.toLocaleString()} تومان</div>
                </div>

                <div className={`total-all ${discountApplied ? 'discount-applied' : ''}`}>
                    <div className="total-all-txt">جمع کل :</div>
                    {discountApplied && <div className="discount-label fade-in-discount">15٪ تخفیف</div>}
                    <div className="total-all-digit">{totalCostAfterDiscount.toLocaleString()} تومان</div>
                </div>

                <button className='settelment' onClick={settelment}>ادامه جهت تسویه حساب</button>
            </div>
        </div>
    );
}
 
export default ShoppingCart;