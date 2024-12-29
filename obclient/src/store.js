
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

				let rewardStore = createSlice({
					  name:'rewardStore',
					  initialState:{
					  	  title:'',
					  	  context:'',
					  	  cost:0,
					  },
					  reducers:{
					  	  changeTitle(state,action){
					  	  	  state.title = action.payload;
					  	  },
					  	  changeContext(state,action){
					  	  	  state.context = action.payload;
					  	  },
					  	  changeCost(state,action){
					  	  	  state.cost = action.payload;
					  	  }
					  	  
					  	  
					  }
				})


	  
//함수 export
//형식
//export let {함수이름} = 슬라이스명.actions;
export let {changeValue} = modal.actions;
export let {changeTitle,changeContext,changeCost} = rewardStore.actions;

//state export
export default configureStore({
	  
	  reducer: {
	  	  //형식
	  	  //작명:만든슬라이스의 이름.reducer,
	  	  modal:modal.reducer	,
	  	  rewardStore:rewardStore.reducer
	  }
	  
	  
}) 
