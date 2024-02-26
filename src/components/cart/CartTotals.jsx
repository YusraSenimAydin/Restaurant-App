import React from 'react'

function CartTotals() {
     return (
          <div className='cart h-full max-h-[calc(100vh-_-90px)] flex flex-col'>
               <h2 className='bg-blue-600 text-center py-4 text-white 
               font-bold tracking-wide'>
                    Sepetteki Ürünler
               </h2>
               <div className='cart-items'>
                    <div className='cart-item'> cart item</div>
               </div>
               <div className='cart-totals mt-auto'>
                    <div>
                         <div>
                              <b>Ara Toplam</b>
                              <span className="float-right">99TL</span>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default CartTotals;