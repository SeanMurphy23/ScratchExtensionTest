class SeanTest {
    getInfo() {
        return {
            "id": "SeanTest",
            "name": "SeanTest",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "multiply [num1] by [num2]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                    }
                }],
            },
        //"menus": { //we will get back to this in a later tutorial
        //}
    };
    substringy({num1, num2}) {
        return (num1*num2);
    };
}
