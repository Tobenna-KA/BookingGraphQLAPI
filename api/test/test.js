let request = require('supertest');
let assert = require('chai').assert;
const server = require('../../server');
const chai = require('chai');
const expect = chai.expect;

describe('/Testing Query',()=>{
    it('it should test event query requests',(done)=>{
       setTimeout(done,1000);
       request(server)
           .post('/graphql')
           .send({query:'{events { description title _id} }'})
           .expect(200)
           .end((err,res)=>{
               if(err){
                   return done(err);
               }
               res.body.events.should.have.property('description');
               res.body.events.should.have.property('_id');
               res.body.events.should.have.property('title')
               done();
           })
    });
});
