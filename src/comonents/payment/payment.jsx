import React from "react";

import './payment.scss'
import Locale from "../../locale";
const locale = Locale.payment;
const Payment = (props) => (
    <div>
        <form className="payment-form" method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" target="_blank">
            <input type="hidden" name="receiver" value={props.paymentNumber}/>
            <input type="hidden" name="formcomment" value="DelWay"/>
            <input type="hidden" name="short-dest" value="DelWay"/>
            <input type="hidden" name="label" value=""/>
            <input type="hidden" name="quickpay-form" value="donate"/>
            <input type="hidden" name="targets" value="транзакция"/>
            <input type="text" name="sum" data-type="number" placeholder="1 250"/>
            <input type="hidden" name="comment" value="DelWay"/>
            <input type="radio" name="paymentType" value="AC" checked/>
            <input type="submit" value={locale.transfer}/>
        </form>
    </div>
)

export default Payment