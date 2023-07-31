## StreetLamp Backend

### How to Deploy

1. root path에 `.env` 파일 추가
```dotenv
# 예시
MONGODB_URL={{ mongodb://localhost:27017 }}
JWT_SECRET_KEY={{ secretKey }}
```

2. 필요한 패키지 설치
```bash
$ npm install
```

3. production 배포
```bash
$ npm run start:prod
```
