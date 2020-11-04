var idSelectElement = null;

export function trainer(event) {
    
    console.log("set : ", event.target.id);
    var idImg = event.target.id.split('_');
    idSelectElement = idImg[1];

    
}

export function permettreDepot(event) {
    event.preventDefault();
}

export function deposer(event) {
    event.preventDefault();
    var coord = event.target.id.split('_');
    var i = coord[1];
    var j = coord[2];
    console.log(i,j,idSelectElement);
    
}

