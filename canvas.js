// Prevent scrolling when touching the canvas


window.addEventListener('load',()=>{
    
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    
    // ctx.fillRect(50,50,200,200)

    // ctx.strokeStyle='red'
    // ctx.strokeRect(260,50,200,200)

    // ctx.beginPath();
    // ctx.moveTo(470, 50)
    // ctx.lineTo(700,250)
    // ctx.lineTo(470,250)
    // ctx.closePath()
    // ctx.stroke()

    //variables
    let painting =false

    function startPostion() {
        painting=true
    }
    function finishedPositin(){
        painting=false
        ctx.beginPath()
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap='round'
        ctx.lineJoin='round'
        
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        // 선을 부드럽게
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
    
    //EventListener
    canvas.addEventListener('mousedown', startPostion)
    canvas.addEventListener('mouseup', finishedPositin)
    canvas.addEventListener('mousemove', draw)


})


