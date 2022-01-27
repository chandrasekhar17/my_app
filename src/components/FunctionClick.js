import React from 'react' ;

function FunctionClick()
{

   function clickTheButton()
    {
        console.log('Buttton Clicked')
    }
    return(
        <div>
            <button onClick={clickTheButton}>Click me</button>
          
        </div>
    )
}

export default FunctionClick