function runLater() {
    console.log("Mohamed");
}

runLater()
// setTimeout(runLater, 30000)
let timer =setInterval(runLater, 1000)
setTimeout(
    function(){
        clearInterval(timer)
    }, 10000
)

