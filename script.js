class Joueur {
    pseudo;
    reponses;
    score;
    timer;

    enregistrerResultat(){

    }
}

class Quizz{
    questions = [];
    nbQuestions = 0;

    creationQuestion(data, button){
        
        let formulaire = document.createElement("form");
        document.body.appendChild(formulaire)

        let hasardType = Math.floor(Math.random() * Math.floor(4))
        let aleatoire = Math.floor(Math.random() * Math.floor(250))


        let question = null

        console.log(aleatoire)
        console.log(hasardType);


        let label1 = document.createElement("label");
        let reponse1 = document.createElement("input")
        let label2 = document.createElement("label");
        let reponse2 = document.createElement("input")
        let label3 = document.createElement("label");
        let reponse3 = document.createElement("input")
        let label4 = document.createElement("label");
        let reponse4 = document.createElement("input")
        reponse1.setAttribute("type", "radio")
        reponse2.setAttribute("type", "radio")
        reponse3.setAttribute("type", "radio")
        reponse4.setAttribute("type", "radio")
        

        switch (hasardType) {
            case 0 :
                console.log('type1 : Pays -> Drapeau');

                question = document.createElement("h2")
                question.innerHTML = "Quel drapeau correspond au pays " + data[aleatoire].name;
                formulaire.appendChild(question)


                label1.innerHTML = `<img src="${data[aleatoire].flag}"/>`;
                reponse1.setAttribute("id",data[aleatoire].flag)
                label1.setAttribute("for",data[aleatoire].flag)
                formulaire.appendChild(reponse1)
                formulaire.appendChild(label1)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label2.innerHTML = `<img src="${data[aleatoire].flag}"/>`;
                reponse2.setAttribute("id",data[aleatoire].flag)
                label2.setAttribute("for",data[aleatoire].flag)
                formulaire.appendChild(reponse2)
                formulaire.appendChild(label2)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label3.innerHTML = `<img src="${data[aleatoire].flag}"/>`;
                reponse3.setAttribute("id",data[aleatoire].flag)
                label3.setAttribute("for",data[aleatoire].flag)
                formulaire.appendChild(reponse3)
                formulaire.appendChild(label3)
                

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label4.innerHTML = `<img src="${data[aleatoire].flag}"/>`;
                reponse4.setAttribute("id",data[aleatoire].flag)
                label4.setAttribute("for",data[aleatoire].flag)
                formulaire.appendChild(reponse4)
                formulaire.appendChild(label4)
                

                break;


            case 1 :
                console.log('type2 : Drapeau -> Pays');

                question = document.createElement("img")
                question.setAttribute("src", data[aleatoire].flag)
                formulaire.appendChild(question)

                label1.innerHTML = data[aleatoire].name;
                reponse1.setAttribute("id",data[aleatoire].name)
                label1.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse1)
                formulaire.appendChild(label1)


                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label2.innerHTML = data[aleatoire].name;
                reponse2.setAttribute("id",data[aleatoire].name)
                label2.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse2)
                formulaire.appendChild(label2)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label3.innerHTML = data[aleatoire].name;
                reponse3.setAttribute("id",data[aleatoire].name)
                label3.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse3)
                formulaire.appendChild(label3)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label4.innerHTML = data[aleatoire].name;
                reponse4.setAttribute("id",data[aleatoire].name)
                label4.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse4)
                formulaire.appendChild(label4)

                break


            case 2 :
                console.log('type3 : capitale -> Pays');
                
                question = document.createElement("h2")
                question.innerHTML =  data[aleatoire].capital + " est la capitale de : ";
                formulaire.appendChild(question)

                label1.innerHTML = data[aleatoire].name;
                reponse1.setAttribute("id",data[aleatoire].name)
                label1.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse1)
                formulaire.appendChild(label1)


                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label2.innerHTML = data[aleatoire].name;
                reponse2.setAttribute("id",data[aleatoire].name)
                label2.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse2)
                formulaire.appendChild(label2)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label3.innerHTML = data[aleatoire].name;
                reponse3.setAttribute("id",data[aleatoire].name)
                label3.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse3)
                formulaire.appendChild(label3)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label4.innerHTML = data[aleatoire].name;
                reponse4.setAttribute("id",data[aleatoire].name)
                label4.setAttribute("for",data[aleatoire].name)
                formulaire.appendChild(reponse4)
                formulaire.appendChild(label4)

                break;


            case 3 :
                console.log('type4 : Pays -> capitale');

                question = document.createElement("h2")
                question.innerHTML = "Quelle est la capitale de " + data[aleatoire].name;
                formulaire.appendChild(question)

                label1.innerHTML = data[aleatoire].capitale;
                reponse1.setAttribute("id",data[aleatoire].capital)
                label1.setAttribute("for",data[aleatoire].capital)
                formulaire.appendChild(reponse1)
                formulaire.appendChild(label1)


                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label2.innerHTML = data[aleatoire].capitale;
                reponse2.setAttribute("id",data[aleatoire].capital)
                label2.setAttribute("for",data[aleatoire].capital)
                formulaire.appendChild(reponse2)
                formulaire.appendChild(label2)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label3.innerHTML = data[aleatoire].capitale;
                reponse3.setAttribute("id",data[aleatoire].capital)
                label3.setAttribute("for",data[aleatoire].capital)
                formulaire.appendChild(reponse3)
                formulaire.appendChild(label3)

                aleatoire = Math.floor(Math.random() * Math.floor(250))
                label4.innerHTML = data[aleatoire].capitale;
                reponse4.setAttribute("id",data[aleatoire].capital)
                label4.setAttribute("for",data[aleatoire].capital)
                formulaire.appendChild(reponse4)
                formulaire.appendChild(label4)

                break;


            default:
                console.log(`de nada ERREUR`);
        }


        formulaire.appendChild(button)


        this.enregistrementQuestion(question, label1, label2, label3, label4);
        this.enregistrerResultat(reponse1, reponse2, reponse3, reponse4)
    }
    enregistrementQuestion(question, label1, label2, label3, label4){
        this.nbQuestions += 1
        this.questions.push({
            question: question,
            label1: label1,
            label2: label2,
            label3: label3,
            label4: label4
        })
        console.log(this.questions)

    }

}

class Session{
    constructor(joueur, quizz){
        this.joueur = joueur;
        this.quizz = quizz;
    }

    calculScore(){
        //TODO
        console.log("J'affiche le score")
    }
    afficheCorrection(){
        //TODO
        console.log("ceci est la correction")
    }
}



document.addEventListener("DOMContentLoaded", function(){

    let apiUrl = "http://restcountries.eu/rest/v2";

        fetch(apiUrl).then(function (data){ 
            return data.json()
        }).then(function (data){
            const formulaire = document.getElementById("commencer")        
            let validation = document.createElement("button");
            validation.setAttribute=("id", "validation")
            validation.innerText = "Valider"


            formulaire.addEventListener('submit', function(e){
                e.preventDefault();
                let input = document.getElementById("pseudo")
                user.pseudo = input.value;
                document.body.innerHTML=""
                user.quizz.creationQuestion(data, validation);
            })


            
            validation.addEventListener('click', function(e){
                document.body.innerHTML=""
                if(user.nbQuestions<20){
                  user.quizz.creationQuestion(data, validation);  
                }else{
                    user.calculScore();
                }
                
            })


        })

    const user = new Session(new Joueur(), new Quizz())

    



});