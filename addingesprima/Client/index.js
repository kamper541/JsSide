// const { response } = require("express");

const defbutton = document.querySelector('#defined')

defbutton.onclick = function () {

    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code)
    let code_to_send = JSON.stringify(code)
    const data1 = { username: 'example' }

    fetch('http://localhost:8080/convert', {hi: 1})
    // .then(response => response.json())
    .then(data => console.log(data))
    // .catch((err) => {
    //     console.error(err);
    // })
}