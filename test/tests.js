const path = require('path')
const hasShebang = require('../')

describe('has-shebang', () => {
  it('throws with bad input', () => {
    expect(() => hasShebang()).toThrowError(/expecting input to be string/i)
    expect(() => hasShebang({})).toThrowError(/expecting input to be string/i)
  })

  it('string', () => {
    expect(hasShebang('#!')).toBe(true)
  })

  it('file', () => {
    const file = path.resolve(__dirname, 'shebang.js')
    expect(hasShebang(file)).toBe(true)
  })
})
