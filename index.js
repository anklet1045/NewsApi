console.log('welcome to shadabdi news');
// 2975777b0dae4e67b991e10d192a2701 

// initialize the news api paremeters

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');
 
// creat a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=2975777b0dae4e67b991e10d192a2701');

// what to do when response is ready
xhr.onload = function(){

    if( this.status === 200)
    {
        // console.log( this.responseText);
        let json = JSON.parse(this.responseText);
        // console.log( this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml ='';

        articles.forEach(function( element, index){
            // console.log( index, element);

            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed accordion-color-light " type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" >
                   <b> Breaking News ${  index+1  }   </b> ${  element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                    <strong> ${element["content"]}  <a href='${element["url"]}' target='_blank'>Read more here ...</a></strong>
                    
                </div>
            </div>
        </div>`;

        newsHtml += news;

        });


        newsAccordion.innerHTML = newsHtml;

    }
    else
    {
        console.log('Some error occured');
        
    }
}
xhr.send();