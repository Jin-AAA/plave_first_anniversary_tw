$(function(){

    function updateTable() {
        $(".table-container").hide();
        $("#" + $("#category").val() + "-" + $("#number").val()).show();
    }

    function populateNumberSelect(startValue, endValue) {
        var numberSelect = $("#number");
        numberSelect.empty();
        for (var i = startValue; i <= endValue; i++) {
            numberSelect.append("<option value='" + i + "'>" + i + "</option>");
        }
    }

    $("#category").on("change", function () {
        var category = $(this).val();
        var numberSelect = $("#number");

        if (category === "A") {
            populateNumberSelect(7, 12);
        } else if (category === "B") {
            populateNumberSelect(1, 12);
        } else if (category === "C") {
            populateNumberSelect(1, 3);
        }

        updateTable();
    });

    $("#number").on("change", function () {
        updateTable();
    });

    $("#prevBtn, #nextBtn").on("click", function () {
        var currentTable = $(".table-container:visible");
        var tables = $(".table-container");
        var currentIndex = tables.index(currentTable);

        var newIndex;
        if (this.id === "prevBtn") {
            newIndex = (currentIndex - 1 + tables.length) % tables.length;
        } else {
            newIndex = (currentIndex + 1) % tables.length;
        }

        var newTable = tables.eq(newIndex);
        $("#category").val(newTable.attr('id').charAt(0));
        $("#number").val(newTable.attr('id').charAt(2));
        updateTable();
    });

    // 初始化時顯示 B-3 表格
    $("#category").val("B");
    populateNumberSelect(1, 12);
    $("#number").val("3");
    updateTable();
    

})