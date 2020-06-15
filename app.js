const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

// .env 파일에 작성된 내용을 노드 환경변수에 등록한다
dotenv.config();

// Sequelize Sync - 모델을 동기화한다
process.env.NODE_ENV === 'development' ? sequelize.sync() : null;

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
