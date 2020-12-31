 let state = {
    pins: new Set()
}

const setState = (newState) => {
    state = {
        ...state,
        ...newState
    }
    setPins(state.pins)
}

const setPins = (pins) => {
    pins.forEach((pin) => {
        const elm = createElementFromHTML(`
            <div style="top:${pin.y}px;left: ${pin.x}px;position: absolute; font-size: 23px;z-index: 233;">XOT</div>
        `)
        document.body.appendChild(elm)
        document.getElementById('overlay').style.display = 'none'
    })
}



const init = () => {
    const div = createElementFromHTML(`
        <div class="wrapper">
            <div class="sidebar">
                <button id="btn"> + </button>
            </div>
        </div>
    `)

    const div2 = createElementFromHTML(`
        <div class="clickable-overlay" id="overlay" style="display: none"></div>
    `)
    document.body.appendChild(div)
    document.body.appendChild(div2)


}
 function createElementFromHTML(htmlString) {
     let div = document.createElement('div')
     div.innerHTML = htmlString.trim()

     return div.firstChild;
 }
init()
//
 document.getElementById('overlay').addEventListener('click', function clickEvent(e) {
    const x = e.pageX;
    const y = e.pageY;

    setState({
        pins: new Set([...state.pins, { x, y }])
    })
}, true)

 document.getElementById('btn').addEventListener('click', function clickEvent(e) {
     document.getElementById('overlay').style.display = 'block'
 }, true)
