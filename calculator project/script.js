let data = "";
let oldData="";

const compute = (str) => {
    let result;
    let list1=str.split("+");
    for(let i=0; i<list1.length; i++) {
        let list2=list1[i].split("-");
        for(let j=0; j<list2.length; j++) {
            let list3=list2[j].split("*");
            for(let k=0; k<list3.length; k++) {
                let list4=list3[k].split("/");
                for(let l=0; l<list4.length; l++) {
                    if(l===0){
                        list3[k]=Number(list4[0]);
                    }
                    else{
                        list3[k]/=Number(list4[l]);
                    }
                } 
                if(k===0){
                    list2[j]=Number(list3[0]);
                }
                else{
                    list2[j]*=Number(list3[k]);       
                }
            }
            if(j===0){
                list1[i]=Number(list2[0]);
            }
            else{
                list1[i]-=Number(list2[j]);
            }
        }
        if(i===0){
            result=Number(list1[0]);
        }
        else{
            result+=Number(list1[i]);
        }
    }
    return result;
}

let getVal = () =>{
    let val = event.target.value;
    if (val!=='=' && val!=='DEL' && val!=='AC' && val!=='MS' &&val!=='MC'){
        data+=val;
    }
    else if (val==='DEL'){
        let len=data.length;
        data=data.slice(0, len-1);
    }
    else if (val==='AC'){
        data="";
    }
    else if (val==='MC'){
        oldData="";
    }
    else if (val==='MS'){
        let x=Number(data);
        let y=Number(oldData);
        oldData=data;
        data=(x+y).toString();
    }
    else if (val==='='){
        if (data)
            data=compute(data);
    }
    document.getElementById("dsp").value=data;
}