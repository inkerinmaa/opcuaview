import colors from 'colors'
import seq_auth from '../models/model.js'

export function requestTime(req, res, next) {
  req.requestTime = Date.now()
  next()
}

export function seqTest(req, res, next) {
  seq_auth()
  next()
}

// export function findTagsMw(req, res, next) {
//   findTags()
//   next()
// }


export function logger(req, res, next) {
  console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
  next()
}