import fs from "fs"
console.log("pid:", process.pid)
console.log("memory usage:", process.memoryUsage())
console.log("cwd:", process.cwd())

console.log(process.env)
console.log(process.argv)
