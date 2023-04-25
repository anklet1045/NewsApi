console.log('this is harry anklet cv screener');

let data = [

    {
        name: 'Anklet Harry',
        age: 20,
        city: "Delhi",
        language: "Python",
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },

    {
        name: 'Nikita Nalawade',
        age: 21,
        city: "Aurangabad",
        language: "Javacript",
        framework: ' React JS',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },

    {
        name: 'Ashish Diwate',
        age: 17,
        city: "PUNE",
        language: "CSS",
        framework: 'Bootstrap',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },

    {
        name: 'Amrita Diwate',
        age: 19,
        city: "Nashik",
        language: "C++",
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

]


function candidateIterator(data) {
    let index = 0;

    return {
        next: function () {
            if (index < data.length) {
                return {
                    value: data[index++],
                    done: false
                }

            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


let candidate = candidateIterator(data);

// console.log(candidate.next().value);
// console.log(candidate.next().value);

// img.innerHTML = ` <img src='${data.image}'>'`;

let img = document.getElementById('image');
let profile = document.getElementById('profile');
let next = document.getElementById('next');

nextCv();

next.addEventListener('click',nextCv);

function nextCv(){
    let currentCandidate = candidate.next().value;
    if(currentCandidate != undefined){
    img.innerHTML  =`<img src="${currentCandidate.image}">`;
    profile.innerHTML =`<ul class="list-group">
    <li class="list-group-item">Name : ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}  years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework}  framework</li>
  </ul>`;
    }

    else
    {
        alert(" END OF CANDIDATE APPLICATIONS")
        window.location.reload();

    }

}


