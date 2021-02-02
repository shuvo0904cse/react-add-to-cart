import React, {Component} from 'react';
import classes from "./Orders.module.css";

class Orders extends Component {
    render() {
        return (
            <div className="container">
               <table>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Address</th>
                       <th>Total Product</th>
                       <th>Amount</th>
                       <th>Action</th>
                   </tr>
                   <tr>
                       <td>1</td>
                       <td>Md. Saiful Islam</td>
                       <td>shuvo0904@gmail.com</td>
                       <td>Dhaka</td>
                       <td>5</td>
                       <td>550</td>
                       <td>
                           <button type="button" className="btn">View</button>
                       </td>
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>Md. Saiful Islam</td>
                       <td>shuvo0904@gmail.com</td>
                       <td>Dhaka</td>
                       <td>5</td>
                       <td>550</td>
                       <td>
                           <button type="button" className="btn">View</button>
                       </td>
                   </tr>
                   <tr>
                       <td>3</td>
                       <td>Md. Saiful Islam</td>
                       <td>shuvo0904@gmail.com</td>
                       <td>Dhaka</td>
                       <td>5</td>
                       <td>550</td>
                       <td>
                           <button type="button" className="btn">View</button>
                       </td>
                   </tr>
                   <tr>
                       <td>4</td>
                       <td>Md. Saiful Islam</td>
                       <td>shuvo0904@gmail.com</td>
                       <td>Dhaka</td>
                       <td>5</td>
                       <td>550</td>
                       <td>
                           <button type="button" className="btn">View</button>
                       </td>
                   </tr>
               </table>
            </div>
        );
    }
}

export default Orders;