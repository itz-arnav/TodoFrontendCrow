import css from "./style/App.module.css"
import { FaCircleCheck } from "react-icons/fa6";

function App() {

  return (
    <div className={css.appContainer}>
      <div className={css.top}>
        <FaCircleCheck className={css.checkIconHeader}/>
        <h1>Todo App</h1>
      </div>
    </div>
  )
}

export default App
