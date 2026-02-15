import footbol from "./footbal.json"
import templatefootball from "./template-football"


const listRef = document.querySelector(".list")
listRef.innerHTML = templatefootball({footbol})