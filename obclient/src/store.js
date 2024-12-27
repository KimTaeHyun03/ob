
import { configureStore, createSlice } from '@reduxjs/toolkit'

	  let modal = createSlice({
	  	  name :'modal',
	  	  initialState:{value:false},
	  	  reducers:{
	  	  	  //함수입력
	  	  	  changeValue(state,action){
	  	  	  	  state.value = action.payload;
	  	  	  							
	  	  	  }
	  	  }
	  });



	  
//함수 export
//형식
//export let {함수이름} = 슬라이스명.actions;
export let {changeValue} = modal.actions;


//state export
export default configureStore({
	  
	  reducer: {
	  	  //형식
	  	  //작명:만든슬라이스의 이름.reducer,
	  	  modal:modal.reducer	,
	  }
	  
	  
}) 
