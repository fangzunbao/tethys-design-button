/**
 * 将HEX格式的颜色值转为RGB的颜色值
 * @param hex hex颜色值
 * @returns RGB颜色值
 */
export const HexToRgb = (hex: string): number[] => {
  if (!hex) return []
  return [
    parseInt('0x' + hex.slice(1, 3)),
    parseInt('0x' + hex.slice(3, 5)),
    parseInt('0x' + hex.slice(5, 7)),
  ]
}

/**
 * 将RGB值转为HEX值
 * @param a RGB - R
 * @param b RGB - G
 * @param c RGB - B
 * @returns
 */
export const RgbToHex = (a: number, b: number, c: number) => {
  let r = /^\d{1,3}$/
  if (!r.test(a.toString()) || !r.test(b.toString()) || !r.test(c.toString()))
    throw Error('输入错误的hex颜色值')
  let hexs = [a.toString(16), b.toString(16), c.toString(16)]
  for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = '0' + hexs[i]
  return '#' + hexs.join('')
}

/**
 * 将颜色值加深
 * @param color 颜色值
 * @param level 加深程度
 * @returns
 */
export const getDarkColor = (color: string, level: number) => {
  if (!color) return
  let r = /^\#?[0-9A-F]{6}$/
  if (!r.test(color)) throw Error('输入错误的hex颜色值')
  let rgbc = HexToRgb(color)
  //floor 向下取整
  for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level))
  return RgbToHex(rgbc[0], rgbc[1], rgbc[2])
}

/**
 * 将颜色值变浅
 * @param color 颜色值
 * @param level 变浅程度
 * @returns
 */
export const getLightColor = (color: string, level: number) => {
  if (!color) return
  let r = /^\#?[0-9A-F]{6}$/
  if (!r.test(color)) throw Error('输入错误的hex颜色值')
  let rgbc = HexToRgb(color)
  for (let i = 0; i < 3; i++)
    rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i])
  return RgbToHex(rgbc[0], rgbc[1], rgbc[2])
}
