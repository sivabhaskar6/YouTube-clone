import Button from "./Button.js";

const list = ["All", "Music", "Latest movies", "Podcasts", "Telugu cinema", "Gamming", "Science movies", "Hindi movies", "Tamil movies", "Recently uploded", "Watched", "Web series", "English movies", "Horror series", "Funny movies", "Trending"];

const ButtonList = ()=>{
    return(
        <div className=" sticky top-0 bg-white flex gap-1 overflow-x-auto scrollbar-hide mr-1">
            {list.map((item, index) => (
                <Button name={item} key={index}/>
            ))}
        </div>
    )
}
export default ButtonList;

          
  
