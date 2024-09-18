import Data from './Data'

function App() {

  let data = [
    {
        id : 1,
        name : 'yash prajapati',
        email : 'yash@gmail.com',
        password : 'yash@123',
        course : ["html","css","bootstrap","js"],
        city : "surat"
    },
    {
        id : 2,
        name : 'utasav bharoliya',
        email : 'bhuro@gmail.com',
        password : 'bhuri@123',
        course : ["photosho","figma","illustrator","adobe xd"],
        city : "rajkot"
    },
    {
        id : 3,
        name : 'milan ghori',
        email : 'milan@gmail.com',
        password : 'm@123',
        course : ["html","css","bootstrap","nodejs"],
        city : "amareli"
    },
    {
        id : 4,
        name : 'raj donda',
        email : 'raj@gmail.com',
        password : 'raju@123',
        course : ["html","css","bootstrap","python"],
        city : "vadodara"
    }

]


   return (
    <>
    <Data explorer={data}/>
    </>
  )
}

export default App
