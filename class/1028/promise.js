function sleep () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('我睡了一会')
      resolve()
    }, 1000 * 2)
  });
}
sleep()
  .then(()=>{
  console.log('我要喝水')
})
  .catch(err=>{
    console.log('我要去医院了')
  })
  .finally(()=>{
    console.log('今天天气不错 哈哈哈')
  })
