 // 要求：计算1-1亿的和
//  注意：web worker 是一个独立的进程。不能操作DOM和BOM
 let total = 0
 for (var i = 0; i < 100000000; i++) {
     total += i
 }
 console.log(total)