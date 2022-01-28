import {expect} from 'chai';
import supertest from 'supertest';

describe('auth', function () {
    const request = supertest(process.env.BASE_URL)
    it('success log in', function () {
        request
            .post('/auth')
            .send({login: process.env.LOGIN, password: process.env.PASSWORD})
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.eq(200);
                expect(res.body.token).not.to.be.undefined;
            })
    })

    it('log in with wrong credentials', function () {
        request
            .post('/auth')
            .send({login: 'wrong', password: 'wrong'})
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.eq(404);
                expect(res.body.message).to.eq('Wrong login or password.');
            })
    })
})