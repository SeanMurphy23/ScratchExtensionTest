class SeanBlock {
    getInfo() {
        return {
            "id": "SeanBlock",
            "name": "SeabBlock",
            "blocks": [{
                    "opcode": "multi",
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
            }
    };
    multi({num1, num}) {
        return (num1*num2);
    };
}
