import axios from 'axios'
var data = JSON.stringify({
  collection: 'appointments',
  database: 'test',
  dataSource: 'Cluster0',
  projection: {
    _id: 1,
  },
})

var config = {
  method: 'get',
  url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-bgjth/endpoint/data/v1/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'api-key':
      'Q5R7TOK8qtmuHz0KrUcArDME8Vkeaip4DBsI65gVO0dbIUd1M7MSgCShp2TYq5pb',
    Accept: 'application/ejson',
  },
  data: data,
}

export const getData = async () => {
  await axios(config)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}
/* axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })

  var config = {
    method: 'get',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-bgjth/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key':
        'Q5R7TOK8qtmuHz0KrUcArDME8Vkeaip4DBsI65gVO0dbIUd1M7MSgCShp2TYq5pb',
      Accept: 'application/ejson',
    },
    data: data,
  }
  
  export const getData = axios.get('https://us-east-1.aws.data.mongodb-api.com/app/data-bgjth/endpoint/data/v1/action/find', config) */
