import {expect} from 'chai';
import supertest from 'supertest';

describe('auth', function () {
    let result;

    describe('success log in', function () {
        before(function () {
            result = supertest(process.env.BASE_URL)
                .post('/auth')
                .send({login: process.env.LOGIN, password: process.env.PASSWORD})
        })

        it('response status code 200', function () {
            result.expect(200);
        })

        it('response contains token', function () {
            result.end(function (err, res) {
                expect(res.body.token).not.to.be.undefined;
            })
        })
    })

    describe('log in with wrong credentials should retun error', function () {
        before(function () {
            result = supertest(process.env.BASE_URL)
                .post('/auth')
                .send({login: 'wrong', password: 'wrong'})
        })

        it('response status code is 404', function () {
            result.expect(404);
        })

        it('response body contains error message', function () {
            result.end(function (err, res) {
                    expect(res.body.message).to.eq('Wrong login or password.');
                })
        })
    })
})