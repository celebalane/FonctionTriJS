var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];
var liste=[[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];

var tableau = liste2.concat(liste);                       //Fusion des deux tableaux//

////////////////////////////////////////////Tri croissant par classement////////////////////////////////////

function classementNombre(a,b) {                                    //Fonction de classement qui sera utilisé par sort
	if (parseInt(a) < parseInt(b)) {                                //parseInt permet de bien comparer des nombres et non des strings
       return -1;                                                   //Si a<b retourne -1 à .sort pour lui indiqué l'infériorité
   } 
   else if (parseInt(a) > parseInt(b)) {                            //Si a>b retourne 1 à .sort pour lui indiqué la supériorité
     return 1;
   }
   else {                                                           //a=b retourne 0 pour indiqué une égalité
    return 0; 
   }
}
  	
function classement() {                                                  //Fonction appelée par le bouton classement
	document.getElementById('resultat').innerHTML ='';                   //Reset de la liste
	for(i=0; i<=tableau.length-1; i++) {                                 //Boucle pour afficher le contenu du tableau//
		var ligne = document.getElementById('resultat').insertRow(-1);   //On crée une nouvelle ligne à la fin (-1) du tableau
		for(j=0; j<=tableau[i].length-1;j++) {                          //Boucle pour afficher le contenu des sous tableaux 
			tableau1 = tableau.sort(classementNombre);           	    //On applique la fonction de classement précédemment créée et on met le tout dans un nouveau tableau             

			var colonne1 = ligne.insertCell(j);	                        //On ajoute une nouvelle cellule pour chaque objet
			colonne1.innerHTML += tableau[i][j];                        //On écrit le contenu de la nouvelle cellule
		}
	}
}

///////////////////////////////////////////Tri croissant par dossard//////////////////////////////////////

function classementDossard(a,b) {                           //Fonction de classement qui sera utilisé par sort
	if (parseInt(a[2]) < parseInt(b[2])) {
       return -1;
   } 
   else if (parseInt(a[2]) > parseInt(b[2])) {
     return 1;
   }
   else {
    return 0;
   }
}

function dossard() {
	document.getElementById('resultat').innerHTML='';                     //Reset de la liste
	for(i=0; i<=tableau.length-1; i++) {                                 //Boucle pour afficher le contenu du tableau//
		var ligne = document.getElementById('resultat').insertRow(-1);  //On ajoute une ligne à la fin (-1) du tableau
		for(j=0; j<=tableau[i].length-1;j++) {                          //Boucle pour afficher le contenu des sous tableaux 

            tableau2 = tableau.sort(classementDossard);          	    //On applique la fonction de classement précédemment créée et on met le tout dans un nouveau tableau         
		
			var colonne1 = ligne.insertCell(j);	                        //On ajoute une nouvelle cellule pour chaque objet
			colonne1.innerHTML += tableau[i][j];                         //On écrit le contenu de la nouvelle cellule
		}  
	}
}

/////////////////////////////////////////Tri par nom//////////////////////////////////////////////////

function classementNom(a,b) {                             //Fonction de classement qui sera utilisé par sort
	if (a[1] < b[1]) {
       return -1;
   } 
   else if (a[1] > b[1]) {
     return 1;
   }
   else {
    return 0;
   }
}

function nom() {
	document.getElementById('resultat').innerHTML='';                    //Reset de la liste
	for(i=0; i<=tableau.length-1; i++) {                                 //Boucle pour afficher le contenu du tableau//
		var ligne = document.getElementById('resultat').insertRow(-1);  //On ajoute une ligne à la fin (-1) du tableau
		for(j=0; j<=tableau[i].length-1;j++) {                   	
		tableau3 = tableau.sort(classementNom);              	        //On applique la fonction de classement précédemment créée et on met le tout dans un nouveau tableau     
		var colonne1 = ligne.insertCell(j);                             //On ajoute une nouvelle cellule pour chaque objet
		colonne1.innerHTML += tableau[i][j];                             //On écrit le contenu de la nouvelle cellule
		}  
	}
}

/////////////////////////////////////////Fonction recherche par classement//////////////////////////////////////////////////
/*Ne fonctionne pas*/
//function recherche(){                                    //Au déclenchement du bouton, la fonction récupère la saisie utilisateur et la retourne
//var	saisie = document.getElementById('saisie').value; //Récupération du texte entrée dans la zone de recherche
//alert(saisie); //Affichage de l'entrée
//}


function rechercheClassement(){                                      //Fonction appelé par le bouton
	document.getElementById('resultat').innerHTML='';     //Remise à zéro du tableau au déclenchement de la fonction
	var	saisie1 = document.getElementById('saisie1').value; //Récupération saisie utilisateur
	for(i=0; i<=tableau.length-1; i++) {                 //Boucle pour afficher le contenu du tableau//                       	
	   if(parseInt(saisie1) == tableau[i][0]){           //Cherche une correspondance entre la saisie et le contenu des index 0 des sous tableaux                et si oui :       	
	var ligne = document.getElementById('resultat').insertRow(-1);  //On ajoute une ligne

	var colonne1 = ligne.insertCell(0);                 //on a une ajouté une cellule qui prend le classement
	colonne1.innerHTML += tableau[i][0];

	var colonne2 = ligne.insertCell(1);                 //on ajoute la seconde cellule qui prend le nom
	colonne2.innerHTML += tableau[i][1];

	var colonne3 = ligne.insertCell(2);                  //on ajoute la troisième cellule qui prend le n° de dossard
	colonne3.innerHTML += tableau[i][2]; 

		}
	}
}

/////////////////////////////////////////Fonction recherche par dossard//////////////////////////////////////////////////

function rechercheDossard(){                                      //Fonction appelé par le bouton
	document.getElementById('resultat').innerHTML='';     //Remise à zéro du tableau au déclenchement de la fonction
	var	saisie2 = document.getElementById('saisie2').value; //Récupération saisie utilisateur
	for(i=0; i<=tableau.length-1; i++) {                 //Boucle pour afficher le contenu du tableau//                       	
	   if(parseInt(saisie2) == tableau[i][2]){           //Cherche une correspondance entre la saisie et le contenu des index 2 des sous tableaux                et si oui :       	
	var ligne = document.getElementById('resultat').insertRow(-1);  //On ajoute une ligne

	var colonne1 = ligne.insertCell(0);                 //on a une ajouté une cellule qui prend le classement
	colonne1.innerHTML += tableau[i][0];

	var colonne2 = ligne.insertCell(1);                 //on ajoute la seconde cellule qui prend le nom
	colonne2.innerHTML += tableau[i][1];

	var colonne3 = ligne.insertCell(2);                  //on ajoute la troisième cellule qui prend le n° de dossard
	colonne3.innerHTML += tableau[i][2]; 

		}
	}
}
