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

const pinWasClicked = (pin) => {
    const modalElm = document.getElementById(`modal-${pin.id}`)
    if (!modalElm) {

    } else {
        if (modalElm.style.display === 'none') {
            modalElm.style.display = 'block'
            return
        }
        modalElm.style.display = 'none'
    }
}

const setPins = (pins) => {
    pins.forEach((pin) => {
        const elm = createElementFromHTML(`
            <div style="top:${pin.y}px;left: ${pin.x}px;position: absolute; font-size: 23px;z-index: 233;">LEK</div>
        `)
        document.body.appendChild(elm)
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('ex-sidebar').style.display = 'block'
    })
}

const init = () => {
    const div = createElementFromHTML(`
        <div class="ext-wrapper" id="ex-sidebar">
            <div class="ext-sidebar">
                <button id="btn"> + </button>
            </div>
        </div>
    `)

    const div2 = createElementFromHTML(`
        <div class="ext-clickable-overlay" id="overlay" style="display: none"></div>
    `)
    const m = createElementFromHTML(`
        <div class="ext-modal-overlay" style="display: none">
            <div class="ext-modal" >
                <div>
                ds
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(m)
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
        pins: new Set([...state.pins, { x, y, id: 'lek' }])
    })
}, true)

 document.getElementById('btn').addEventListener('click', function clickEvent(e) {
     document.getElementById('overlay').style.display = 'block'
     document.getElementById('ex-sidebar').style.display = 'none'
 }, true)
