import Button from "./Button.js";


const ButtonList = ()=>{
    return(
        <div className="flex gap-1 overflow-x-auto scrollbar-hide mr-1">
            <Button name="All"/>
            <Button name="Music"/>
            <Button name="Latest movies"/>
            <Button name="Podcasts"/>
            <Button name="Telugu cinema"/>
            <Button name="Gamming"/>
            <Button name="Science movies"/>
            <Button name="Hindi movies"/>
            <Button name="Tamil movies"/>
            <Button name="Recently uploded"/>
            <Button name="Watched"/>
            <Button name="Web series"/>
            <Button name="English movies"/>
            <Button name="Horror series"/>
            <Button name="Funny movies"/>
            <Button name="Trending"/>
        </div>
    )
}
export default ButtonList;
