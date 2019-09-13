import React, { Component } from 'react'
import { connect } from 'react-redux';
export class ChonThem extends Component {
    renderThucAn = () => {
        let render = [];
        for (const key in this.props.mangThucAn) {
            for (let i = 0; i < this.props.mangThucAn[key].soLuong; i++) {
                 render = [...render, <div  className={this.props.mangThucAn[key].ten}></div>];
            }
        }
        return render;
    }

    render() {
        return (
            <div>
                {this.renderThucAn()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangThucAn: state.burgerReducer.mangThucAn
    }
}
export default connect(mapStateToProps, null)(ChonThem);
