let connection = require("./connection.js");

let orm = {
    selectAll: function (tableName) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            // console.log(result);
            printToConsole(result);
        });
    },

    selectWhere: function (tableName, colToSearch, valOfColumn) {
        const queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableName, colToSearch, valOfColumn], function (err, result) {
            if (err) throw err;
            // console.log(result);
            printToConsole(result);
        });
    },

    selectFirstLeftJoinSecond: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        const queryString = "SELECT ??.??, ??.* FROM ?? LEFT JOIN ?? ON ??.id = ??.?? ORDER BY ??";
        connection.query(queryString, [tableOne,tableOneCol,tableTwo,tableOne,tableTwo,tableOne,tableTwo,tableTwoForeignKey,tableOneCol], function (err, result) {
            if (err) throw err;
            // console.log(result);
            printToConsole(result);
        })
    },



};

    function printToConsole(result) {
    let colWidths = [15, 15, 15, 15, 10, 10]
    let fields = []
        for (const property in result[0]) {
            let x = fields.push(property);
            colWidths[x-1] += property.length
        }
        let consoleLine = ""
            for (let j = 0; j < fields.length; j++) {
                consoleLine += fields[j];
                const colWidth = colWidths[j]
                    for (let k = fields[j].length; k < colWidth+1; k++) {
                        consoleLine += " "
                    };
                consoleLine += "|"
            }
        console.log(consoleLine)
         // console.log("ID  | Product                                 | Department          |Price  | Qty | Sales |");
        console.log("-------------------------------------------------------------------------------------------------------------------")
        for (let i = 0; i < result.length; i++) {
            const lineElement = result[i];
            consoleLine = ""
            for (let j = 0; j < fields.length; j++) {
                const fieldValue = lineElement[fields[j]].toString();
                consoleLine += fieldValue;
                const colWidth = colWidths[j]
                    for (let k = fieldValue.length; k < colWidth+1; k++) {
                        consoleLine += " "
                    };
                consoleLine += "|"
            }
            console.log(consoleLine)
            // console.log(element.item_id + "  |  " + element.product_name + "  |  " + element.department_name + "  |  " + element.price + "  |  " + element.stock_quantity)
        }
            console.log("--------------------------------------------------------------------------------------------------------------------\n")

};

module.exports = orm;