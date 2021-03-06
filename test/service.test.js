/* global describe, it */
const chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('Service', function () {
  var Service = require('../service')

  it('has interface', function () {
    var service = new Service('foo', [], function () {}, {}, {}, 'singleton', {c: 2})
    service.should.have.interface({
      id: String,
      name: String,
      dependsOn: Array,
      constructor: Function,
      container: Object,
      block: Object,
      lifestyle: String,
      config: Object
    })

    service.lifestyle.should.equal('singleton')
    service.config.should.deep.equal({
      c: 2,
      name: 'foo'
    })
  })

  it('toString', function () {
    var service = new Service('foo', [], null, {name: 'container'}, {name: 'block'})
    service.toString().should.equal('container.block/foo')
  })
})
