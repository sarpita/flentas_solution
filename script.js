document.getElementById('submitPeople').addEventListener("click",submitPeople);
document.getElementById('reset').addEventListener("click",resetClick);
const inputerror =document.getElementById('error');
function resetClick(){
    window.location.reload();
}
function submitPeople() {
    const showinputsWrapper= document.getElementById("showinputsWrapper");
    const noOfPeople= document.getElementById("noOfPeople").value;
    if(noOfPeople !="") {
        for(let i=0;i<noOfPeople;i++){
            const input = document.createElement("Input");
            input.setAttribute("class","input-text");
            const inputLabel=document.createElement('Label');
            inputLabel.setAttribute("class","input-label");
            inputLabel.innerText=`Enter Villager ${i+1} cost:`;
            showinputsWrapper.append(inputLabel);
            showinputsWrapper.append(input);
           
        }
        var sumbitVAlueBtn = document.createElement("Button");
        sumbitVAlueBtn.setAttribute("id","Submitbtn");
        sumbitVAlueBtn.innerText="Submit";
        sumbitVAlueBtn.addEventListener('click',submitClick);
        showinputsWrapper.append(sumbitVAlueBtn);
        document.getElementById('submitPeople').setAttribute('disabled',"disabled");
        inputerror.setAttribute('style','display:none');
    }
    else{
        inputerror.innerText="Please enter the number of villagers!";
        inputerror.setAttribute('style','display:block');
    }
  }
  function submitClick(){
    let isError=false;
    const inputs = showinputsWrapper.getElementsByTagName('input');
    const peopleArray = Array.from(inputs).map((element)=>{
        if(element.value ==""){
            inputerror.innerText="Please enter costs for all the villagers!";
            inputerror.setAttribute('style','display:block');
            isError=true;
            return;
        }
       return element.value;
    })
    if(!isError){
        error.setAttribute('style','display:none');
        const sortedArray =peopleArray.sort((a,b)=>a-b);
        const minvalue= minRent(sortedArray);
        const result= document.getElementById('result');
        result.innerText=`Minimun cost for travel: ${minvalue}`;
        result.setAttribute('style','display:block');
    }
}

function minRent(array) {
    const min= (a,b) =>a < b ? a:b;
    let n = array.length;
    let result = 0;
    for(let i=n;i>3;i-=2){
        result = result + min((2*parseInt(array[0])+parseInt(array[n-1])+parseInt(array[n-2])),(parseInt(array[0])+2*parseInt(array[1])+parseInt(array[n-1])));
    }
    if (n == 3) {
        result += (parseInt(array[0])+parseInt(array[1])+parseInt(array[2])); 
    }
    else if (n == 2)
    result +=parseInt(array[1]) ;
    else
    result +=parseInt(array[0])
    return result;
}