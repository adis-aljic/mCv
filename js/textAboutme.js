function func(parametar) {
    const aboutMe = [`My name is Adis Aljić and I am a Bachelor of Science in Physics (240 ECTS) 
with areas of competence in JavaScript, HTML, Medical Physics and High Energy Physics 
as well as in teaching Physics.`,
        `I consider myself to be a team player and if necessary a team leader.`,
        `I will also describe myself as very objectiv, ambitious, responsible and committed.`,
        `In addition I have excellent communication and teambuilding skills which I have developed 
during my education and part time jobs.` ]

    const info = [
        `<strong>Name: </strong>`,
        `<strong>Birth date: </strong>`,
        `<strong>Birth place:</strong> `,
        `<strong> Nationality: `,
        `<strong>Phone number: `,
        `<strong>Email: </strong> `,
        `<strong> Driving license: </strong> B, B1, C, C1`
    ]


    switch (parametar) {
        case 0: // login card on index page
        document.getElementById("info").innerHTML = "";

            document.getElementById("cardAboutMe").innerHTML = "";
            break;
            
            case 1: // about me card on index page
            document.getElementById("info").innerHTML = "";

            if (document.getElementById("cardAboutMe").innerHTML == "") {
                delayTextInCards(aboutMe,"cardAboutMe",400);   

            }
            break;

        case 2: // clear cards in index page
            document.getElementById("cardAboutMe").innerHTML = ""

            break;

        case 3: // information card on contact page
        document.getElementById("cardAboutMe").innerHTML = ""

        if (document.getElementById("info").innerHTML == "") {
            delayTextInCards(info,"info",350);   
            // document.getElementById("addPic").innerHTML = ''
        }
            break;
        
            case 4: // put down cards on experience and contact page
            document.getElementById("sendmess").innerHTML = "";
            document.getElementById("info").innerHTML = "";
            document.getElementById("social").innerHTML = "";

            break;

        // put down card when send message card is acitve on contact page
        case 5:
            document.getElementById("info").innerHTML = "";
            // document.getElementById("social").innerHTML = "";

            break;
        
            // put down card when social networking card is acitve on contact page
        case 6:
            document.getElementById("sendmess").innerHTML = "";
            document.getElementById("info").innerHTML = "";

            break;

        default:
            break;
    }

}


function delayTextInCards(array,id,interval) {
    let i = 0                                
        let time = setInterval(()=>{
document.getElementById(id).innerHTML += "<p>" + array[i] + "</p>" 

            i++; 
            if(i==array.length){
                this.clearInterval(time);
            }
            }, interval);
    }