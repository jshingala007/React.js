

function App() {

  // destructring
  
  const arr =[10,20,30];
  const [j,k,l] = arr

  console.log(j,k,l);

// ==========================================================

  // spreding

  let arr1 = [155,55,2326]
  let arr2 = [111.000,999]

    let arr3 = [...arr1,...arr2]
    console.log(arr3)

// ================================================================
    // object printing

    let address = {
      country : 'India',
      city : 'surat',
      pincode : 394101
        
    }

     let obj = {
      name : 'jay'
     }


    // =======================================


  return (
    <>

   <h1>hello gyuses</h1>
          
      
    </>
  )
}

export default App
