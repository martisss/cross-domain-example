function jsonp({url, params, callback}){
  return new Promise((resolve, reject)=>{
    let script = document.createElement('script')
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    let params = { ...params, callback }
    let arrs = []
    for(let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}