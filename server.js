// server.js

// 필요한 모듈 가져오기
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';


// Express 앱 생성
const app = express();

// 미들웨어 설정
app.use(cors()); // CORS 활성화
app.use(bodyParser.json()); // JSON 요청 본문 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 데이터 파싱

// 포트 설정
const PORT = process.env.PORT || 3000;

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, World! Node.js 서버가 실행 중입니다.');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});