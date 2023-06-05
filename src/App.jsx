import Footer from "./components/Footer"
import Header from "./components/Header"
import Note from "./components/Note"
import notes from "./components/notes"




const App=()=>{
    return(
        <>
            
            <Header />
            {notes.map((eachNote)=>{
                return(
                    <Note
                        key= {eachNote.key}
                        title= {eachNote.title}
                        content= {eachNote.content}
                    />
                )
            })}
            <Footer/>
        </>
    )
}
export default App