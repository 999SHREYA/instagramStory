let arr = [
    {dp:"https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
]

let clutter = "";
arr.forEach( (elem, index) => {
    clutter += `   <div class="card">
                <img src="${elem.dp}" alt="image" srcset="">
            </div>`

})

document.querySelector('#storian').innerHTML =  clutter
