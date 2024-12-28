import './../css/reward.css';
//라이브러리 임포트
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';

//redux import
import {changeValue,changeTitle,changeContext} from './../store.js';


let Reward = ()=>{
				let [score,setScore] = useState(0);
				
				let dispatch = useDispatch();
				
				//redux store 값 받아오기
				let value = useSelector((state)=>state.modal.value);
				let title = useSelector((state)=>state.rewardStore.title);
				let context = useSelector((state)=>state.rewardStore.context);
				
				let floatingBtn = ()=>{
								dispatch(changeValue(!value));
				}
				
				let plus = ()=>{
								setScore((score)=>score+1);
				}
				
				let minus = ()=>{
								setScore((score)=>score-1);
				}
				
				let save = ()=>{
								dispatch(changeTitle(''));
								dispatch(changeContext(''));
				}
				
				return(
				<div className='reward'>
				
				{title}
				{context}
				
								<div className='chScore'>
												<span className='btn' onClick={minus} >-</span>
												<span>상점</span>
												<span>{score}</span>
												<span className='btn' onClick={plus} >+</span>
								</div>
								<div className='add' onClick={floatingBtn}>
												+
								</div>
				
				{value ? <Insert save={save} /> : null}
				
				
				
				
				
				
				</div>
				)
}

let Insert = (props)=>{
				
				let dispatch = useDispatch();
				
				return(
				<div className='modalBox'>
								<div className='backFrontBtn'>
												<span className='backBtn'>ㅡ</span>
												<span className='addRewardTitle'>Add Reward</span>
												<span className='frontBtn'>+</span>
								</div>
								
								<textarea className='insertModal1' placeholder='보상 이름' ></textarea>
								<textarea className='insertModal2' onChange={(e)=>{
												dispatch(changeContext(e.target.value));
								}}  placeholder='보상 설명'></textarea>
								<div className='cost'>
												<span>이 보상은 </span>
												<input type='number' max='100' min='0' step='1' className='costInput'></input>
												<span>점 입니다. </span>
								</div>
				<button className='submitBtn' onClick={props.save()}> 저장 </button>
				</div>
				)
				
}



export default Reward;