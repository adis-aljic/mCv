function func(parametar) {
    const physicsProf = [
        `I worked as a Physics professor in several schools in Tuzla Canton and in the RS since April 2015 until now.`,
        `As a Physics teacher I participated in seminars for Physics teachers in Nis, Serbia in December 2016, and in International conference in Aleksinac, Serbia in March 2017.`
    ]
    const internship = [
        `From November 2014 to February 2015 I had an internship graduation assignment which I completed at University Clinical Center Tuzla.`,
        `I took my graduate thesis from the subject Medical Physics, theme: „Planning Radiotherapy and calculation doses for middle aged patient with brain tumor“.`,
        `I worked with program XiO 4.4.00 and Radiotherapy is done at linear accelerator Synergy Elekta.`,
        `In those 4 months I sufficiently mastered the program for planning Radiotherapy and I used those skills to plan Radiotherapy for a middle aged patient with brain cancer.`,
        `I also gained experience and knowledge during the process of preparing patient for Radiotherapy, and about Radiotherapy in general.`
    ]
    const elcom = [
        `In September 2008 I had a summer job at Elcom doo. I was a volunteer for ELCOM Company in association with High School of Electrical Engineering on a project called „Green wave“ in Tuzla.`, 
         `I coordinated a team of 6 people during this project.`,
          `At this job I improved my leadership and teambuilding skills, as well as communication skills.`

    ]
    const tutor = [
        `I was, and still am, working with High school students, and this job bas helped me master my   communication skills.`,
        `Also during my education at BILD IT I was tutoring other students in JavaScript, HTML and CSS`
    ]
    const summer = [
        `Since 2009 I have held various summer jobs.`,
         `While working at these jobs I had direct involvement in several branches of different  industries, for example I have worked in tourism, salesmanship, catering.`,
          `In a few of these jobs I had been in charge, meaning that I had the responsibility of leading a team, as well as occupying managerial positions.`
    ]
    const bildText = [
        `During 2021 I was participant in 11th generation of BILD IT, intensive and wholesome education and preparation for becoming developer.`,
        `I learned new skills, how to work in evroiments like JavaScript, HTML, CSS, SQL, Excell and more.`,
        `During this education I got opprtutnity to be mentor and I held as co-lead two  workshops in Tuzla Summer Institute.`,
        `Beside mentoring during TSI when I had classes with 15+ people I was also mentoring other BILD IT participants.`,
        `During this year I build my first website, with few more, as well few excel application.`
        
    ]
    const bibliography = [
        `“Application software Tracker at moving a racket” - Poster section at IV International conference in Aleksinac, Serbia, February 2016.`,

`“Non-standard methods of solving equations in elementary school” at II International Science conference at High International School Cazin, Bosnia and Herzegowina, October 2017.`,  

`“Application Fourier series for obtaining wave equations” at VIII Mathematical Conference in Belgrade, November 2017.`

    ]

    switch (parametar) {
        case 1:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bild").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";


            if (document.getElementById("milInt").innerHTML == "") {
                delayTextInCards(internship,"milInt",400);   

            }
            break;

        case 2:
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bild").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";

            if (document.getElementById("milPhy").innerHTML == "") {
                delayTextInCards(physicsProf,"milPhy",400);   

            }
            break;

        case 3:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bild").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";

            if (document.getElementById("elcom").innerHTML == "") {
                delayTextInCards(elcom,"elcom",400);   

            }
            break;

        case 4:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bild").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";

            if (document.getElementById("tutor").innerHTML == "") {
                delayTextInCards(tutor,"tutor",400);   

            }
            break;

        case 5:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("bild").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";


            if (document.getElementById("summerJobs").innerHTML == "") {
                delayTextInCards(summer,"summerJobs",400);   

            }
            break;

        case 6:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bibl").innerHTML = "";


            if (document.getElementById("bild").innerHTML == "") {
                delayTextInCards(bildText,"bild",400);   

            }
            break;

        case 7:
            document.getElementById("milPhy").innerHTML = "";
            document.getElementById("milInt").innerHTML = "";
            document.getElementById("elcom").innerHTML = "";
            document.getElementById("tutor").innerHTML = "";
            document.getElementById("summerJobs").innerHTML = "";
            document.getElementById("bild").innerHTML = "";



            if (document.getElementById("bibl").innerHTML == "") {
                delayTextInCards(bibliography,"bibl",400);   

            }
            break;

            case 8:
                document.getElementById("milPhy").innerHTML = "";
                document.getElementById("milInt").innerHTML = "";
                document.getElementById("elcom").innerHTML = "";
                document.getElementById("tutor").innerHTML = "";
                document.getElementById("summerJobs").innerHTML = "";
                document.getElementById("bild").innerHTML = "";
                document.getElementById("bibl").innerHTML = "";





        case 8:
            document.getElementById("cardAboutMe").innerHTML = ""

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