         

function func(parametar) {
    const itExp = [
        `Co-leading two workshop at Tuzla Summer Institute, 2022`,
        `Building website and app in excel for tracking community service hours`,
        `Creating resume as website`,
        `Mentoring JavaScript, HTML and CSS`

    ]

    const participated = [
        `CEO Warm-up conference in Tuzla, 2015`,
        `Tuzla Summer Institute,2014`,
        `Seminar for Physics teachers in Nis, Serbia, 2016`,
        `International conference for Physics teachers in Aleksinac, Serbia, 2017`
    ]
    const physicsProf = [
        `Elementary School “Sutjeska” Modriča`,
        `Elementary School “Centar” Tuzla`,
        `High School ”Nikola Tesla” Samac`,
        `High School” Nikola Tesla” Vukosavlje`,
        `Gymnasium “ Ismet Mujezinović” Tuzla`,
        `Elementary School “Prva osnovna škola Srebrenik” Srebrenik`,
        `Elementary School “ Brijesnica” Brijesnica`,
        `Elementary School “Edhem Mulabdić” Donja Međiđa Gradačac`,
        `High School for Trafic education Tuzla`

    ]

    const exp = [
        `Mentor at TSI 2022`,
        `Unpaid internship at University Clinical Center  Tuzla, 2014-2015`,
        `Part time job at Elcom LDT, 2008`,
        `Private tutor for Physics and Math, 2006- present`,
        `Summer jobs in marketing, sales and managmetn 2004- present`,
        `Collecting books for two elementary schools in Tuzla Canton 2015`
    ]
    const edu = [
        `BILD IT, 2022`,
        `University of Tuzla, Faculty for Mathematics and Natural Science / Bachelor in Physics, 2008-2015`,

        `High School of Electrical Engineering/ Mechatronics, 2004-2008`,

        `Split School of High Energy Physics, 2015`,

        `Sarajevo School of High Energy and Medical Physics, 2014`,

        `International Workshop on LHC, Astrophysics, Medical and Environmental Physics in Shkodra, Albania, 2014`,

        `Winter School for talented children in Physics, organized by University of Tuzla, 2004`

    ]
    switch (parametar) {

        case 1:// activating  pariticipated card on experience page
        document.getElementById("edu").innerHTML = ""

        document.getElementById("card4exp").innerHTML = ""
            document.getElementById("card2exp").innerHTML = ""
            document.getElementById("card3exp").innerHTML = ""
            if (document.getElementById("card1exp").innerHTML == "") {




                delayTextInCards(participated,"card1exp",400);   

            }
            break;
        case 2: // activating card physics prof  on experience page

        document.getElementById("card1exp").innerHTML = ""
        document.getElementById("card3exp").innerHTML = ""
        document.getElementById("edu").innerHTML = ""
        
        document.getElementById("card4exp").innerHTML = ""
        if (document.getElementById("card2exp").innerHTML == "") {
            delayTextInCards(physicsProf,"card2exp",400);   
        }
        break;
        case 3: // activating card aditional experience on experience page
        document.getElementById("card4exp").innerHTML = ""
        document.getElementById("card1exp").innerHTML = ""
        document.getElementById("edu").innerHTML = ""
        
        document.getElementById("card2exp").innerHTML = ""
        if (document.getElementById("card3exp").innerHTML == "") {
            delayTextInCards(exp,"card3exp",400);   
            }
            break;
        case 4:        // put down all cards
            document.getElementById("card1exp").innerHTML = ""
            document.getElementById("card2exp").innerHTML = ""
            document.getElementById("card3exp").innerHTML = ""
            document.getElementById("card4exp").innerHTML = ""
            document.getElementById("edu").innerHTML = ""

        default:
            break;
        case 5: // activating card it experience card on experience page
            document.getElementById("card1exp").innerHTML = ""
            document.getElementById("card2exp").innerHTML = ""
            document.getElementById("card3exp").innerHTML = ""
            document.getElementById("edu").innerHTML = ""

            if (document.getElementById("card4exp").innerHTML == "") {
                delayTextInCards(itExp,"card4exp",400);   
            }
            break;
        case 6: // activating card education on experience page
            document.getElementById("card1exp").innerHTML = ""
            document.getElementById("card2exp").innerHTML = ""
            document.getElementById("card3exp").innerHTML = ""
            document.getElementById("card4exp").innerHTML = ""
            if (document.getElementById("edu").innerHTML == "") {
    
                    delayTextInCards(edu,"edu",400);   
             
                }
                break;
            

    }
}


function delayTextInCards(array,id,interval) {
    let i = 0     
        let time = setInterval(()=>{
document.getElementById(id).innerHTML += `<li class="uli" >` + array[i] + `</li>` + `<br> <br>`

            i++; 
            if(i==array.length){
                this.clearInterval(time);
            }
            }, interval);
    }