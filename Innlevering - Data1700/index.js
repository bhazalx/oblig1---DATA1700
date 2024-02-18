let bilettRegister=[];
        function visbilettRegister(){
            let ut = "<table><tr>" +
                  "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>TelefonNr</th><th>Epost</th>" +
                  "</tr>";
            for (let p of bilettRegister){
                ut+="<tr>";
                ut+="<td>"+p.Film+"</td><td>"+p.Antall+"</td><td>"+p.Fornavn+"</td><td>"+p.Etternavn+"</td><td>"+p.TelefonNr+"</td><td>"+p.Epost+"</td>";
                ut+="</tr>";
            }
            document.getElementById("bilettRegister").innerHTML=ut;
        }
        function registrerBilett(){
            const Film = document.getElementById("Film").value;
            const Antall = document.getElementById("Antall").value;
            const Fornavn = document.getElementById("Fornavn").value;
            const Etternavn = document.getElementById("Etternavn").value;
            const TelefonNr = document.getElementById("TelefonNr").value;
            const Epost = document.getElementById("Epost").value;

            if(Film === ""){
                document.getElementById("p1").textContent = "Du må velge en film!";
            }
            else if(Antall === ""){
                document.getElementById("p2").textContent = "Du må velge mengden av biletter før du går videre!";
            }
            else if(Antall < 1){
                document.getElementById("p2").textContent = "Du må ha minst ett bilett!";
            }
            else if(Fornavn === ""){
                document.getElementById("p3").textContent = "Navn feltet kan ikke være tomt!";
            }
            else if(Etternavn === ""){
                document.getElementById("p4").textContent = "Etternavn feltet kan ikke være tomt!";
            }
            else if(TelefonNr === ""){
                document.getElementById("p5").textContent = "Du må taste inn et mobil nummer for å gå videre!";
            }
            else if( isNaN(TelefonNr)){
                document.getElementById("p3").textContent = "Du må taste inn gyldig mobil nummer, feltet kan ikke fylles ut med tekst!";
            }
            else if(Epost === ""){
                document.getElementById("p6").textContent = "Du må taste inn en epost adresse for å fullføre registrasjonen!";
            }
            else{ const person = {
                Film : Film,
                Antall : Antall,
                Fornavn : Fornavn,
                Etternavn : Etternavn,
                TelefonNr : TelefonNr,
                Epost : Epost
            };
            bilettRegister.push(person);
            document.getElementById("Film").value="";
            document.getElementById("Antall").value="";
            document.getElementById("Fornavn").value="";
            document.getElementById("Etternavn").value="";
            document.getElementById("TelefonNr").value="";
            document.getElementById("Epost").value="";
            visbilettRegister()}}

           

            function slettBiletter(){
            bilettRegister = [];
            visbilettRegister();
            }