let s='';
function display(ele){
    document.getElementById('result').value+=ele;
    s=s+ele;
    return ele;
}
function allclear(){
    document.getElementById('result').value='';
}
function solve(){
    let x=document.getElementById('result').value;
    let y=eval(x);
    document.getElementById('result').value= y;
    return ;
}
function del(){
 s=s.slice(0,-1);
 document.getElementById('result').value=s;
}