import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChonThem from './ChonThem';
export class BurgerComponent extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Cửa hàng Burger</h1>

                <div className="breadTop"></div>
                {/* <div className="text-center text-secondary">Chọn thức ăn</div> */}
                <ChonThem />
                <div className="breadBottom"></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangThucAn: state.burgerReducer.mangThucAn,
    }
};
export default connect(mapStateToProps, null)(BurgerComponent);
