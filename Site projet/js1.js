   // displaying the first block of question
        document.getElementsByClassName('container')[0].style.display = "block";

        // DEFINING THE NEXT FUNCTION
        function next(id) {
            document.getElementsByClassName('container')[id-1].style.display = "none";
            document.getElementsByClassName('container')[id].style.display = "block";
        }
        //getting final result
        function result() {
            var score = 0;
            var comp = 0;
           

             if (document.getElementById('1').checked ||  document.getElementById('2').checked || 
                document.getElementById('3').checked || document.getElementById('4').checked ||
                 document.getElementById('5').checked || document.getElementById('6').checked ||
                  document.getElementById('7').checked || document.getElementById('8').checked ||
                   document.getElementById('9').checked || document.getElementById('10').checked || 
                   document.getElementById('11').checked || document.getElementById('12').checked || 
                    document.getElementById('15').checked || document.getElementById('correct5').checked ||
            document.getElementById('correct6').checked || document.getElementById('correct1').checked|| 
            document.getElementById('correct2').checked || document.getElementById('correct3').checked  ) {
                comp=comp+1;
            }
            // QUESTION 5
             if (document.getElementById('correct5').checked &&
            document.getElementById('correct6').checked) {
                 score=score+2;
            }

             if (document.getElementById('correct1').checked) {
                score=score+2;
            }
            
            if (document.getElementById('correct3').checked) {
                 score=score+2;
            }
            if (document.getElementById('correct2').checked) {
                 score=score+2;
            }
            
            if (!document.getElementById('10').checked && !document.getElementById('11').checked &&
            !document.getElementById('12').checked && !document.getElementById('15').checked && score>0 ) 
            {
                score=score+2;
            }
                 if (comp==0) {

               var x = prompt('Quelle est la question piège')
               if(x==4){
                score=score+2;
               }
            }

            if ( (document.getElementById('1').checked ||  document.getElementById('2').checked || document.getElementById('3').checked) ) { score=score-1;}
            if ( (document.getElementById('14').checked ||  document.getElementById('12').checked || document.getElementById('13').checked )) { score=score-1;}
            if ((document.getElementById('4').checked ||  document.getElementById('5').checked || document.getElementById('6').checked) ) { score=score-1;}
            if ((document.getElementById('7').checked ||document.getElementById('15').checked ||  document.getElementById('8').checked)  ) { score=score-1;}
            if ((document.getElementById('9').checked ||  document.getElementById('10').checked || document.getElementById('11').checked) ) { score=score-1;}
            alert("Votre score est : "+ score);
            next(5);

            document.getElementById('resultat').innerHTML= score;
            if (score >=8){

                document.getElementById('connaissance').innerHTML= "Très Bonne connaissance sur la ville ";
            }
            if (score >=6 && score <8 ){

                document.getElementById('connaissance').innerHTML= "Bonne connaissance sur la ville ";
            }
            if (score >=4 && score<6){

                document.getElementById('connaissance').innerHTML= "Connaissance moyenne sur la ville";
            }
            if (score <4){

                document.getElementById('connaissance').innerHTML= "Faible connaissance sur la ville ";
            }
        }