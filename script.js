var expr= 'days';
$(document).change(function(){
    switch($('.days option:selected').val()){
        case 'MONDAY':
            alert("lets start the week right");
            break;
            case 'TUESDAY':
            alert("keep it going!");
            break;
            case 'WEDSNDAY':
            alert("HALF WAY!");
            break;
            case 'THURSDAY':
            alert("ALMOST THERE!");
            break;
            case 'FRIDAY':
            alert("YAY YOU MADE IT !");
            break;
            case 'SATURDAY':
            alert("LETS START THE PARTY!");
            break;
            case 'SUNDAY':
            alert("LAST DAY SORRY!");
            break;
            case 'Default':
                alert('THE END' + expr + '.');
    }
});
            

    
    