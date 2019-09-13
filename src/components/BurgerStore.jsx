import React, { Component } from 'react'
import BurgerComponent from './BurgerComponent'
import MenuComponent from './MenuComponent'

export default class BurgerStore extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <BurgerComponent />

                    </div>
                    <div className="col-md-5">
                        <MenuComponent />
                    </div>
                </div>
            </div>
        )
    }
}
