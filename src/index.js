const fs = require('fs')
const path = require('path')
const utils = require('util')
const allCity = require('./city-data')

// 省
const provinceList = []
// 市
const cityList = []
// 区/县
const countryList = []

// 处理省份的数据
Object.keys(allCity.province_list).forEach(pk => {
  if (allCity.province_list[pk] === '海外') return
  provinceList.push({
    id: pk.slice(0, 2),
    label: allCity.province_list[pk],
    value: allCity.province_list[pk],
    children: []
  })
})

// 处理城市的数据
Object.keys(allCity.city_list).forEach(ck => {
  cityList.push({
    id: ck.slice(0, 4),
    p_id: ck.slice(0, 2),
    label: allCity.city_list[ck],
    value: allCity.city_list[ck],
    children: []
  })
})

// 处理区/县的数据
Object.keys(allCity.county_list).forEach(xk => {
  countryList.push({
    p_id: xk.slice(0, 4),
    label: allCity.county_list[xk],
    value: allCity.county_list[xk]
  })
})

cityList.forEach(city => {
  city.children = countryList.filter(x => x.p_id === city.id)
})

provinceList.forEach(province => {
  province.children = cityList.filter(x => x.p_id === province.id)
})

// 要写入文件的内容
const dataStr = 'export default ' + utils.inspect(provinceList, { depth: null })
// 写入文件
fs.writeFile(path.join(__dirname, '../city-data-element.js'), dataStr, err => {
  if (err) return console.log(err.message)
  console.log('处理成功！')
})
