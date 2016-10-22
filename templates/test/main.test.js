import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/main.js';

const should = chai.should();

chai.use(chaiHttp);

describe('Testing Main.js', () => {
    
    it('Should check the / route', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.to.equal('Hello World');
                done();
            });
    });

    it('Should check the /test route', (done) => {
        chai.request(server)
            .get('/test')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.to.equal('This is a test');
                done();
            })
    });
});