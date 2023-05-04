export const getCount = function(count){
    if(count < 0) return
    if(count < 10000){
        return count
    }else if(Math.floor(count / 10000) < 10000){
        // return Math.floor(count / 10000) + '万'
        return Math.floor(count / 1000) / 10 + '万' //显示一位小数
    }else {
        return Math.floor(count / 100000000) + '亿'
    }
}