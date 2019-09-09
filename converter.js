function convert() {    
    var input_str; 
    var text_input; 
    var output_html=""; 
    var counter;    
    
    input_str=document.getElementById('in_txt').value; //get input and store it in input_str
    text_input=input_str.trim(); //trim() input
    if(text_input.length > 0){
        output_html+="<ol><li>"; //begin by creating paragraph
        for(counter=0; counter < text_input.length; counter++){
            console.log(isNaN(text_input[counter]));
            console.log(typeof parseInt(text_input[counter]));

            switch (text_input[counter]){
                case '\n':
                    if (text_input[counter+1] ==='\n'){
                    output_html+="</li></ol>\n<ol><li>";
                    counter++;
                }
            else output_html+="</li><li>";          
                break;
            default:
            if( isNaN(text_input[counter]) && text_input[counter] !== '.') {
                output_html+=text_input[counter];
            }
    }
}
                    
        
        output_html+="</li></ol>"; //finally close paragraph
    }
    document.getElementById('out_html').value = output_html; // display output html 
}

var el = document.getElementById('btn');
el.onclick = convert;