'use strict';

import React from 'react';

const DataTable = ({orderData, orderProps}) => {
    const {reference, total, nbItems} = orderData;
    const {delivery, texRate} = orderProps;
    const endSum = Number(total) + Number(delivery) + (Number(total) * (Number(texRate) / 100));

    return(

        <table className="order__data">
            <thead>
                <tr>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{reference}</td>
                    <td>{total / nbItems}&nbsp;$</td>
                    <td>{nbItems}</td>
                    <td>{total}&nbsp;$</td>
                </tr>

                <tr>
                    <td />
                    <td />
                    <td>Sum</td>
                    <td>{total}&nbsp;$</td>
                </tr>

                <tr>
                    <td />
                    <td />
                    <td>Delivery</td>
                    <td>{delivery}&nbsp;$</td>
                </tr>

                <tr>
                    <td />
                    <td />
                    <td>Tax Rate</td>
                    <td>{texRate}&nbsp;%</td>
                </tr>

                <tr className="total-sum">
                    <td />
                    <td />
                    <td>Total</td>
                    <td>{endSum.toFixed(2)}&nbsp;$</td>
                </tr>
            </tbody>
        </table>
    )
};

export default DataTable