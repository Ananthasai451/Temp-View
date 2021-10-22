import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Orders.css"

export class Orders extends Component {
    static propTypes = {

    }

    render() {
        const orders=[{"name":"Vitamin-tablet","price":2,"quantity":1},
        {"name":"Crocin","price":5,"quantity":3},
    ];
        const OrderItems=orders.map((order)=>
        {
            return(
                <tr>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price*order.quantity}</td>
                </tr>
            )
        });
        return (
        <div class="Orders">
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody id="OrderBody">
                    {
                        OrderItems
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default Orders
