$(".linhaVenda td:nth-child(1)").html("<img src=’http://dreamatico.com/data_images/banana/banana-3.jpg' class='btnDetalhe'/>"); 
$(".btnDetail").click(function(){ var index = $(this).parent().parent().index(); var detail = $(this).parent().parent().next(); var status = $(detail).css("display"); if(status == "none") $(detail).css("display", "table-row"); else $(detail).css("display", "none") });
