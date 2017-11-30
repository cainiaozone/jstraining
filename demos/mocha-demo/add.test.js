// 单元测试
var add = require('./add.js');
// 引入断言库chai，指定 expect 断言风格
var expect = require('chai').expect;

// describe 测试套件，一组相关的测试
describe('加法函数的测试',function(){
  // it 测试用例，一个单独的测试，最小单位
  it('1加1应该等于2',function(){
    // expect 断言，判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。
    expect(add(1,1)).to.be.equal(2);
  });

  it('3加-3应该等于0',function(){
    expect(add(3,-3)).to.be.equal(0);
  })

})
