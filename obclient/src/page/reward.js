import './../css/reward.css';
//라이브러리 임포트
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';

//redux import
import {changeValue} from './../store.js';


let Reward = ()=>{
				let [score,setScore] = useState(0);
				
				let dispatch = useDispatch();
				let value = useSelector((state)=>state.modal.value)
				
				let floatingBtn = ()=>{
								dispatch(changeValue(!value));
								
								
				}
				
				let plus = ()=>{
								setScore((score)=>score+1);
				}
				
				let minus = ()=>{
								setScore((score)=>score-1);
				}
				
				return(
				<>

								<div className='chScore'>
												<span className='btn' onClick={minus} >-</span>
												<span>상점</span>
												<span>{score}</span>
												<span className='btn' onClick={plus} >+</span>
								</div>
								<div className='add' onClick={floatingBtn}>
												+
								</div>
				
				{value ? <Insert/> : null}
				
				
				
				
				
				
				</>
				)
}

let Insert = ()=>{
				
				return(
				<div className='modalBox'  >
								
												<textarea className='insertModal'>
				
												</textarea>
								
				</div>
				)
				
}



export default Reward;