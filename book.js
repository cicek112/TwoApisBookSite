



function resim(isim){
    const ayarlar = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b406cd23dmsheeb54ea747466e6p1a36a1jsn0732039a16f4',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    };
    
    fetch('https://bing-image-search1.p.rapidapi.com/images/search?q='+isim, ayarlar)
        .then(response => response.json())
        .then(response => 
            console.log(response)
            )
        .catch(err => console.error(err));
};



const options = {
	method: 'GET',
	
};


const apiKey="PSbkEY1f1PA3UvjZBpCaK9FxqSt5wlgf"



fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + apiKey,options)  
    .then(response => { 
        return response.json(); 
    })  
    .then(json => { 
        let x=[]
        json.results.forEach(element => {
            let sinek = (element.book_details[0].title);
            x.push(sinek)
            
            console.log(sinek)
            
        });
        console.log(x);
        let html="";
        x.forEach((item, index) =>{
            // setTimeout(resim, 1000*index,item);


            

            let obje=document.getElementById("items")
            

            html +=
            `<div class="item">
                <img src="../logo2.png" alt="">
                <p id="ad" > ${item}</p>
            </div>`;

            obje.innerHTML=html;
        
        })
    });

    

