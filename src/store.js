import { create } from "zustand";

export const useCartStore = create((set) => ({
    cartItems: [],
    showCartMessage: false,
    totalCostBeforeDiscount: 0,
    totalCostAfterDiscount: 0,
    discountApplied: false, // آیا تخفیف اعمال شده؟
    discountCode: "", // ذخیره مقدار کد تخفیف

    addToCart: (item) =>
        set((state) => {
            const existingIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.date === item.date && cartItem.time === item.time
            );

            let updatedCartItems;

            if (existingIndex !== -1) {
                // اگر آیتم تکراری است، مقدار quantity و people را افزایش دهیم
                updatedCartItems = [...state.cartItems]; // ایجاد کپی از آرایه قبلی
                updatedCartItems[existingIndex] = {
                    ...updatedCartItems[existingIndex],
                    quantity: updatedCartItems[existingIndex].quantity + item.quantity,
                    people: updatedCartItems[existingIndex].people + item.people,
                };
            } else {
                // اگر آیتم جدید است، آن را به لیست اضافه کنیم
                updatedCartItems = [...state.cartItems, item];
            }
            
            const totalBeforeDiscount = updatedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            let totalAfterDiscount = totalBeforeDiscount;

            if (state.discountApplied) {
                // فقط آیتم‌هایی که قبل از اعمال تخفیف وجود داشتند، شامل تخفیف می‌شوند
                const totalBeforeNewItem = state.cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity, 0
                );
                const discountedAmount = totalBeforeNewItem * 0.85; // فقط روی رزروهای قبلی تخفیف اعمال می‌شود
                totalAfterDiscount = discountedAmount + (totalBeforeDiscount - totalBeforeNewItem); // جمع تخفیف روی رزروهای قبلی و قیمت اصلی رزروهای جدید
            } else{
                totalAfterDiscount = totalBeforeDiscount; // اگر تخفیف اعمال نشده بود، قیمت کل برابر با قیمت قبل است
            }

            return {
                ...state,
                cartItems: updatedCartItems,
                totalCostBeforeDiscount: totalBeforeDiscount,
                totalCostAfterDiscount: totalAfterDiscount,
                showCartMessage: true // اصلاح مقداردهی state

            }; 
        }),

    applyDiscount: (code) =>
            set((state) => {
                if (!state.discountApplied) {   
                    const discountedTotal = state.totalCostBeforeDiscount * 0.85; // 15٪ تخفیف
    
                    return {
                        totalCostAfterDiscount: discountedTotal,
                        discountApplied: true, // تخفیف یکبار اعمال شود
                        discountCode: code, // ذخیره مقدار کد تخفیف
                    };
                }
                return state;
            }),

    removeFromCart: (date, time) =>
            set((state) => {
                let updatedCartItems = state.cartItems.filter(
                    (cartItem) => !(cartItem.date === date && cartItem.time === time)
                );

                // اگر هیچ آیتمی در سبد نماند، مقدار را به آرایه خالی تنظیم کن
                if (updatedCartItems.length === 0) {
                    return {
                        cartItems: [],
                        totalCostBeforeDiscount: 0,
                        totalCostAfterDiscount: 0,
                        discountApplied: false,
                        discountCode: "",
                        showCartMessage: false,
                    };
                };
    
                const totalBeforeDiscount = updatedCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

                let totalAfterDiscount = totalBeforeDiscount;

                if (state.discountApplied) {
                    const totalBeforeNewItem = updatedCartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity, 0
                    );
                    const discountedAmount = totalBeforeNewItem * 0.85;
                    totalAfterDiscount = discountedAmount;
                } else {
                    totalAfterDiscount = totalBeforeDiscount;
                }
    
                return {
                    cartItems: updatedCartItems,
                    totalCostBeforeDiscount: totalBeforeDiscount,
                    totalCostAfterDiscount: totalAfterDiscount,
                };
            }),

    clearCart: () =>
        set({
            cartItems: [],
            totalCostBeforeDiscount: 0,
            totalCostAfterDiscount: 0,
            discountApplied: false,
            showCartMessage: false,
            discountCode: "", // پاک شدن مقدار کد تخفیف هنگام خالی شدن سبد خرید
    }),

    hideCartMessage: () => set({ showCartMessage: false }),
}));
