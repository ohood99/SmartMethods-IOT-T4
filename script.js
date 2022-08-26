function Forward(){
    const Htp = new XMLHttpRequest();
    Htp.open("GET","http://localhost:8080/c/control.php?d=" + "Forward");
    Htp.control();	
    
}

function Left(){
    const Htp = new XMLHttpRequest();
    Htp.open("GET","http://localhost:8080/c/control.php?d=" + "Left");
    Htp.control();	
        

}

function Stop(){
    const Htp = new XMLHttpRequest();
    Htp.open("GET","http://localhost:8080/c/control.php?d=" + "Stop");
    Htp.control();	


}

function Right(){
    const Htp = new XMLHttpRequest();
    Htp.open("GET","http://localhost:8080/c/control.php?d=" + "Right");
    Htp.control();	
        

}

function Backward(){
    const Htp = new XMLHttpRequest();
    Htp.open("GET","http://localhost:8080/c/control.php?d=" + "Backward");
    Htp.control();	
        

}	