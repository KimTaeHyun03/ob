// 필요한 모듈 가져오기
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import axios from 'axios';

// Express 앱 생성
const app = express();

// 포트 설정
const PORT = process.env.PORT || 3030;

// 현재 디렉토리 경로 설정 (ES Modules 사용 시 필요)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB 연결

let db;



let url ='mongodb+srv://admin:rlaxogus0421@ovcluster.igw7x.mongodb.net/?retryWrites=true&w=majority';

new MongoClient(url).connect().then((client) => {
  console.log('DB 연결 성공');
  db = client.db('ovCluster');

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('DB 연결 실패:', err);
  process.exit(1); // 연결 실패 시 프로세스 종료
});

// 미들웨어 설정
app.use(cors()); // CORS 활성화
app.use(bodyParser.json()); // JSON 요청 본문 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 데이터 파싱

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// React 라우트 처리
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.post('/api/add',(req,res)=>{
  
});