let arr=new Array(3).fill(0)
let time=[4,5,10]
let profit=0

function find(n){
    let temp=new Array(3).fill(0)

    if(n<4){
        return 0
    }
    else{
        if(n>=4){
            let val=n-4
            temp[0]=val*1000;
        }
        if(n>=5){
            let val=n-5
            temp[1]=val*1500;
        }
        if(n>=10){
            let val=n-10
            temp[2]=val*3000;
        }
    }
    let max=getMax(temp)
    profit+=temp[max]
    arr[max]+=1
    return find(n-time[max])
}


function getMax(temp){
    if(temp[0]>=temp[1]){
        if(temp[0]>=temp[2]){
            return 0
        }
        return 2
    }
    else{
        if(temp[1]>temp[2]){
            return 1
        }else{
            return 2
        }
    }
}
let x=8
find(x)
console.log(`T : ${arr[1]} P : ${arr[0]} C : ${arr[2]}`)
console.log(profit)

