import React, { useEffect, useState } from 'react'

const Container = () => {

    const [inputSring, setinputSring] = useState('')

    const [output, setoutput] = useState('');

    const handleChange=(e)=>{
        setinputSring(e.target.value);
    }

    const isVowel=(ch)=>{
        let vowels=["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

        for(let i=0; i<vowels.length; i++){
            if(vowels[i]==ch){
                return true;
            }
        }

        return false;
    }

    const convertWord=(word)=>{

        let temp="";
        

        for(let i=0; i<word.length; i++){
            // if(i==(word.length-1)){
            //     temp+=word[i];
            //     return;
            // }
            if(i==(word.length-1)){
                console.log("Bansi")
                temp+=word[i];
                return temp;
            }
            let t1 = word[i].toLowerCase();
            let t2 = word[i + 1].toLowerCase();

            console.log(t1, t2)
            if(isVowel(word[i]) && isVowel(word[i+1]) && t1<=t2){
                temp+="--";
                // console.log(temp);
                i++;
            }
            else{
                // console.log(word[i]);
                temp+=word[i];
            }
        }

        // console.log(temp);
        return temp;
    }

    let reverse=(arr)=>{
        let i=0, j=arr.length-1;

        while(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }

        return arr;
    }
   

    const calculateOutput=()=>{
        
        let temparr=inputSring.split(" ");
        temparr=reverse(temparr);
        // console.log(temparr);

        let outputStr="";

        for(let i=0; i<temparr.length; i++){
            let tempWord=temparr[i];
            // console.log(tempWord);
            let word=convertWord(tempWord);
            // console.log(word);

            outputStr+=word;
            outputStr+=" ";
        }

        

        let arr=Array.from(outputStr);
        // console.log(arr);

        
        setoutput(arr);
        // console.log(outputStr)
        // console.log(outputStr);÷
    }

    useEffect(()=>{
        calculateOutput();
    }, [inputSring]);
  return (
    <div className='w-[90%] h-[400px] border border-black flex flex-col items-center justify-center gap-5'>

        <input type="text" className='w-[90%] border py-2 border-black rounded-md px-4' 
        value={inputSring}  onChange={handleChange}/>



        {output.length!=0 && <div className='flex flex-row items-start justify-center gap-0'>
            {output.map((ele, idx)=>{

                let colType;
                if(ele=="-"){
                    colType="bg-gray-500";
                }
                else if(ele==" "){
                    colType="bg-gray-100";
                }
                else{
                    colType="bg-yellow-500";
                }
                return <div key={idx} className={`h-[30px] w-[30px] ${colType}
                `}>{ele}</div>
            })}
        </div>}

        <div className='bg-purple-500 py-2 px-5' onClick={calculateOutput}>Convert</div>
    </div>
  )
}

export default Container