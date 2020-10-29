process.env.NODE_ENV = 'test';
const { assert, expect } = require('chai');
const request = require('supertest');

const app = require('../index');
const conn = require('../database/database');
const url = require('../../../TR-Seidor/Back-End-Planning/ip/ip')
/*
describe('pruebaTest',() => {
    it('pruebaTest', () => {
        assert.equal(1,1);
    })
})


before((done) => {
    conn.connect()
        .then(() => done())
        .catch((err) => done(err));
});

after((done) => {
    conn.close()
        .then(() => done())
        .catch((err) => done(err));
});
*/
describe('POST /facturables', () => {

    it('Ok, creating a new facturable', (done) => {
        request(app).post('/facturables')
            .send({ Facturable_Codigo: 2, Facturable_Descripcion: "Test"})
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('id');
                expect(body).to.contain.property('dni');
                expect(body).to.contain.property('username');
                expect(body).to.contain.property('password');
                expect(body).to.contain.property('email');
                expect(body).to.contain.property('date');
                return done();
            }).catch((err) => done(err));
    });

    it('Fail, user requires dni', (done) => {
        request(app).post('/api/user/register')
            .send({ username: "Test", password: "testeando", email: "test@test.com" })
            .then((res) => {
                const body = res.body;
                expect(body.message).to.equal('User validation failed: dni: The DNI is required');
                return done();
            }).catch((err) => done(err));
    });

    it('Fail, user requires username', (done) => {
        request(app).post('/api/user/register')
            .send({ dni: 35262728, password: "testeando", email: "test@test.com" })
            .then((res) => {
                const body = res.body;
                expect(body.message).to.equal('User validation failed: username: The username is required');
                return done();
            }).catch((err) => done(err));
    });

    it('Fail, user requires password', (done) => {
        request(app).post('/api/user/register')
            .send({ dni: 35262728, username: "test", email: "test@test.com" })
            .then((res) => {
                const body = res.body;
                expect(body.message).to.equal('User validation failed: password: The password is required');
                return done();
            }).catch((err) => done(err));
    });
});

describe('POST /api/user/login', () => {

    before(async function() {
        const userLogin = new User({dni: 32323235, username: 'Login', password: 'login1234', email: 'login@email.com'});
        await userLogin.save();
    });

    it('Ok, login a user', (done) => {
        request(app).post('/api/user/login')
            .send({ email: 'login@email.com', password: 'login1234'})
            .then((res) => {
                const body = res.body;
                console.log(body);
                expect(body.message).to.equal(`The user Login is login correctly`);
                return done();
            }).catch((err) => done(err));
    });

    it('Fail, the user password does not correctly', (done) => {
        request(app).post('/api/user/login')
            .send({ email: "login@email.com", password: "asd1234" })
            .then((res) => {
                const body = res.body;
                expect(body.message).to.equal('This password is invalid');
                return done();
            }).catch((err) => done(err));
    });
});

describe('UPDATE /api/user/:id', () => {

    it('Ok, updated a user id 1', (done) => {
        request(app).put('/api/user/1')
            .send({ dni: 35262730, username: "Update", password: "updatedd", email: "upd@upd.com" })
            .then((res) => {
                const body = res.body;
                expect(body).to.have.property('dni').to.be.equal(35262730);
                expect(body).to.have.property('username').to.be.equal('Update');
                expect(body).to.have.property('password').to.be.equal('updatedd');
                expect(body).to.have.property('email').to.be.equal('upd@upd.com');
                return done();
            }).catch((err) => done(err));
    });
});

describe('DELETE /api/user/:id', () => {

    it('Ok, deleted a user id 1', (done) => {
        request(app).delete('/api/user/1')
            .then((res) => {
                const body = res.body
                expect(body.message).to.equal('35262730 is deleted');
                return done();
            }).catch((err) => done(err));
    });
});
