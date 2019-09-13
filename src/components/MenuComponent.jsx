import React, { Component } from 'react'
import { connect } from 'react-redux'
export class MenuComponent extends Component {
    renderMenu = () => {
        return this.props.mangThucAn.map((item, index) => {
            return <tr key={index}>
                <td>{item.ten}</td>
                <td><button className="btn btn-success" onClick={() => this.props.themMenu(true, index)}>+</button>{item.soLuong}<button className="btn btn-danger" onClick={() => this.props.themMenu(false, index)}>-</button></td>
                <td>{item.giaTien * item.soLuong}</td>
            </tr>

        })
    }
    tongTien = () => {
        return this.props.mangThucAn.reduce((tongTien, item) => {
            return tongTien += item.giaTien * item.soLuong;
        }, 0);
    }
    render() {
        return (
            <div>
                <h1>Chọn thức ăn</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td >Thức ăn</td>
                            <td></td>
                            <td>Giá</td>
                        </tr>
                        {this.renderMenu()}
                        <tr>
                            <td></td>
                            <td><h4>Tổng tiền :</h4></td>
                            <td><h4> {this.tongTien()}</h4></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button className="btn btn-lg btn-primary">Thanh toán</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangThucAn: state.burgerReducer.mangThucAn,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        themMenu: (themBot, index) => {
            dispatch({
                type: 'THEM_BOT_MENU',
                themBot: themBot,
                index: index,
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)