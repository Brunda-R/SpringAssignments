import React from 'react'
const names=['EShan','Tanish','James','Paul','George','Esha'];

function App3(){
    return (
        <div>
            {
            names.filter(name=>name.includes('E')).map(filteredName=>(
                <li>
                    {filteredName}
                </li>    
            ))
            
            }

        </div>
    )
}

export default App3;