/**
 * Created by amanulchowdhury.
 * Usage: drawTable(dataTable(data));
 */

const rowHeights = (rows) => {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
};

const colWidths = (rows) => {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
};

const drawLine = (blocks, lineNo) => {
    return blocks.map(function(block) {
        return block[lineNo];
    }).join(" ");
};

const drawTable = (rows) => {
    let heights = rowHeights(rows);
    let widths = colWidths(rows);

    function drawRow(row, rowNum) {
        let blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
};

module.exports = drawTable;



