import React, {Component} from 'react';
import IceCream from "../../components/IceCream/IceCream";
import Builder from "../../components/Builder/Builder";

class IceCreamBuilder extends Component {
    state = {
        items : {},
        scoops:[],
        totalPrice: 0,
        showModal: false,
        order : {
            name : "",
            phone_no:"",
            email: "",
            address: ""
        }
    };

    componentDidMount() {
        fetch('https://react-9b406-default-rtdb.firebaseio.com/items.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    items: responseData
                })
            })
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);

        this.setState((prevState) => {
            return {
                scoops : workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        })
    };

    removeScoop = (scoop) => {
        const {scoops, items} = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc == scoop)
        if(scoopIndex != "-1"){
            workingScoops.splice(scoopIndex, 1);

            this.setState((prevState) => {
                return {
                    scoops : workingScoops,
                    totalPrice: prevState.totalPrice - items[scoop]
                }
            })
        }
    };

    submitOrder = (event) => {
        event.preventDefault();
        console.log("event", event)
        const data = new FormData(event.target);

       /* fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });*/


    };

    modalOpen = () => {
        let modalStatus;
        if (this.state.showModal == true) {
            modalStatus = false
        }else{
            modalStatus = true
        }

        this.setState({
            showModal : modalStatus
        })
    };

    render() {
        const {items, totalPrice, scoops, showModal, order} = this.state
        return (
            <div className="container">
                <IceCream scoops={scoops}/>
                <Builder items={items} price={totalPrice} scoops={scoops} showModal={showModal} order={order} add={this.addScoop} remove={this.removeScoop} modal={this.modalOpen} submitOrder={this.submitOrder}/>
            </div>
        );
    }
}

export default IceCreamBuilder;