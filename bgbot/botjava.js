    function woah(){
         
      var x = document.getElementById('navlaiy');
        
        if (x.className==='navlaiy' || x.className==="navlay") {
            x.className="navley";
            document.getElementById('navy').style.transform="rotateY(180deg)"
            document.getElementById('hm1').style.transform="rotate(45deg) translate(0vh,1.4vh)"
            document.getElementById('hm3').style.transform="rotate(-45deg) translate(0.2vh,-1.8vh)"
            document.getElementById('hm2').style.opacity="0"
            document.getElementById('dboard').style.display="inline-block"
            document.getElementById('staff').style.display="inline-block"
            document.getElementById('idk').style.display="inline-block"
        }
        else {
            x.className="navlay";
            document.getElementById('navy').style.transform="rotateY(0)"
            document.getElementById('hm1').style.transform="rotate(0) translate(0)"
            document.getElementById('hm3').style.transform="rotate(0) translate(0)"
            document.getElementById('hm2').style.opacity="1"
            document.getElementById('dboard').style.display="none"
            document.getElementById('staff').style.display="none"
            document.getElementById('idk').style.display="none"
        }

      }
