const initialState = {
    mangThucAn: [
        { ten: 'salad', soLuong: 1, giaTien: 10 },
        { ten: 'cheese', soLuong: 1, giaTien: 10 },
        { ten: 'beef', soLuong: 1, giaTien: 10 }
    ]

}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'THEM_BOT_MENU': {
            let burgerCapNhat = [...state.mangThucAn];
            if (action.themBot) {
                burgerCapNhat[action.index].soLuong++;
            } else if (burgerCapNhat[action.index].soLuong > 0) {
                burgerCapNhat[action.index].soLuong--;
            }
            state.mangThucAn = burgerCapNhat;
            return { ...state };

        }
    }
    return { ...state };
}
