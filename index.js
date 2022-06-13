import request from 'request'
const url = 'https://data.coa.gov.tw/Service/OpenData/FaRss.aspx?key=015'

request.get(url, (err, res, body) => {
  let json = JSON.parse(body)
  console.log(json)
})
