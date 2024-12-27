import './../css/bottomBar.css';

import {Link} from 'react-router-dom';
import React, { useEffect, useState } from "react";
//import axios from "axios";

let BottomBar = ()=>{
				//하단 버튼 상태 관리 스테이트
				let [index,setIndex] = useState(null);
				let action = (index)=>{
								setIndex(index);
				}
				
				return(
				<>
				{/* 하단 네비게이션바 UI*/}
				<div className='bottomBar'>
				  <ul className='bottomBarUl'>
				    <li className={index ===1 ? 'active' : ''}><Link className={`link `} to='/reward' onClick={()=>{action(1)}} >아이콘1</Link></li>
				    <li className={index ===2 ? 'active' : ''} ><Link className={`link` } to='/punishment'onClick={()=>{action(2)}}>아이콘2</Link></li>
				    <li className={index ===3 ? 'active' : ''} ><Link className={`link `} to='habit' onClick={()=>{action(3)}}>아이콘3</Link></li>
				    <li className={index ===4 ? 'active' : ''} ><Link className={`link `} to='/note' onClick={()=>{action(4)}}>아이콘4</Link></li>
				  </ul>
				</div>
				
				
				
				
				</>
				)
}

export default BottomBar;