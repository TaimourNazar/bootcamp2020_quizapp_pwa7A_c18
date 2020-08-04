export default function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}./sw.ts`;
    navigator.serviceWorker.register(swUrl).then((result)=>{
        console.log('result',result);
    })
    .catch((err)=>{
        console.log('err',err);
    })
}